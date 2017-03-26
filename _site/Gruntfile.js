module.exports = function(grunt) {

  grunt.config('scsslint', {
    allFiles: [
      '_sass/app/**/*.scss',
    ],
    options: {
      bundleExec: false,
      colorizeOutput: true,
      config: 'none',
      force: true
    },
  });

  grunt.loadNpmTasks('grunt-scss-lint');

  grunt.registerTask('build', [
    'scsslint'
  ]);

};
