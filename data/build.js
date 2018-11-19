const path = require('path');
const d3 = require('d3');
const fs = require('fs');

fs.readFile(path.resolve(__dirname, 'titanic.csv'), 'UTF-8', (err, content) => {
  const data = d3.csvParse(content);
  console.log('const data = [');
  data.forEach(i => {
    console.log(i);
    console.log(',');
  });
  console.log('];');
});
