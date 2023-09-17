const express = require('express');
    const sqlite3 = require('sqlite3').verbose();
        
    const app = express();
    const port = 3000;

    const db = new sqlite3.Database('data.db');

    app.get('/fetch-gentrification', (res) => {
        const query = 'SELECT State, City FROM table1 WHERE predicted_gentrified = 1';
        db.all(query, (err, rows) => {
            if (err) {
                res.status(500).json({error: err.message});
                return;
            }
            res.json(rows);
        });
    
    });
    app.listen(port, () => {
        console.log('Server is running on port ${port}');
    })