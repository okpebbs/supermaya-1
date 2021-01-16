module.exports = {
  name: "okpebbs",
  shortDesc:
    "An 11ty starter kit designed to help you add rich features to a site without a complicated build process.",
  url: "okpebbs.com",
  authorEmail: "mike@madebymike.com.au",
  authorHandle: "@MikeRiethmuller",
  authorName: "Mike",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "pink",
      text: "black",
      highlight: "#666",
    },
    secondary: {
      background: "black",
      text: "white",
      highlight: "#666",
    },
  },

  keystone: {
    comments: false,
    bookmarks: false,
    claps: false,
    login: false,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
