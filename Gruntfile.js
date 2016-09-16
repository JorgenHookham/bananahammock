module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './'
                }
            }
        },

        clean: {
            compiled: {
                files: [{
                    expand: true,
                    cwd: 'compiled/',
                    src: '**/*',
                }]
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'development/styles/',
                    src: '**/*.scss',
                    dest: 'compiled/styles/',
                    ext: '.css'
                }]
            }
        },

        watch: {
            sass: {
                options: {interrupt: true},
                files: ['development/styles/**/*.scss'],
                tasks: ['sass:dist']
            },
            styles: {
                options: {livereload: true},
                files: ['compiled/styles/**/*.css']
            },
            html: {
                options: {livereload: true},
                files: ['**/*.html']
            }
        }
    });

    grunt.registerTask('default', ['clean', 'sass', 'connect', 'watch']);

}
