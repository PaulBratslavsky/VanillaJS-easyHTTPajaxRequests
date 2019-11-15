console.log('easyHTTP Library');

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

/**********************************************
    GET REQUEST
 *********************************************/
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

/**********************************************
    POST REQUEST: ADD SINGLE POST
 *********************************************/
easyHTTP.prototype.post = function(url, data, callback) {
    console.log(data);

    // Initialize
    this.http.open('POST', url, true);

    // Set this to self variable to pass the context
    const self = this.http;

    // Set content type: we are working with JSON so thats what we have to set to
    this.http.setRequestHeader('Content-type', 'application/json');
    
    this.http.onload = function() {
        // Check Status For Success
        if ( self.status === 201 ) {
            callback(null, self.status);
        } else {
            console.log('It Failed.')
            const error = `Error: ${self.status}`;
            callback(error, null);
        }
        
    };

    // Pass object to send must parse to string first
    this.http.send(JSON.stringify(data));
}

/**********************************************
    PUT REQUEST
 *********************************************/
easyHTTP.prototype.put = function(url, data, callback) {
    console.log(data);

    // Initialize
    this.http.open('PUT', url, true);

    // Set this to self variable to pass the context
    const self = this.http;

    // Set content type: we are working with JSON so thats what we have to set to
    this.http.setRequestHeader('Content-type', 'application/json');
    
    this.http.onload = function() {
        // Check Status For Success
        if ( self.status === 200 ) {
            callback(null, self.status);
            console.log(this.responseText, "DATA ADDED");
        } else {
            console.log('It Failed.')
            const error = `Error: ${self.status}`;
            callback(error, null);
        }
        
    };

    // Pass object to send must parse to string first
    this.http.send(JSON.stringify(data));
}

/**********************************************
    DELETE REQUEST
 *********************************************/
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

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
