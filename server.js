const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/greeting/:name', (req, res) => {
    res.send("What's up, " + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send("Your tip should be: $" + (req.params.total * (req.params.tipPercentage / 100)))
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})