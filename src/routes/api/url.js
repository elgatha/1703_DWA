// requires
const url = require('../../models/url');
const shortenUrl = require('../../modules/url');

module.exports = (express) => {
  // router
  const router = express.Router();

  // creates
  router.post('/url', (req, res) => {
    req.body.short_url = shortenUrl.shortenUrl();
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // GETs All
  router.get('/url', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // GETs by ID
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // updates
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // deletes
  router.delete('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // returns
  return router;
};
