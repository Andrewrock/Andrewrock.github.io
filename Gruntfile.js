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
    uglify: {
      build: {
        src: ['js/*.js'],
        dest: 'dist/main.min.js'
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
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['**/*.scss'],
          dest: 'dist',
          ext: '.css'
        }]
      }
    },
    scsslint: {
      allFiles: [
        'sass/**/*.scss',
      ],
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: 'sass/.scss-lint-test.yml',
        reporterOutput: null
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['last 3 versions']}),
        ]
      },
      dist: {
        src: 'dist/main.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },
    svgmin: {
      withconfig: {
        options: {
          plugins: [
            {removeViewBox: false},
            {convertPathData: {straightCurves: false}}
          ]
        }
      },
      multiple: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.svg'],
          dest: 'img/'
        }]
      }
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'cssmin']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-svgmin');

  grunt.registerTask('build', [
    'scsslint',
    'sass',
    'postcss',
    'cssmin',
    'uglify',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'connect',
    'scsslint',
    'sass',
    'postcss',
    'cssmin',
    'uglify',
    'htmlmin'
  ]);

};