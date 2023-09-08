const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).json({msg: 'Hello World!'})
})

app.get('/identitas', require("./controller/respon").identitas)
app.get('/penilaian/:nilai', require("./controller/respon").penilaian)
app.post('/kirim-Data', require("./controller/respon").kirimData)
app.get('/ambil-suhu', require("./controller/respon").ambilSuhu)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})