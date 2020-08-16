const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.text())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/try', (req, res) => {
  res.render('index', { attackUrl: process.env.URL, id: req.query.id, port: req.query.port, bg: Boolean(req.query.bg) })
})

app.post('/recon', (req, res) => {
  try {
    const {url} = JSON.parse(req.body)
    console.log(url)
  } catch (err) {
    console.log(req.body)
  }
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
