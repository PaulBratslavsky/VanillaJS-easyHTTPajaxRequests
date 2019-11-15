console.log('app.js')

const http = new easyHTTP;
const getPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
const getSinglePostUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const addPostUrl = 'https://jsonplaceholder.typicode.com/posts';
const addPutUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const deletePostUrl = 'https://jsonplaceholder.typicode.com/posts/10';


/**********************************************
    GET ALL POSTS
 *********************************************/
/*
http.get(getPostsUrl, function(error, respone) {
    if (error) {
        console.error(error, 'Error');
    } else {
        console.log(respone, 'Response');
    }
});

*/

/**********************************************
    GET SINGLE POST
 *********************************************/
/*
http.get(getSinglePostUrl, function(error, respone) {
    if (error) {
        console.error(error, 'Error');
    } else {
        console.log(respone, 'Response');
    }
});
*/
/**********************************************
    ADD SINGLE POST
 *********************************************/

// Create data to send
const data = {
    title: 'Custom Post',
    body: 'This is a custome post'
}
/*
http.post(addPostUrl, data, (error, respone) => {
    if (error) {
        console.error(error, 'Response Error!!!');
    } else {
        console.log(respone, 'Response Success');
    }
});
*/
/**********************************************
    PUT REQUEST: UPDATE SINGLE POST
 *********************************************/
/*
http.put(addPutUrl, data, (error, respone) => {
    if (error) {
        console.error(error, 'Response Error!!!');
    } else {
        console.log(respone, 'Response Success');
    }
})
*/

/**********************************************
    DELETE REQUEST: DELETE SINGLE POST
 *********************************************/
http.delete(deletePostUrl, function(error, respone) {
    if (error) {
        console.error(error, 'Error');
    } else {
        console.log(respone, 'Response');
    }
});