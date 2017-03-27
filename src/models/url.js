// requires
const db = require('./db');

// creates
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

// finds all
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

//finds alpha url
exports.findMidjURL = (data, error, success) => {
  // finds based on short url
  db.url.find({
    where: {
      short_url: data.shortUrl,
    },
  })
  .then(success)
  .catch(error);
};

// single find
exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// updates
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// deletes
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
