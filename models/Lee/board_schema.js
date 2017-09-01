const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
	idx:{
		type : Number,
		default : 1
	},
	title:{
		type : String
	},	
	content:{
		type : String
	},
	writer:{
		type : String
	},
	count:{
		type : Number,
		default : 0
	},
	date:{
		type : Date,
		default : Date.now()
	}	
});

boardSchema.pre('save', async function(next){

})