const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const saltRounds = 10;

const api = require('./routes/api.js');

const Assignment = require('./models/assignment.js');
const SchoolClass = require('./models/schoolClass.js');
const User = require('./models/user.js');

require('dotenv').config();

const port = process.env.PORT || 4000;

console.log(process.env.DBUSER, process.env.DBPASS);

mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ds019826.mlab.com:19826/icicle`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsOptions));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

app.use('/api', api);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
});