const path = require('path');
const d3 = require('d3');
const fs = require('fs');

fs.readFile(path.resolve(__dirname, 'titanic.csv'), 'UTF-8', (err, content) => {
  const rawData = d3.csvParse(content);
  const data = rawData.map(d => {
    return {
      id: d.PassengerId,
      age: d.Age,
      class: d.Pclass,
      sex: d.Sex,
      survived: d.Survived
    };
  });
});
