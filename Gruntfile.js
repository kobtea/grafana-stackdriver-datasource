module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-eslint')

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/**'],
    copy: {
      main: {
        cwd: 'src',
        expand: true,
        src: ['**', '!**/*.js'],
        dest: 'dist'
      }
    },
    babel: {
      options: {
        presets: ['es2015']
      },
      dist: {
        files: [{
          cwd: 'src',
          expand: true,
          src: ['**/*.js'],
          dest: 'dist',
          ext: '.js'
        }]
      }
    },
    eslint: {
      target: ['**/*.js', '!dist/**', '!node_modules/**']
    },
    watch: {
      scripts: {
        files: ['src/**/*'],
        tasks: ['default']
      }
    }
  })

  grunt.registerTask('default', ['eslint', 'clean', 'babel', 'copy'])
}
