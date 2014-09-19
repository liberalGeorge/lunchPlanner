/**
 * Created by georginaHughes on 18/09/2014.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'scripts/app/**/*.js',
                dest: 'scripts/release/<%= pkg.name %>.min.js'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'html/release/index.html': 'html/source/index.html',
                    'html/release/partials/joinMeal/index.html': 'html/source/partials/joinMeal/index.html',
                    'html/release/partials/joinTeam/index.html': 'html/source/partials/joinTeam/index.html',
                    'html/release/partials/planMeal/index.html': 'html/source/partials/planMeal/index.html',
                    'html/release/partials/registerTeam/index.html': 'html/source/partials/registerTeam/index.html',
                    'html/release/partials/registerUser/index.html': 'html/source/partials/registerUser/index.html',
                    'html/release/partials/registerUser/success.html': 'html/source/partials/registerUser/success.html',
                    'html/release/partials/registerUser/failure.html': 'html/source/partials/registerUser/failure.html'
                }
            }
        }
    });

    // Load the plugins that provide the tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default tasks
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['htmlmin']);

};