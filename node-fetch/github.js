const fetch = require('node-fetch');

// Esto devuelve una promesa:
let promesa = fetch('https://api.github.com/users/uskokrum');

promesa.then((res) => {
    // console.log(res);
    return res.json();
}).then((json) => {
    console.log(json);
});