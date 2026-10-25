// ai had to be used for this file as i have never used express before

const express = require('express');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const app = express();
const port = process.env.PORT || 3000;
const database = new DatabaseSync(path.join(__dirname, 'database.db'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/api/locations', (request, response) => {
  const locations = database
    .prepare('SELECT locationID, type, title, lat, long, description, maintenanceFlag, maintenanceDescription FROM locations').all()
  response.json(locations);
});

app.post('/api/locations', (request, response) => {
  const {
    type, title, lat, long, description, maintenanceFlag, maintenanceDescription
  } = request.body;

const result = database.prepare(`
INSERT INTO locations
  (type, title, lat, long, description, maintenanceFlag, maintenanceDescription)
VALUES (?, ?, ?, ?, ?, ?, ?)
`).run(type, title, lat, long, description, maintenanceFlag, maintenanceDescription);

  response.status(201).json({locationID: Number(result.lastInsertRowid)});
});

app.put('/api/locations/:id', (request, response) => {
  const {
    type, title, lat, long: longitude,
    description, maintenanceFlag, maintenanceDescription
  } = request.body;

  const result = database.prepare(`
    UPDATE locations
    SET type = ?, title = ?, lat = ?, long = ?, description = ?,
        maintenanceFlag = ?, maintenanceDescription = ?
    WHERE locationID = ?
  `).run(
    type, title, lat, longitude, description,
    maintenanceFlag, maintenanceDescription,
    Number(request.params.id)
  );

  if (result.changes === 0) {
    return response.status(404).json({ error: 'Location not found' });
  }

  response.json({ updated: true });
});

app.delete('/api/locations/:id', (request, response) => {
  const result = database
    .prepare('DELETE FROM locations WHERE locationID = ?')
    .run(Number(request.params.id));

  if (result.changes === 0) {
    return response.status(404).json({ error: 'Location not found' });
  }

  response.json({ deleted: true });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

