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
    console.log('Scrud server started on: ' + port);
});