const { DatabaseSync } = require('node:sqlite');
const database = new DatabaseSync('database.db');

database.exec(`
    CREATE TABLE IF NOT EXISTS locations (
        locationID INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        title TEXT,
        lat REAL,
        long REAL,
        description TEXT
        );
    `);

database.exec(`
    INSERT INTO locations (type, title, lat, long, description)
    VALUES('Control Point', 'CP 216', 40.9078139, -73.7879556, 'Merge point between MNR and AMTK services')
    `)

database.close();