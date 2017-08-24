'use strict';

const express  = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port'))
})
