module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: { 
    keys: env.array('oGHarJXx3Dtw7NJ1FnvqBg==,d69sYotr5Paho1qVjfVrzw==,X5IxyIJavb8mJ2QIkz9rRg==,GYjl8mpWdpqgR7rhxNelgQ==')
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
