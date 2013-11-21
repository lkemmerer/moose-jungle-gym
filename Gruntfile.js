module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    handlebars: {
      templates: {
        files: {
          'public/templates/templates.js': 'src/templates/*.handlebars',
        },
      },
      partials: {
        files: {
          'public/templates/partials.js': 'src/templates/partials/*.partial'
        },
        options: {
          namespace: 'Handlebars.partials',
          partial: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-handlebars-compiler');
  grunt.registerTask('compile-hbs', ['handlebars:templates', 'handlebars:partials']);
  grunt.registerTask('heroku:production', 'compile-hbs');
};
