const express = require('express'); // importing a CommonJS module
const helmet = require('helmet')

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

//middleware

// custom middleware
function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl}`)
  next(); // allows the request to continue to the next middleware or route handler
}

// write a gatekeeper middleware that reads a password from the headers, and if the pasword is "mellon", let it continue
// if not, send back status code 401 with a message

function gatekeeper(req,res, next){
  if (req.headers.password === "mellon"){
    // ??
  } else {
    res.status(401).json({message: 'you tried'})
  }
}

server.use(helmet());
server.use(express.json()); // built-in middleware (in express)
server.use(logger)


//endpoints

server.use('/api/hubs', hubsRouter); //the router is local middleware

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

server.get('/echo', (req,res) => {
  res.send(req.headers)
})

server.get('/area51', helmet(), (req,res) => {
  res.send(req.headers)
})

module.exports = server;
