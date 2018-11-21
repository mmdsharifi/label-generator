'use strict';

var fs = require('fs')

fs.readFile('dataset.txt', (err, buf) => {
    var data = buf.toString();
    var label = '';
    var token = data.split(' ');
    label = `sli ${token[1]} ${token[2]}
${token[0]} ${token[2]} ${token[3]}
sli ${token[2]} ${token[3]}
`;
    createFile(label, token);
});

function createFile(label, token) {
    fs.writeFile(`${token[0]}.lab`, label, function (err, data) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}