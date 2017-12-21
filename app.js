const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

var s3 = new AWS.S3();

var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});

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

 var params = {
  SourceImage: {
   S3Object: {
    Bucket: "rekognition-ferry", 
    Name: "ferry2.jpg"
   }
  }, 
  TargetImage: {
   S3Object: {
    Bucket: "rekognition-ferry", 
    Name: "ferry3.jpg"
   }
  }
 };
 rekognition.compareFaces(params, function(err, data) {
   if (err) console.log(err); // an error occurred
   else     console.log(data.FaceMatches[0].Similarity);           // successful response
   
 });
