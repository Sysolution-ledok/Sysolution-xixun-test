var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');


function jsRoot(jsPath, req, res){
 // console.log(jsPath);
  
  console.log(req.url);
  var pathObj = url.parse(req.url, true);
  //console.log(pathObj);
  
  
  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }
  

  

  var filePath = path.join(jsPath, pathObj.pathname);
   var fileContent = fs.readFileSync(filePath,'binary')
   res.write(fileContent, 'binary')
   res.end()
  
  
 /* fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404');
      res.writeHead(404, 'not found');
      res.end('<h1>404 Not Found</h1>');
    }else{
      console.log('ok');
      res.writeHead(200, 'OK');
      res.write(fileContent, 'binary');
      res.end()  ;    
    }
  });*/
  

}

//console.log(path.join(__dirname, 'js'));

var server = http.createServer(function(req, res){
  jsRoot(path.join(__dirname, 'js'), req, res);
});

server.listen(8081);
//console.log('visit http://localhost:8081' );
