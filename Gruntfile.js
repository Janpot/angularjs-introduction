module.exports = function (grunt) {
    
    var port = 3000;
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        connect: {
            options: {
                port: port,
                keepalive: true
            },
            demo1: {
                options: {
                    base: 'demo-1'
                }
            },
            demo2: {
                options: {
                    base: 'demo-2'
                }
            },
            demo3: {
                options: {
                    base: 'demo-3'
                }
            },
            demo4: {
                options: {
                    base: 'demo-4'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    
};