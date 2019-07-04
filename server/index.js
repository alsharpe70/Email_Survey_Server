const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Keys = require('./config/keys.js');
const app = express();

// console.developers.google.com

passport.use(new GoogleStrategy({
  clientID: Keys.googleClientID,
  clientSecret: Keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
   console.log(accessToken);
})
);

app.get (
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//localhost:5000
