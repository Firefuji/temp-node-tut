//HTTP module [Web server setup]

const http = require('http');
const server = http.createServer(
    (req, res) => {
        //req is the incoming request
        //res is the result we send back
        //Based on req's url property, we can display different things
        if (req.url == '/') {
            res.end('Welcome to our home page')
        } else if (req.url == '/about') {
            res.end('Here is our short history')
        } else {
            //We can return direct html
            res.end(`
                <h1>Oops!</h1>
                <p>We can't seem to find the page you're looking for</p>
                <a href="/"> Back to homepage </a>
            `)
        }

    }
).listen(5000) //listen to port 5000
//To access this server, go to http://localhost:5000/