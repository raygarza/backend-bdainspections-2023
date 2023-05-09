module.exports = ({ env }) => ({
    // proxy: true,
    // host: "0.0.0.0",
    // port: process.env.PORT,
    url: env('https://bdainspections-2023.herokuapp.com/'),
    // app: { 
    //   keys: env.array('oGHarJXx3Dtw7NJ1FnvqBg==,d69sYotr5Paho1qVjfVrzw==,X5IxyIJavb8mJ2QIkz9rRg==,GYjl8mpWdpqgR7rhxNelgQ==')
    // },
    // admin: {
    //   auth: {
    //     secret: env('ADMIN_JWT_SECRET'),
    //   },
    // },
  })