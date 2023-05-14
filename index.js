const express = require('express');
var router = require('./routes/routes.js');
const app = express()
const PORT = 3000;

// connect routes to application
app.use('/', router);
// 404 error(other routes)
app.use((req, res) => {
    res.send('Sorry cant find that route!');
});
// start listening requests
app.listen(PORT, () => {
    console.log(`Server listens on http://localhost:${PORT}`)
})