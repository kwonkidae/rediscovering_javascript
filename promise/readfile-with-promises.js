const fs = require('fs-extra');

const countLinesWithText = function(pathToFile) {
  fs.readFile(pathToFile)
    .then(content => content.toString())
    .then(content => content.split('\n'))
    .then(lines => lines.filter(line => line.includes('THIS LINE')))
    .then(lines => lines.length)
    .then(count => checkLineExists(count))
    .then(count => console.log(`Number of lines with THIS LINE is ${count}`))
    .catch(error => console.log(`ERROR: ${pathToFile}, ${error.message}`));
};

const checkLineExists = function(count) {
  if (count === 0) {
    throw new Error('text does not exist in file');
  }
  return count;
};

countLinesWithText('readfile-with-promises.js');
countLinesWithText('readfile.js');
countLinesWithText('invalid');

class App {
  constructor() {
    this.a = 5;
  }

  data() {
    console.log(this.a);
  }

  render() {
    return this.data;
  }
}

var a = new App();

let b = {
  a: 5,
};

b.data = a.render();
b.data();
