const express = require('express');
const app = express();
const port = 5000;

// adding the route:
app.get('/api/members', (req, res) => {
    const members = [
        { id: 1, username: "Ati" },
        { id: 2, username: "Babi" },
        { id: 3, username: "Nani" }
    ];

    res.json(members);
});

app.listen(port, () => console.log(`Server started at port ${port}`));
