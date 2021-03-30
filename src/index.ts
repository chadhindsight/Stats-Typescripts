import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    //Determine what type of content we expect the file to have.
    encoding: 'utf-8'
});
console.log(matches)