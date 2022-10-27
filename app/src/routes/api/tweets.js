const db = require('../../../../firebase')

const router = require('express').Router();

const respMapper = (doc) => {
    const data = doc.data()
    return ({
        ...data,
        date: data.date?.toDate() ?? null,
        updateDate: data.updateDate?.toDate() ?? null,
    })
}

router.get('/', async function (req, res) {
    try {
        const colRef = db.collection('tweets')
        const tweets = await colRef.orderBy('date', 'desc').get()
        res.status(200)
        res.send(tweets.docs.map(respMapper))
    } catch(e) {
        console.log(e)
        res.status(500)
        res.send(e)
    }
});

module.exports = router;
