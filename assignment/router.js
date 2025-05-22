const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    // res.write('<html>');
    // res.write('<head><title>some greetings</title></head>');
    // res.write('<body><h2>Heey David Again<h2></body');
    // res.write('</html>');
    // return res.end();

    res.write('<html>');
    res.write('<head><title>form</title></head>');
    res.write(
      '<body><form action = "./create-user" method = "POST"><input type="text" name="user"></input><button type ="submit">submit</button></form></body'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>some greetings</title></head>');
    res.write(
      '<body><ul><li>David Maigwa</li> <li>Abel Nyaga</li> <li>Winnie Maigwa</li> <li>Margaret Maigwa</li></ul><h2></body'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunck) => {
      body.push(chunck);
      // console.log(body);
    });

    req.on('end', () => {
      const pasrsedBody = Buffer.concat(body).toString();
      const message = pasrsedBody.split('=')[1];
      // const message = pasrsedBody.split('=')[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
};

exports.handler = requestHandler;
