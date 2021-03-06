module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                globals: {
                    Toolkit: true,
                    Jquery: true
                },
                browser: true,
                mootools: true,
                jquery: true,
                // enforcing
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                noempty: true,
                quotmark: 'single',
                undef: true,
                unused: 'vars',
                strict: true,
                trailing: true,
                // relaxing
                boss: true,
                scripturl: true
            },
            files: ['web/jss/**/*.js']
        },

        uglify: {
            options: {
                report: 'min'
            },
            build: {
                files: {
                    'web/js/script.min.js': ['web/jss/common.js']
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['jshint', 'uglify']);
};