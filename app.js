const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000;
const generate = require("./chatbot")
app.use(cors())
app.use(express.json())

app.post("/journal", async (req, res) => {
    const {input} = req.body
    const response = await generate(input)
    res.send({
        "message": response
    })
})


app.listen(port, () =>{
    console.log(`Listening at ${port}`)
})