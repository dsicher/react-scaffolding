var express = require('express');
var figlet = require('figlet');
var path = require('path');
var webpack = require('webpack');
var config = require(path.join(__dirname, '..', 'webpack.config.dev'));
var pkg = require(path.join(__dirname, '..', 'package.json'));

var app = express();
var compiler = webpack(config);
var PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use(require('webpack-hot-middleware')(compiler));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  figlet.fonts(function(err, fonts) {
    if (err) {
      console.log('something went wrong...');
      console.dir(err);
      return;
    }
    var fontIndex = Math.ceil(Math.random() * fonts.length);
    console.log('');
    console.log(figlet.textSync('react', {
      font: fonts[3],
    }));
    console.log(figlet.textSync('workshop', {
      font: fonts[3],
    }));
    console.log(`Listening at http://localhost:${PORT}`);
  });
});
