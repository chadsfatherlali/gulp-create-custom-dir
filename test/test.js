var assert = require('assert')
	createCustomDir = require('../index');

describe('gulp-create-custom-dir', function () {
	describe('Instace of plugin', function () {
		it('should return [Function] from instace', function () {
			assert.equal(typeof createCustomDir, 'function');
		});
	});
});