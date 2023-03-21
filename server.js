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
    const magic= ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    let magic8 = Math.floor(Math.random() * magic.length)
    res.send((req.params.question) + `
    <html>
        <body>
            <h1>Magic 8 ball says: ${magic[magic8]}</h1>
        </body>
    </html>`
    );
})



app.listen(4000, () => {
    console.log('Listening on port 4000')
})