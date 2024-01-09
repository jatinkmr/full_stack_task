const express = require('express')
const bodyParser = require('body-parser')

const { engine } = require('express-handlebars')

require('./model')

const PORT = 8023 || process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('public'))

// settiing up the express handlebars engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// public routes for ui
app.use('/', require('./routes/'))

// api routes
app.use('/api', require('./routes/apiRoutes'))

app.use(function (req, res) {
    res.status(404).send({ url: `No such ${req.originalUrl} url exist. Please try with correct one!!` })
})

// error handler
app.use(function (err, req, res, next) {
    return res.status(500).send({
        error: true,
        message: err
    })
})

app.listen(PORT, () => {
    console.log(`server is listening at ${PORT} PORT...`)
})