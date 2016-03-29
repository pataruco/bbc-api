var express = require('express'),
    router  = express.Router();

router.get('/', (req, res) => {
  console.log('Redirect to /a');
  res.redirect('/letter=a/page=1');
});

router.get('/letter=:letter/page=:page', (req, res) => {
  res.send('Hola');
});

module.exports = router;
