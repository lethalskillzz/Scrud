const express = require('express'),
    path = require('path'),

    app = express(),
    port = process.env.PORT || 3000;

//app.use('/static', express.static(path.resolve(__dirname, '../../build')));
app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '../../build'));
});

app.listen(port, () => {
    console.log('Remita-Payment server started on: ' + port);
});

// var path = require('path');
// var express = require('express');

// var app = express();

// app.use(express.static(path.join(__dirname, '../../build')));

// app.get('/*', function(req, res) {
//     res.sendfile("index.html", { root: path.join(__dirname, '../../build') });
// });

// app.listen(3000, function() {
//     console.log("BePretty Frontend App is running at localhost: 80")
// });