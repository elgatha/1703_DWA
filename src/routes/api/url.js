// requires
const url = require('../../models/url');
const shortenUrl = require('../../modules/url');
const debug = require("../../modules/debug");


module.exports = (express) => {
  // router
  const router = express.Router();

  // creates
  router.post('/url', (req, res) => {
    req.body.short_url = shortenUrl.shortenUrl();
    url.create(req.body, (err) => {
      res.status(500).json(err);
      debug.debug('Debugging is activated!' + err, 'Error!' );
    }, (data) => {
      res.status(200).json(data);
      debug.debug('The shortened URL has been successfully created.' , 'Success');
    });
  });

  // GETs All
  router.get('/url', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
      debug.debug('The URLs were not successful because of this error: ' + err, 'Error! ');
    }, (data) => {
      res.status(200).json(data);
      debug.debug('The URLs have been read successfully', 'Success');
    });
  });

  // GETs by ID
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
      debug.debug('The URL was not read because of this error: ' + err, 'Error! ');
    }, (data) => {
      res.status(200).json(data);
      debug.debug('The URLs ID have been read successfully', 'Success');
    });
  });

  // updates
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
      debug.debug('The URL was not updated because of this error: ' + err, 'Error! ');
    }, (data) => {
      res.status(200).json(data);
      debug.debug('The URLs have been successfully updated', 'Success');
    });
  });

  // deletes
  router.delete('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
      debug.debug('The URL was not successfully deleted because of this error: ' + err, 'Error! ');
    }, (data) => {
      res.status(200).json(data);
      debug.debug('The URL has been successfully deleted', 'Success');
    });
  });

  // returns
  return router;
};
