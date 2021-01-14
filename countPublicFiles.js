var fs = require('fs');

let array = fs.readdirSync('./public/images');

let file = JSON.parse(fs.readFileSync('./src/components/imageCount.json'));

file.images = array;

fs.writeFileSync('./src/components/imageCount.json', JSON.stringify(file));
