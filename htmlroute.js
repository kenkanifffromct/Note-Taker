const path = require('path');

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, 'notes.html'));
    });

    app.post('/notes', (req, res) => {
        res.send('This is a post request');
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    })

}