'use strict';

var Amount = require('./amount');

var Book = {
	init: function(selectedBookCount) {
		this.bookPrice = 8;
		this.selectedBookCount = Object.create(Amount).init(selectedBookCount);

		selectedBooks = [];


		return this;
	},

	selectBook: function(arrayHere) {

	},

	purchase: function() {
		
		this.totalCost = this.selectedBookCount * this.bookPrice;
		return this.totalCost;
	}

};

module.exports = Book;