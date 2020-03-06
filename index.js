const express = require('express');
const app = express();

// listen
app.listen(3005, () => {
    console.log('Server listening on port 3005.');
})