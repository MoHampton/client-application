const proxy = require('http-proxy-middleware');

module.exports = function(app) {

    /*app.use(proxy('/api', { target: 'http://localhost:8080/' }));
    app.use(proxy('/account', { target: 'http://localhost:8081/' }));*/

    app.use(proxy('/api', { target: 'http://10.109.237.113:8080/' }));
    app.use(proxy('/account', { target: 'http://10.104.177.185:8081/' }));

};