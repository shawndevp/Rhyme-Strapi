module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '29e2873ed30a77f641f3f422d8835841'),
  },
});
