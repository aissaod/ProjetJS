const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Fonction pour initialiser la base de données
const initializeDatabase = () => {
    const db = new sqlite3.Database('./pc_store.sqlite3');

    db.serialize(() => {
        // ... votre code pour initialiser les tables et insérer des produits ...
    });

    return db;
};

// Initialiser la base de données
const db = initializeDatabase();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Obtenir tous les produits
app.get('/products', (req, res) => {
    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Obtenir un produit par ID
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    db.get('SELECT * FROM products WHERE id = ?', [productId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(row);
    });
});

// Ajouter un produit au panier (à des fins de démonstration)
app.post('/add-to-cart/:productId', (req, res) => {
    const productId = req.params.productId;
    db.get('SELECT * FROM products WHERE id = ?', [productId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        // Ajoutez ici la logique pour ajouter le produit au panier
        res.json({ message: 'Product added to cart', product: row });
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
