'use strict';

var Amount = require('./amount');

var Book = {
	init: function(selectedBookCount) {
		this.bookPrice = 8;
		this.selectedBookCount = Object.create(Amount).init(selectedBookCount);


		this.selectedBooks = [];


		return this;
	},

	purchase: function() {
		this.totalCount = Object.create(Amount).init();
		

		while(this.selectedBookCount !== [0,0,0,0,0]){
			
			for(var i = 0; i < 5; i++){

				if(this.selectedBookCount[i] !== 0 && this.selectedBookCount[i] > 0) {

					this.totalCount ++;
					this.selectedBookCount[i] --;
				}
			}
		}
		
		this.totalCost = this.totalCount * this.bookPrice;
		return this.totalCost;
	}

};

module.exports = Book;