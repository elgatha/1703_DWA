// This is a functtion to shorten the URL

function shortUrl() {
    // Here is the AlphaNumeric String
  var alphaNumeric = 'ABCDEEFGHIJKLMNOPQRSTUVWXYZabcdeefghijklmnopqrstuvwxyz1234567890';
  var urlLength = 6;

  let genURL = '';

  for (let i = 0; i < urlLength; i += 1) {
    var rand = Math.round(Math.random() * alphaNumeric.length - 1);
    genURL += alphaNumeric.charAt(rand);
  }


  return genURL;
}

// This exports the function
exports.shortUrl = shortUrl;
