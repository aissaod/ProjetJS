const sqlite3 = require('sqlite3').verbose();

const initializeDatabase = () => {
    const db = new sqlite3.Database('./pc_store.sqlite3');

    db.serialize(() => {
        db.run('DROP TABLE IF EXISTS products');

        db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, description TEXT, url_img TEXT, price INTEGER)');

        const stmt = db.prepare('INSERT OR IGNORE INTO products (name, description, url_img, price) VALUES (?, ?, ?, ?)');
        stmt.run('PC GAMER RTX 3060 TI', 'Offre des performances exceptionnelles grâce à sa carte graphique haut de gamme. Avec une configuration optimisée, il garantit une expérience de jeu immersive.', 'https://example.com/pc1.jpg', 1000);
        stmt.run('PC GAMER RTX 4060 TI', 'Profitez d\'une expérience de jeu optimisée. Doté de composants performants, ce PC offre des performances fiables pour répondre aux exigences des jeux modernes.', 'https://example.com/pc2.jpg', 1200);
        stmt.run('PC GAMER RTX 4070 TI', 'Offre une expérience de jeu exceptionnelle. Équipé d\'une carte graphique puissante et d\'une configuration robuste, ce PC vous permet de profiter de jeux gourmands en ressources avec une qualité visuelle remarquable.', 'https://example.com/pc3.jpg', 1500);
        stmt.run('PC GAMER RTX 7900 XT', 'Conçu pour les gamers exigeants.', 'https://example.com/pc4.jpg', 1900);
        stmt.run('PC GAMER RTX 4090 TI', 'Doté de composants de pointe, ce PC offre des performances extrêmes pour les jeux les plus exigeants.', 'https://example.com/pc5.jpg', 2000);
        stmt.run('PC GAMER RX 4070 TI', 'Ce PC est un monstre de puissance. Sa carte graphique performante et sa configuration haut de gamme garantissent des performances exceptionnelles.', 'https://example.com/pc6.jpg', 2500);
        stmt.finalize();

        db.run('DROP TABLE IF EXISTS users');
        db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)');

        const userStmt = db.prepare('INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)');
        userStmt.run('utilisateur1', 'motdepasse1'); // Remplacez ces valeurs par celles de votre choix
        userStmt.run('utilisateur2', 'motdepasse2'); // Remplacez ces valeurs par celles de votre choix
        userStmt.finalize();
    });

    return db;
};

module.exports = initializeDatabase;
