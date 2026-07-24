const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = lines.slice(1);
      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      resolve(fields);
    });
  });
}

export default readDatabase;
