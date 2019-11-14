console.log('app.js')

const http = new easyHTTP;
const url = 'https://jsonplaceholder.typicode.com/posts';
/*
// GET
http.get(url, function(error, respone) {
    if (error) {
        console.error(error, 'Response');
    } else {
        console.log(respone, 'Response');
    }
});
*/

// POST
http.post('test', (response) => { console.log(response)});
