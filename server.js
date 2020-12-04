const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: `${__dirname}/uploads`,
  filename: (req, file, callback) => {
    const filename = `${Date.now()}${path.extname(file.originalname)}`
    callback(null, filename)
  },
})

const uploadImage = multer({ storage }).single('photo')

app.use(cors())
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.post('/image', uploadImage, (req, res) => {
  console.log(req.file)
  if (req.file) return res.json({ msg: 'image successfully uploaded' })
  res.send('Image upload failed')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server is listening on http://localhost:3000')
})
