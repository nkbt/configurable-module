'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		buster: {
			test: {
				config: 'test/buster.js'
			}
		},
		jshint: {
			options: {
			},
			root: {
				src: '*.js',
				options: {
					jshintrc: '.jshintrc'
				}
			},
			lib: {
				src: ['lib/*.js', 'lib/**/*.js'],
				options: {
					jshintrc: '.jshintrc'
				}
			},
			test: {
				src: ['test/*.js', 'test/**/*.js'],
				options: {
					jshintrc: '.jshintrc'
				}
			}
		},
		watch: {
			root: {
				files: '<%= jshint.root.src %>',
				tasks: ['jshint:root']
			},
			lib: {
				files: '<%= jshint.app.src %>',
				tasks: ['jshint:lib']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'buster']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-buster');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint', 'buster']);

};
