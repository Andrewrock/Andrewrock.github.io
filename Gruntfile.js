module.exports = function(grunt) {

  grunt.initConfig({
    sasslint: {
      options: {
        configFile: '/.sass-lint.yml'
      },
      target: ['_sass/**/*.scss']
    }
  });

  grunt.loadNpmTasks('grunt-sass-lint');

  grunt.registerTask('build', [
    'sasslint'
  ]);

};
