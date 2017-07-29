module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            options: {
              browsers: ['last 10 versions']
            },
            dist: {
                files: {
                    './static/css/style.css': './sass/processed/main.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['./sass/processed/main.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};