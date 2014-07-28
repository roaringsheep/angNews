 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/angQuiz');
 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'mongo db connection error: '));

 var Page, Comment;
 var Schema = mongoose.Schema;

 var pageSchema = new Schema ({
 	title: String,
 	link: String,
 	like: Number,
 	comments: [commentSchema]
 });

 var commentSchema = new Schema ({
 	body: String,
 	like: Number
 });

 Page = mongoose.model('Page', pageSchema);

 module.exports = {Page: Page};