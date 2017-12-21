const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

var s3 = new AWS.S3();

var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});



 var params = {
  SourceImage: {
   S3Object: {
    Bucket: "rekognition-ferry", 
    Name: "joost.jpg"
   }
  }, 
  TargetImage: {
   S3Object: {
    Bucket: "rekognition-ferry", 
    Name: "mark.jpg"
   }
  }
 };

console.log('Starting API request')

 rekognition.compareFaces(params, function(err, data) {
   if (err) console.log(err); // an error occurred
   else     console.log(JSON.stringify(data, undefined, 2));           // successful response
   
 });

 console.log('API request completed')


// var params = {
//   Image: {
//    S3Object: {
//     Bucket: "rekognition-ferry", 
//     Name: "ladyboy2.jpg"
//    }
//   },
//   Attributes: ['ALL'],
//  };

//  rekognition.detectFaces(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log(data.FaceDetails[0].Confidence);
// });

// rekognition.detectLabels(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log(data.Labels);
// });

