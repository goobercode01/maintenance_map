
const express = require('express');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const app = express();
const port = process.env.PORT || 3000;
const database = new DatabaseSync(path.join(__dirname, 'database.db'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/locations', (request, response) => {
    const locations = database
    .prepare('SELECT locationID, type, title, lat, long, description FROM locations').all()
    response.json(locations);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

