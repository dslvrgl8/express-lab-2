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

app.get('/magic/:question', (req, res) => {
    const magic= [{answer: "It is certain"}, 
    {answer: "It is decidedly so"}, 
    {answer:"Without a doubt"}, 
    {answer: "Yes definitely"},
    {answer: "You may rely on it"}, 
    {answer: "As I see it yes"}, 
    {answer: "Most likely"}, 
    {answer: "Outlook good"},
    {answer: "Yes"}, 
    {answer: "Signs point to yes"}, 
    {answer: "Reply hazy try again"}, 
    {answer: "Ask again later"},
    {answer: "Better not tell you now"}, 
    {answer: "Cannot predict now"}, 
    {answer: "Concentrate and ask again"},
    {answer: "Don't count on it"}, 
    {answer: "My reply is no"}, 
    {answer: "My sources say no"},
    {answer: "Outlook not so good"}, 
    {answer: "Very doubtful"}]

    let magic8 = Math.floor(Math.random() * magic.length)
    res.send((req.params.question) + `
    <html>
        <body>
            <h1>Magic 8 ball says: ${magic8}</h1>
        </body>
    </html>`
    );
})



app.listen(4000, () => {
    console.log('Listening on port 4000')
})