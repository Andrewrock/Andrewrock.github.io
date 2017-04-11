module.exports = function(grunt) {

  grunt.initConfig({
    sasslint: {
      options: {
        configFile: '/.sass-lint.yml'
      },
      target: ['_sass/**/*.scss']
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: {
          'dist/index.html': '_site/index.html',
          'dist/background-blend-modes.html': '_site/background-blend-modes.html',
          'dist/lighten-darken.html': '_site/lighten-darken.html',
          'dist/not-selector.html': '_site/not-selector.html',
          'dist/recreating-instagram.html': '_site/recreating-instagram.html'
        }
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: '_img/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: '_img/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'img/',
            ext: '.jpg'
          }
        ]
      }
    }  });

  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('build', [
    'sasslint',
    'htmlmin',
    'imagemin'

  ]);

};
