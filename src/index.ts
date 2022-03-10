// Project - building an API that can be used in two different ways

// As a simple placeholder API, the first allows you to place images 
// into your frontend with the size set via URL parameters 
// (and additional stylization if you choose) for rapid prototyping. 
// The second use case is as a library to serve properly scaled versions
// of your images to the front end to reduce page load size. 
// Rather than needing to resize and upload multiple copies of the same 
// image to be used throughout your site, the API you create will handle 
// resizing and serving stored images for you

// How can we initalize a project with Node.js?
// What dependencies should be included to improve development?
// How do you write asynchronous functions in TypeScript?
// How do you access a file in the file system?
// What tool do you use for endpoint testing?

import express from 'express';
import { promises as fsPromises } from 'fs';
import routes from './routes/index';

const app = express();
const port = 3000;

// const inputFile = './assets/cock_head_titled.jpg';
// const outputFile = './assets/thumbnail/cock_head_titled.jpg';

//app.use('/', routes);
// Define a route handler
app.get('/api', (req, res) => {
    res.send("converting thumbnail in process!");
    fsPromises.readFile('.src/assets/cock_head_titled.jpg') // Use fsPromises.readFile() method to read the file 
    
    .then(function(result) {
        res.writeHead(200, {'Content-Type':'image/jpg'})
            console.log(""+result);
        })
        .catch(function(error) {
            console.log(error);
        })
        
    })
   

app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
});