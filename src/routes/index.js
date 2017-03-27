// This is a require
const shortUrl = require('../modules/url');
const debug = require('../modules/debug');


module.exports = (express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
      res.json({ main: 'hit!' });
      debug.debug('The main route has successfully responded.', 'Success');
    });
  router.get('/status', (req, res) => {
    res.json({ Healthy: true });
    debug.debug('The status route has successfully responded.', 'Success');
  });
  router.get('/go/:shortUrl', (req, res) => {
      const request = req;
      const response = res;
      request.body.shortUrl = request.params.shortUrl;
      url.findMidjURL(request.body, (err) => {
        response.status(500).json(err);
        debug.debug('Was not able to redirect because of this error ' + err, 'Error! ');
      }, (data) => {
        // response redirects to alpha url
        response.redirect(data.alpha_url);
        debug.debug('The redirect was completely successful', 'Success');
      });
    });

  //get the url
  router.post('/api/v1/url/', function ( req, res ) {
  });

// router
return router;

};
