const express = require('express');

const setupRoutes = (app, db) => {
    app.get('/pcs', (req, res) => {
        db.all('SELECT * FROM products', [], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        });
    });

    app.get('/api/message', (_req, res) => {
        res.json({ message: 'https://images.ctfassets.net/uaddx06iwzdz/1sfLB4IrdwYgUAZBoT3phQ/5cde5764f2813e686f5fc54980099161/bmw-x4-l-02.jpg' });
    });

    const items = [
        { id: 1, name: 'PC GAMER RTX 3060 TI' },
        { id: 2, name: 'PC GAMER RTX 4060 TI' },
        { id: 3, name: 'PC GAMER RTX 4070 TI' },
        { id: 4, name: 'PC GAMER RTX 7900 XT' },
        { id: 5, name: 'PC GAMER RTX 4090 TI' },
        { id: 6, name: 'PC GAMER RX 4070 TI' },
    ];

    app.get('/api/items', (_req, res) => {
        res.json(items);
    });

    app.get('/user/:id', (req, res) => {
        const userId = req.params.id;
        db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
            if (err) {
                res.status(500).send(err.message);
            } else if (!row) {
                res.status(404).send('Utilisateur non trouvé');
            } else {
                res.json(row);
            }
        });
    });

    app.get('/cart', (_req, res) => {
        db.all('SELECT * FROM cart', [], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        });
    });

    app.post('/buy-cart', (req, res) => {
        const { name, price } = req.body;
        db.run('INSERT INTO cart (name, price) VALUES (?, ?)', [name, price], (err) => {
            if (err) {
                return console.log(err);
            }
            console.log('Enregistrement ajouté avec succès dans la table "cart".');
            res.json({ message: 'Enregistrement ajouté avec succès dans la table "cart".' });
        });
    });

    app.get('/test', (req, res) => {
        res.json({ message: 'Ceci est un test.' });
    });
};

module.exports = setupRoutes;
