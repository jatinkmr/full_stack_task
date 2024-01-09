const express = require('express')
const bodyParser = require('body-parser')

const { engine } = require('express-handlebars')

const PORT = 8023 || process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// settiing up the express handlebars engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// public routes for ui
app.use('/', require('./routes/'))

app.listen(PORT, () => {
    console.log(`server is listening at ${PORT} PORT...`)
})