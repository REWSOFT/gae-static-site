module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

	grunt.initConfig({
		watch: {
			files: ['content/**/*', 'theme/**/*'],
			tasks: ['build']
		},
		shell: {
		    build: {
		        command: 'pelican content'
		    }
		}
	});

    grunt.registerTask('build', ['shell:build']);

};