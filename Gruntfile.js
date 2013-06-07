module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: {
        src: [
          'src/*.js'
        ]
      },
      options: {
        "smarttabs": true, 
        "debug": true,
        "devel": true,
        "undef": false,
        "laxcomma": true, 
        "laxbreak": false,
        "jquery": true,
        "loopfunc": true,
        "sub": true
      }
    },

    stylus: {
      compile: {
        files: {
          'examples/css/styles.css': 'examples/src/styl/styles.styl',
        }
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      min: {
        files: {
          'build/revive.min.js': ['revive.js']
        }
      }
    },

    concat: {
      dist: {
        dest: 'revive.js',
        src: [
          'src/tabs.js'
        ]
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js', 'examples/**/*.styl'],
        tasks: ['stylus', 'jshint', 'uglify', 'concat'],
        options: {
          nospawn: true
        }
      }
    }
  });

//  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus', 'jshint', 'concat', 'uglify', 'watch']);
};