const express = require('express');
const multer = require('multer');
const port = process.env.PORT || 3000;
const app = express();
const upload = multer();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect('/fileForm.html');
});

app.post('/api/fileanalyse', upload.single('newfile'), (req, res) => {
  res.send({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(port, () => {
  console.log(`Server started using port ${port}.`);
});

module.exports = { app };