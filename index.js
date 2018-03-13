var database = require('./config/database'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    http = require('http').Server(app);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(cors());

var api = {};
api.authenticate = require('./modules/authenticate/route');
api.usuarios = require('./modules/usuarios/route');
api.pessoas = require('./modules/pessoas/route');

app.use('/', api.authenticate);
app.use('/usuarios', api.usuarios);
app.use('/pessoas', api.pessoas);

app.get('/ping', (req, res) => {
    res.send('Service connected...')
})

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
