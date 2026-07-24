import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((fields) => {
        const lines = ['This is the list of our students'];
        const sortedFields = Object.keys(fields).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );
        sortedFields.forEach((field) => {
          lines.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });
        response.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((fields) => {
        response.status(200).send(`List: ${fields[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
