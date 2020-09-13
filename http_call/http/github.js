const https = require('https');

let username = 'uskokrum';

let CHROME_USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
let FIREFOX_USER_AGENT = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0";
let IE_USER_AGENT = "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)";

let opciones = {
    host: 'api.github.com',
    path: '/users/' + username,
    method: 'GET',
    headers: {
        'user-agent': IE_USER_AGENT
    }
};

let peticion = https.request(opciones, (response) => {
    let body = "";
    response.on('data', (salida) => {
        body += salida;
    });

    response.on('end', (salida) => {
        let json = JSON.parse(body);
        console.log(json);
    });
});

peticion.on('error', (e) => {
    console.log(e);
});

peticion.end();