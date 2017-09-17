const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('../model/user');
const config = require('../db/mongoConfig');

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.secret
  };
  //
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('payload received', jwt_payload);
    const jwt_user_id = jwt_payload.data._id
    console.log("auth_jwt_user_id : "+jwt_user_id)
    //Mongoose UserSchema
    User.findById(jwt_user_id, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
