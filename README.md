# gulp-create-custom-dir
## Gulp extension to create recursive directories and you can specify the group and user (1000:1000).

![alt text](https://travis-ci.org/chadsfatherlali/gulp-create-custom-dir.svg?branch=master "Travis CI")

**Create directories as a 'root' user:**

```javascript
var gulp = require('gulp'),
    createRecursiveDir = require('gulp-create-custom-dir');
    
gulp.task('default', function () {
  return createRecursiveDir('/some/example/directory'); 
});
```

**Or**

**Specify the group and user:**

```javascript
var gulp = require('gulp'),
    createRecursiveDir = require('gulp-create-custom-dir');
    
gulp.task('default', function () {
  return createRecursiveDir('/some/example/directory', 1000, 1000); 
});
```

**Also**

**Receive on 'chunk.__folderPath' parameter the created folder name**

```javascript
var gulp = require('gulp'),
    createRecursiveDir = require('gulp-create-custom-dir'),
    through = require('through2');
    
gulp.task('default', function () {
  return gulp.des('/some/example')
         .pipe(createRecursiveDir('/some/example/directory', 1000, 1000))
         .pipe(through.obj(function (chunk, enc, cb) {
            console.log(chunk.__folderPath);
            
            cb(null, chunk);
         }));
});
```
