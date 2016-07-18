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
    concat: {
      css: {
        src: ['css/flexboxgrid.css','css/animate.css','css/main.css'],
        dest: 'dist/production.css'
      },
      js: {
        src: ['js/instafeed.js', 'js/main.js'],
        dest: 'dist/production.js'
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
      options: {
        preserveComments: false
      },
      build: {
        files: {
          src: 'dist/production.js',
          dest: 'dist/production.js'
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

  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');



  grunt.registerTask('build', [
    'csscomb',
    'concat',
    'cssmin',
    'uglify',
    'htmlmin'
  ]);


  grunt.registerTask('server',[
    'connect'
  ]);

};