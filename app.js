var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var user = require('./routes/User');
var posts = require('./routes/Posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname)));

app.use('/', routes);
app.use('/User', user);
app.use('/Posts', posts);



//User endpoints
app.get('/users', user.findAll);
app.get('/users/:id', user.findOne);
app.post('/login', user.authenticateUser);
app.post('/adduser', user.addUser);
app.put('/TemporaryUsers/:id/bio', user.updateProfileBio);
app.delete('/deleteuser/:id', user.deleteUser);



//Posts
app.get('/posts', posts.findAllPosts);
app.get('/posts/:id', posts.findOne);
app.get('/postsbytags/:tags', posts.findAllPostsByTag);
app.get('/postsbylowerprice/:price', posts.findAllLessThanPrice);
app.get('/postsbycategory/:category', posts.findAllCraftsByCertainCategory);
app.get('/randomizedfeaturedposts', posts.findRandomizedFeaturedPosts);
app.post('/addcraft', posts.addCraft);
app.put('/updatepost/:id', posts.updatePost);
app.delete('/deletepost/:id', posts.deletePost);
//not working
app.post('/uploadimage', posts.uploadImage);







//come back to this
//save for extra marks maybe? ;)
//app.get('TemporaryPostsCategory/:id/category', posts.findCategoryFuzzySearch);

if(process.env.NODE_ENV != 'test'){
	app.use(logger('dev'));
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

//google login
function onLoadFunction() {
	gapi.client.setApiKey('AIzaSyBaa7ff28gjjIZeEuofM02g3XqT3PUAO20');
	gapi.client.load('plus', 'v1', function () {

	});
}

module.exports = app;
