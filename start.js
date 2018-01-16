var rdp = require('node-rdp');


//Could be usefull later

// var request = require('request');
// var http = require('http');
// var express = require('express');
// var bodyParser = require('body-parser');
// var compression = require('compression');



//import config of all servers
var conf = require('./config');


//start rdp to jMeter box
rdp({
  address : conf.ADDRESS,
  username : conf.USER_NAME,
  password : conf.PASSWORD,
  safeMode: true
}).then(function(deferred) {
  // this function is entered as soon as the connection is initiated
  
  console.log("Switch to RDP for further steps");

  //To force stop
  // setTimeout(function() {
  //   // by forcing the rejection of the deferred, the connection will be terminated 
  //   console.error('Timeout expired, force-killing the connection')
  //   deferred.reject();
  // }, 1000 * 30);
});