// This is a require
var shortUrl = require('../modules/url');

module.exports = (express) => {
  var router = express.Router();

  router.get('/status', (req, res) => {
    console.log("connect");
    res.json({
      healthy: true,
    });
  });

  //get the url
  router.post('/api/v1/url/', function ( req, res ) {
    res.json('Here is the shortened url: ' + 'http://www.' + shortUrl.shortUrl() + '.com');
  });

return router;

};
