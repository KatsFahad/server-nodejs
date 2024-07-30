const http  = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./views/index.html', (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data);
        res.end()
        }
    })


})

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for request on port 3000')
})




























// const http = require('http')


// const server = http.createServer((req, res)=>{
//     console.log(req.url, req.method)

    
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<head><link rel="stylesheet" href="#"></head>')
//     res.write('<p>JavaScript dev</p>')
//     res.write('<h3>JavaScript dev <br> how is the server</h3>')
//     res.end()
// })

// server.listen(3000, 'localhost', ()=>{
//     console.log('listening for requests on port 3000')
// })