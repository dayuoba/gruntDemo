module.exports = function(grunt) {

	//First load the plugins from npmtask
	//make sure they have been installed by npm install xx --save--dev
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//Configure the tasks for more info view the grunt website plugins
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['*.js', 'routes/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		// Configure a mochaTest task 
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					captureFile: 'results.txt', // Optionally capture the reporter output to a file 
					quiet: false, // Optionally suppress output to standard out (defaults to false) 
					clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
				},
				src: ['test/**/*.js']
			}
		},
		//Configure a mochaTest task 
		uglify: {
			my_target: {
				files: {
					'public/javascripts/forjshint.min.js': ['public/javascripts/forjshint.js']
				}
			}
		}
	});


	//Register the tasks, as default tasks in [] will be running
	grunt.registerTask('default', ['jshint', 'mochaTest', 'uglify']);
};