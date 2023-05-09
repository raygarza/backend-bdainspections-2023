

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
//     auth: {
//       logo: AuthLogo,
//     },
//    // Replace the favicon
//     // head: {
//     //   favicon: favicon,
//     // },
//     // Add a new locale, other than 'en'
//     locales: ['fr', 'de'],
//     // Replace the Strapi logo in the main navigation
//     menu: {
//       logo: MenuLogo,
//     },
//     // Override or extend the theme
//     theme: {
//       colors: {
//         alternative100: '#f6ecfc',
//         alternative200: '#e0c1f4',
//         alternative500: '#ac73e6',
//         alternative600: '#9736e8',
//         alternative700: '#8312d1',
//         danger700: '#b72b1a'
//       },
//     },
    // Extend the translations
    translations: {
        en: {
          "app.components.LeftMenu.navbrand.title": "BDA Inspections",
          "Auth.form.welcome.subtitle": "BDA Inspections",
          "Auth.form.welcome.title": "Admin Panel",
        },
      
      },
   // Disable video tutorials
    // tutorials: false,
   // Disable notifications about new Strapi releases
    // notifications: { release: false },
  },

  bootstrap() {},
};

