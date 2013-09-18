
/*
 * GET home page.
 */

module.exports = function(app){
	// app.get('/', function(req,res){
	// 		res.redirect('/organization');
	// 	});
	
	app.get('/', function(req,res){
		res.render('index');
	});
	
	app.get('/threats', function(req,res){
		res.render('threats');
	});
	
	app.get('/threats/new', function(req,res){
		res.render('threat_new');
	});
	
	app.get('/threats/error', function(req,res){
		res.render('threat_error');
	});
	
	app.get('/threats/empty', function(req,res){
		res.render('threat_empty');
	});
	
	app.get('/threats/confirm', function(req,res){
		res.render('threat_confirm');
	});
	
	app.get('/threats/saved', function(req,res){
		res.render('threat_saved');
	});
	
	app.get('/threats/details', function(req,res){
		res.render('threat_details');
	});
	
	
	//404
	// Handle 404
	  app.use(function(req, res) {
	      res.status(400);
	     res.render('404.jade', {title: '404: File Not Found'});
	  });

	  // Handle 500
	  app.use(function(error, req, res, next) {
	      res.status(500);
	     res.render('500.jade', {title:'500: Internal Server Error', error: error});
	  });
	
};