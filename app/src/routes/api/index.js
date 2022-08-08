const router = require('express').Router();

router.use('/bookmarks', require('./bookmarks'));

module.exports = router;