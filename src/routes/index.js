// This is a require
var shortUrl = require('../modules/url');

module.exports = (express) => {
  var router = express.Router();

  router.get('/', (req, res) => {
      res.json({ main: 'hit!' });
    });
    router.get('/go/:shortUrl', (req, res) => {
        const request = req;
        const response = res;
        request.body.shortUrl = request.params.shortUrl;
        url.findMidjURL(request.body, (err) => {
          response.status(500).json(err);
        }, (data) => {
          // response redirects to alpha url
          response.redirect(data.alpha_url);
        });
      });

  //get the url
  router.post('/api/v1/url/', function ( req, res ) {
    res.json('Here is the shortened url: ' + 'http://www.' + shortUrl.shortUrl() + '.com');
  });

return router;

};
