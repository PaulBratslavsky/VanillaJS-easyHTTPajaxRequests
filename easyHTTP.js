console.log('easyHTTP Library');

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    // Pass the context of this to new function.
    console.log(this, 'get this');

    const self = this;

    this.http.onload = function() {
        console.log(this, 'onload this');
        console.log(self, 'self');
        // Check Status
        if ( self.http.status === 200 ) {
            callback(null, self.http.responseText);
        } else {
            console.log('It Failed.')
            const error = `Error: ${self.http.status}`;
            callback(error, null);
        }
    };

    this.http.send();
}

// POST REQUEST
easyHTTP.prototype.post = function(url, callback) {
    console.log(url)
    callback('Hello')
}

// PUT REQUEST 

// DELETE REQUEST