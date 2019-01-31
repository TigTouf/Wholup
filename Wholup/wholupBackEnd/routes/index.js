const router = require('express').Router();
const mongoose = require('mongoose');

/* ----- Votre DB ------ */
const dbUrl = "mongodb://username:password@ds063725.mlab.com:63725/wholup";
/* --------------------- */

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};
mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('server is running');
  }
});

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String
});
const UserModel = mongoose.model('users', userSchema);


router.get('/signin', (req, res, next) => {
  console.log('signin');
  UserModel.findOne({
    email: req.query.email,
    password: req.query.password
  }, (error, user) => {
    if (!user) {
      res.json({result: false, isUserExist: false});
    } else {
      res.json({result: true, isUserExist: true});
    }
  });
});

router.post('/signup', function(req, res) {
  if (req.body.first_name !== '' && req.body.last_name !== '' && req.body.email !== '' && req.body.password !== '') {
    console.log('signup');
    var newUser = new UserModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    newUser.save(function(error, user) {
      res.json({result: true, user});
    });
  } else {
    console.error('erreur !!!');
    res.json({result: false, error: 'Incorrect data'});
  }
});

module.exports = router;
