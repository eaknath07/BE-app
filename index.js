import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('--- Printing 50 lines ---');
    for (let i = 1; i <= 50; i++) {
        console.log(`Line ${i}: Processing request...`);
    }
    console.log('--- Done printing ---');
    res.send('50 lines printed in console!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
