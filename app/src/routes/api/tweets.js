const db = require('@firebase');
const timestamp = require('@utils/timestamp');
const router = require('express').Router();

const COLLECTION_NAME = 'tweets';

const respMapper = (doc) => {
  const data = doc.data();
  return {
    ...data,
    id: doc.id,
    date: data?.date?.toDate() ?? null,
    updateDate: data?.updateDate?.toDate() ?? null,
  };
};

router.get('/', async (req, res) => {
  try {
    const colRef = db.collection(COLLECTION_NAME);
    const tweets = await colRef.orderBy('date', 'desc').get();
    res.status(200);
    res.send(tweets.docs.map(respMapper));
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});

router.get('/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.send('there is no id');
    return;
  }

  try {
    res.status(200);
    res.send(req.params);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

router.post('/', async (req, res) => {
  if (!req.body.name || !req.body.text) {
    res.status(400);
    res.send('lack of name or text');
    return;
  }

  try {
    const tweet = {
      name: req.body.name,
      text: req.body.text,
      edited: false,
      date: timestamp.now(),
      updateDate: timestamp.now(),
    };

    const colRef = db.collection(COLLECTION_NAME);
    const created = await colRef.add(tweet);
    const createdTweet = await created.get();

    res.status(200);
    res.send(respMapper(createdTweet));
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});

router.put('/', async (req, res) => {
  if (!req.body.name || !req.body.text || !req.body.id) {
    res.status(400);
    res.send('lack of name or text or id');
    return;
  }

  try {
    const tweet = {
      name: req.body.name,
      text: req.body.text,
      edited: true,
      updateDate: timestamp.now(),
    };

    const docRef = db.collection(COLLECTION_NAME).doc(req.body.id);
    await docRef.update(tweet);
    const updated = await docRef.get();

    res.status(200);
    res.send(respMapper(updated));
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});

router.delete('/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.send('there is no id');
    return;
  }

  try {
    const docRef = db.collection(COLLECTION_NAME).doc(req.params.id);
    const deleted = await docRef.get()
    await docRef.delete();

    res.status(200);
    res.send(deleted ? respMapper(deleted) : null);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});

module.exports = router;
