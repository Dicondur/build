var rdp = require('node-rdp');
 
rdp({
  address: '123.45.67.89:1337',
  username: 'DOMAIN\username',
  password: 'thepassword',
  safeMode: true
}).then(function(deferred) {
  // this function is entered as soon as the connection is initiated 
  setTimeout(function() {
    // by forcing the rejection of the deferred, the connection will be terminated 
    console.error('Timeout expired, force-killing the connection')
    deferred.reject();
  }, 1000 * 60);
});