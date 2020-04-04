var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/game.html');
});

app.get('/phaser.js', function(req, res) {
    res.sendFile(__dirname + '/phaser.js');
});
app.get('/assets/nargth.png', function(req, res) {
    res.sendFile(__dirname + '/assets/nargth.png');
});
app.get('/assets/chars.png', function(req, res) {
    res.sendFile(__dirname + '/assets/chars.png');
});
app.get('/assets/nargth.json', function(req, res) {
    res.sendFile(__dirname + '/assets/nargth.json');
});
app.get('/assets/background.png', function(req, res) {
    res.sendFile(__dirname + '/assets/background.png');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
