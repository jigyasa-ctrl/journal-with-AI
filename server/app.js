const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000;
app.use(cors())
app.use(express.json())

app.post("/journal", async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    res.send({
        "message": "You are doing great yayyy!"
    })
})


app.listen(port, () =>{
    console.log(`Listening at ${port}`)
})