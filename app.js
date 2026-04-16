const http = require('http');

let notes = [];

const server = http.createServer((req, res) => {

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Smart Notes App</title>
        <style>
          body {
            font-family: Arial;
            background: #f4f4f4;
            text-align: center;
          }
          .container {
            width: 400px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
          }
          input {
            width: 70%;
            padding: 10px;
          }
          button {
            padding: 10px;
            background: #28a745;
            color: white;
            border: none;
          }
          li {
            margin: 10px;
            list-style: none;
            background: #eee;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🚀 Smart Notes App</h2>
          <form method="POST">
            <input name="note" placeholder="Write something..." required/>
            <button>Add</button>
          </form>
          <ul>
    `);

    notes.forEach(n => {
      res.write(`<li>${n}</li>`);
    });

    res.write(`
          </ul>
        </div>
      </body>
      </html>
    `);

    res.end();
  }

  else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());

    req.on('end', () => {
      const note = decodeURIComponent(body.split('=')[1]);
      notes.push(note);
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});