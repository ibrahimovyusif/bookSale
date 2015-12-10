'use strict';

var chai = require('chai');
var assert = chai.assert;

var Book = require('../book');

describe('Select nothing', function () {

	var chosenBook = Object.create(Book);
	before(function(){
		chosenBook.init(0);
	});

	it('should have 0 book selected', function(){
		var expected = 0;
		var actual = chosenBook.selectedBookCount;
		assert.equal(actual, expected);
	});

	it('should cost 0 EUR', function(){
		var expected = 0;
		var actual = chosenBook.purchase();
		assert.equal(actual, expected);
	});
});

describe('select and buy 1 book', function () {

	var chosenBook = Object.create(Book);
	before(function(){
		chosenBook.init(1);
	});

	it('should have 1 book selected', function(){
		var expected = 1;
		var actual = chosenBook.selectedBookCount;
		assert.equal(actual, expected);
	});

	it('should cost 8 EUR', function(){
		var expected = 8;
		var actual = chosenBook.purchase();
		assert.equal(actual, expected);
	});
});

describe('select and buy 3 different books', function () {

	var chosenBook = Object.create(Book);
	before(function(){
		chosenBook.init(3);
	});

	it('should have 1 book selected', function(){
		var expected = 3;
		var actual = chosenBook.selectedBookCount;
		assert.equal(actual, expected);
	});

	it('should cost 8 EUR', function(){
		var expected = 24;
		var actual = chosenBook.purchase();
		assert.equal(actual, expected);
	});
});