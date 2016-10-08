var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* 上传*/
router.post('/file/uploading', function(req, res, next){
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: './public/files/'});
  //上传完成后处理
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files,null,2);

    if(err){
      console.log('parse error: ' + err);
    } else {
      console.log('parse files: ' + filesTmp);
      var inputFile = files.upfile[0];
      var uploadedPath = inputFile.path;
      var dstPath = './public/files/' + inputFile.originalFilename;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function(err) {
        if(err){
          console.log('rename error: ' + err);
        } else {
          console.log('rename ok');
          fs.readdir('./public/files/', (err, files) => {
            if (err) throw err;
            console.log('json ok');
            res.json(files);
          });
        }
      });
    }

    // res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    // res.write('received upload:\n\n');
    // res.end(util.inspect({fields: fields, files: filesTmp}));
  });
});

router.get('/getlist', function(req, res, next){
  fs.readdir('./public/files/', (err, files) => {
    if (err) throw err;
    res.json(files);
  });
})

router.get('/getgroupfiles/minutes', function(req, res, next){
  fs.readdir('./public/Groupfiles/Minutes', (err, files) => {
    if (err) throw err;
    res.json(files);
  });
})

router.get('/getgroupfiles/ra', function(req, res, next){
  fs.readdir('./public/Groupfiles/RequirementAnalysis', (err, files) => {
    if (err) throw err;
    res.json(files);
  });
})

router.get('/getgroupfiles/sd', function(req, res, next){
  fs.readdir('./public/Groupfiles/SystemDesign', (err, files) => {
    if (err) throw err;
    res.json(files);
  });
})

router.get('/getgroupfiles/ui', function(req, res, next){
  fs.readdir('./public/Groupfiles/UI', (err, files) => {
    if (err) throw err;
    res.json(files);
  });
})

module.exports = router;
