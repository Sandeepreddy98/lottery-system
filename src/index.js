const express = require('express')
const app = express();
const PORT = 3000;

const ticketRouter = require('../routes/ticketRoutes');
const statusRouter = require('../routes/statusRoute');
// Middleware to parse JSON bodies
app.use(express.json());

app.use('/ticket',ticketRouter)
app.use('/status',statusRouter)
app.use('/',(req,res) => {
    res.send(`<h1>Wrong Request</h1>`)
})

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
})