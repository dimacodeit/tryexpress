const router = require('express').Router();

router.get('/', function (req, res) {
    res.send('works')
});

module.exports = router;
