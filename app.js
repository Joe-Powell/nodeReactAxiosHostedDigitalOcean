const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.get('/names', function (req, res) {
    res.send('Joe')
})

app.listen(PORT, console.log(`Server started on port http://localhost:${PORT}`));