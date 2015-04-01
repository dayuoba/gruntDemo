var should = require('should');

function aUnitTestFunc(str) {
	if (typeof str === 'string') {
		return true;
	} else {
		return false;
	}
}

describe('UnitTesting', function() {
	it('aUnitTestFunc should return true', function() {
		var str = aUnitTestFunc('testing');
		(str).should.be.ok;
	});
});