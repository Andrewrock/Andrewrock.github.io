module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          keepalive: true
        }
      }
    },
    csscomb: {
      dist: {
        files: {
          'css/main.css': ['css/main.css']
        }
      }
    },
    purifycss: {
      options: {},
      target: {
        src: ['index.html'],
        css: ['css/flexboxgrid.css'],
        dest: 'dist/flexboxgrid.css'
      }
    },
    concat: {
      css: {
        src: ['dist/flexboxgrid.css', 'css/core.css', 'css/main.css'],
        dest: 'dist/production.css'
      },
      options: {
        stripBanners: true
      }
    },
    cssmin: {
      dist: {
        files: [
          {
            src: 'dist/production.css',
            dest: 'dist/production.css'
          }
        ]
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/production.min.js': ['js/instafeed.js', 'js/main.js']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'dist/index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');



  grunt.registerTask('build', [
    'csscomb',
    'purifycss',
    'concat',
    'cssmin',
    'uglify',
    'htmlmin'
  ]);


  grunt.registerTask('server',[
    'connect'
  ]);

};