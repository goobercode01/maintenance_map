const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const database = new DatabaseSync(path.join(__dirname, 'database.db'));

database.exec(`
    CREATE TABLE locations (
        locationID INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        title TEXT,
        lat REAL,
        long REAL,
        description TEXT,
        maintenanceFlag TEXT,
        maintenanceDescription TEXT
        );
    `);

database.exec(`
    INSERT INTO locations (type, title, lat, long, description, maintenanceFlag, maintenanceDescription)
    VALUES('Control Point', 'CP 216', 40.9078139, -73.7879556, 'Merge point between MNR and AMTK services', 'Not Needed', 'No maintenance.')
    `)

database.close();