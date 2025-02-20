const sqlite3 = require('sqlite3').verbose();

// Création/connexion à la base de données
const db = new sqlite3.Database('./events.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to SQLite database.');
});

// Mise à jour du schéma de la table pour inclure la photo de profil
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS user_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        event_name TEXT,
        profile_picture TEXT
    )`);
});

module.exports = db;

