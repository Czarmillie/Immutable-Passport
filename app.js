const express = require('express');
const passport = require('passport');
const ImmutableStrategy = require('passport-immutable').Strategy;

const app = express();

passport.use(new ImmutableStrategy({
    clientID: 'jGJOOjVhwr969e5GGHHys1gqgzLmFKts',
    callbackURL: 'http://localhost:3000/auth/passport/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

app.use(passport.initialize());

// User logout route
app.get('/logout', (req, res) => {
    // Perform the logout actions, such as destroying the user's session.
    req.logout();
    // Redirect to the specified logout URL.
    res.redirect('https://google.com/logout');
 });

 // User logout route
app.get('/logout', (req, res) => {
    // Perform the logout actions, such as destroying the user's session.
    req.logout();
    // Redirect to the specified logout URL.
    res.redirect('https://twitter.com/logout');
 });

 // User logout route
app.get('/logout', (req, res) => {
    // Perform the logout actions, such as destroying the user's session.
    req.logout();
    // Redirect to the specified logout URL.
    res.redirect('https://facebook.com/logout');
 });

 // User logout route
app.get('/logout', (req, res) => {
    // Perform the logout actions, such as destroying the user's session.
    req.logout();
    // Redirect to the specified logout URL.
    res.redirect('https://instagram.com/logout');
 });

app.get('/', (req, res) => {
    res.send('<a href="/auth/passport">Login with Passport</a>');
});

app.get('/auth/passport', passport.authenticate('immutable'));

app.get('/auth/passport/callback',
    passport.authenticate('immutable', { failureRedirect: '/' }),
    (req, res) => {
        // Display user information
        res.json(req.user);
    }
);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
