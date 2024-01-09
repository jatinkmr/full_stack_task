const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8023 || process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(PORT, () => {
    console.log(`server is listening at ${PORT} PORT...`)
})