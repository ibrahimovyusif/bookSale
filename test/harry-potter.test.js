'use strict';

var chai = require('chai');
var assert = chai.assert;

var Book = require('../harry-potter');

describe('Select 1 book', function () {

	var book = Object.create(Book);
	book.init([1, 0, 0, 0, 0]);

	it('should have 1 book selected', function(){
		var expected = [1,0,0,0,0];
		var actual = book.selectedBookCount;
		assert.deepEqual(actual, expected);
	});

	it('should cost 8 EUR', function(){
		var expected = 8;
		var actual = book.purchase();
		assert.equal(actual, expected);
	});
});


describe('Select 4 books', function () {

	var book = Object.create(Book);
	book.init([1, 0, 1, 1, 1]);

	it('should have 4 book selected', function(){
		var expected = [1,0,1,1,1];
		var actual = book.selectedBookCount;
		assert.deepEqual(actual, expected);
	});

	it('should cost 32 EUR', function(){
		var expected = 32;
		var actual = book.purchase();
		assert.equal(actual, expected);
	});
});

describe('Select 8 books', function () {

	var book = Object.create(Book);
	book.init([2, 2, 2, 1, 1]);

	it('should have 4 book selected', function(){
		var expected = [2,2,2,1,1];
		var actual = book.selectedBookCount;
		assert.deepEqual(actual, expected);
	});

	it('should cost 64 EUR', function(){
		var expected = 64;
		var actual = book.purchase();
		assert.equal(actual, expected);
	});
});