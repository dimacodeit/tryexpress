const router = require('express').Router();

router.use('/bookmarks', require('./bookmarks'));
router.use('/tweets', require('./tweets'));

module.exports = router;