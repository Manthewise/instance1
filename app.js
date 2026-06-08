const http = require('http');

const server = http.createServer((req, res) => {
	  res.write("manthewise first app 2nd ec2, docker now included love this");
	  res.end();
});

server.listen(3000, () => {
	  console.log("Server running on port 3000");
});
