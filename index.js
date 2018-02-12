var cp = require('child_process'),
    async = cp.exec,
    through = require('through2'),
    fs = require('fs'),
    DEFAULT_USER = 0;

module.exports = function (folderPath, group, user) {
    return through.obj(function (chunk, enc, cb) {
        if (typeof folderPath === 'undefined') throw 'The directory path must be different of null';
        if (typeof group === 'undefined') group = DEFAULT_USER;
        if (typeof user === 'undefined') user = DEFAULT_USER;
        
        chunk.__folderPath = folderPath;
        
        if (!fs.existsSync(folderPath)) {
            async('mkdir -p ' + folderPath, function (err) {
                if (err) throw err;
                
                fs.chown(folderPath, group, user, function (err) {
                    if (err) throw err;
                    
                    return cb(null, chunk);
                })
            });
        }
        
        else {
            fs.chown(folderPath, group, user, function (err) {
                if (err) throw err;
                
                return cb(null, chunk);
            })
        }
    });
};