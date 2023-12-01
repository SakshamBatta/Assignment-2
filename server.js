const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const { str } = req.body;

    // Using regex to count words
    const wordCount = str.trim().split(/\s+/).length;

    // Check if there are at least 8 words
    if (wordCount >= 8) {
        res.status(200).send('200 OK');
    } else {
        res.status(406).send('Not Acceptable');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
