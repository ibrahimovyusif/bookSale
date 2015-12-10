'use strict';

var Amount = {
	init: function(count){
		this.count = count || 0;
		return this.count;
	}
};

module.exports = Amount;