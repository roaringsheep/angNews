var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/pageData', function(req, res) {
	models.Page.find({}, function (err, docs) {
	res.jsonp(docs);
	});
});

router.post('/create', function(req, res) {
	console.log('create got here');
	console.log('req.body', req.body);
	models.Page.create(req.body, function(err, docs) {
		if(err){
			console.error('/create error', err);
		}
		console.log('done! here is doc', docs);
		res.jsonp(docs);
	});
});

router.post('/delete', function(req, res) {
	console.log('delete got here!');
	models.Page.findById(req.body.id).remove(function(err, doc) {
		if(err){
			console.error('mongodb /delete error', err);
		}
		res.jsonp(doc);
	});
});

router.post('/update', function(req,res) {
	console.log('update got here!');
	models.Page.update({_id:req.body._id},{title: req.body.title, link: req.body.link, like: req.body.like, comments: req.body.comments}, function(err,doc) {
		if(err){
			console.log('/update Error:', err);
		}
		res.jsonp(doc);
	});
});

// router.post('/comment', function(req,res){
// 	console.log('comment got here', req.body);
// 	models.Page.create({body: req.body.body, like: req.body.like, pageId: req.body.pageId}, function(err,doc) {
// 		if(err){
// 			console.log('/comment error', err);
// 		}
// 		res.send(201);
// 	});
// });

router.post('/find', function(req,res){
	console.log('find got here', req.body._id);
	models.Page.findById(req.body._id, function(err, doc){
		console.log(doc);
		if(err){
			console.error('/find error', err);
		}
		res.jsonp(doc);
	});
});
module.exports = router;
