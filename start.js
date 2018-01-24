var rdp = require('node-rdp');


//Could be usefull later

// var request = require('request');
// var http = require('http');
// var express = require('express');
// var bodyParser = require('body-parser');
// var compression = require('compression');



//import config of all servers
var conf = require('./config');


//start rdp to 106 box
rdp({
  address : conf.JmeterBox.ADDRESS,
  username : conf.JmeterBox.USER_NAME,
  password : conf.JmeterBox.PASSWORD,
  safeMode: true
  //launchWorkingDirectory: 'C:\app',
  //launch: 'C:\app\putty.exe'
}).then(function(deferred) {
  // this function is entered as soon as the connection is initiated
  console.log("RDP on 106 .. Switch to RDP for further steps");
  

  //To force stop
  // setTimeout(function() {
  //   // by forcing the rejection of the deferred, the connection will be terminated 
  //   console.error('Timeout expired, force-killing the connection')
  //   deferred.reject();
  // }, 1000 * 30);
});

//start rdp to 103 box
rdp({
  address : conf.Lab.ADDRESS,
  username : conf.Lab.USER_NAME,
  password : conf.Lab.PASSWORD,
  safeMode: true
  //launchWorkingDirectory: 'C:\app',
  //launch: 'C:\app\putty.exe'
}).then(function(deferred) {
  // this function is entered as soon as the connection is initiated
  console.log("RDP on 103 .. Switch to RDP for further steps");
  

  //To force stop
  // setTimeout(function() {
  //   // by forcing the rejection of the deferred, the connection will be terminated 
  //   console.error('Timeout expired, force-killing the connection')
  //   deferred.reject();
  // }, 1000 * 30);
});

