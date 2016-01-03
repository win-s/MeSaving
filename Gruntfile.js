module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('compile', ['jshint']);

};