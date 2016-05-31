var fs=require('fs');
var content=fs.readFileSync("xml/fahuahuiyi.htm","utf8");
content=content.replace(/&#(\d+);/g,function(m,m1){
	return String.fromCharCode(parseInt(m1));
});
fs.writeFileSync("xml/fahuahuiyi.xml",content,"utf8");