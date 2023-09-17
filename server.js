const express = require('express');
    const sqlite3 = require('sqlite3').verbose();
        
    const app = express();
    const port = 3000;

    const db = new sqlite3.Database('data.db');
    app.get('/fetch-data', (req, res) => {
        const query = 'SELECT '
    
    })