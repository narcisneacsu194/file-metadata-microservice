const express = require('express');
const multer = require('multer');
const path = require('path');
const helmet = require('helmet');

const port = process.env.PORT || 3000;
const app = express();
const upload = multer();

app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({ maxAge: 7776000, force: true }));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-cdn.com'],
  },
}));

app.get('/', (req, res) => {
  res.redirect('/fileForm.html');
});

app.post('/api/fileanalyse', upload.single('newfile'), (req, res) => {
  res.send({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

app.listen(port, () => {
  console.log(`Server started using port ${port}.`);
});

module.exports = { app };
