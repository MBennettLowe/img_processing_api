// Project - building an API that can be used in two different ways

// As a simple placeholder API, the first allows you to place images 
// into your frontend with the size set via URL parameters 
// (and additional stylization if you choose) for rapid prototyping. 
// The second use case is as a library to serve properly scaled versions
// of your images to the front end to reduce page load size. 
// Rather than needing to resize and upload multiple copies of the same 
// image to be used throughout your site, the API you create will handle 
// resizing and serving stored images for you

import express from 'express';
import { promises as fsPromises } from 'fs';
import routes from './routes/index';

const generatePlaceholderImage = require('generate-placeholder-image')

const app = express();
const port = 3000;

const inputFile = './images/full/cock_head_titled.jpg';
const outputFile = './images/thumbnail/cock_head_titled.jpg';

//app.use('/', routes);
// Define a route handler
app.get('/api', (req, res) => {
    res.send("converting thumbnail in process!");
    generatePlaceholderImage()
    .fromFile(inputFile)
    .then ( (data) => {
        let newImg = data.map ( (item: {
            generatePlaceholderImage({
               let width = item.width;
                let height = item.height;
                 output: '/src/images/thumbnail/cock_head_titled.jpg'
            });
            return { width, height};
        });
            
    
        fsPromises.writeFile(outputFile, (newImg));


app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
});