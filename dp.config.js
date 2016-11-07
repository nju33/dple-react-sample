module.exports = {
  demo: {
    html: 'app/index.html',
    css: [
      'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css',
      'app/styles/index.css',
    ],
    js: [
      'app/scripts/index.js'
    ]
  },

  src: {
    html: {
      base: 'markups/',
      pattern: 'markups/**/*.html'
    },
    css: {
      pattern: 'styles/**/*.css'
    },
    js: {
      defaultPattern: /index\.js/,
      entry: 'scripts/index.jsx',
      pattern: 'scripts/**/*.+(js|jsx)'
    }
  }
}
