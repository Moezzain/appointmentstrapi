module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a9c69dfc4ece8fd088070c90dced608'),
  },
});
