const fs = require('fs');

const displayFileContent = function(pathToFile) {
	const handleFile = function(err, contents) {
		if(err) {
			console.log(err.message);
		} else {
			console.log(contents.toString());
		}
	};

	try {
		fs.readFile(pathToFile, handleFile);
	} catch(ex) {
		console.log(ex.message);
	}
};

// displayFileContent('package.json');

require('fs-extra').readFile('package.json')
	.then(content => content.toString())
	.then(content => {throw "error"; })
	.catch((val) => console.log(val))
	.then((val) => { console.log('alive');} );