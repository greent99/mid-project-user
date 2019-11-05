const express = require('express')
const app = express()
const port = 3000
var exphbs  = require('express-handlebars')

app.set('view options', { layout: false });

app.use(express.static('public'))
app.use('/admin', express.static('public'))


var hbs = exphbs.create({
    helpers: {
        block: function (name) {
            var blocks  = this._blocks,
                content = blocks && blocks[name];

            return content ? content.join('\n') : null;
        },

        contentFor: function (name, options) {
            var blocks = this._blocks || (this._blocks = {}),
                block  = blocks[name] || (blocks[name] = []);

            block.push(options.fn(this));
        }
    }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.post('/contact',function(req,res){
	res.render('user/success',{layout: 'success.handlebars'})
})

app.get('/',function(req,res){
  res.render('user/home', { layout: 'user.handlebars' });
})

app.get('/women',function(req,res){
  res.render('user/women', { layout: 'user.handlebars' });
})

app.get('/register',function(req,res){
  res.render('user/register', { layout: 'user.handlebars' });
})

app.get('/checkout',function(req,res){
  res.render('user/checkout', { layout: 'user.handlebars' });
})

app.get('/contact',function(req,res){
  res.render('user/contact', { layout: 'user.handlebars' });
})

app.get('/details',function(req,res){
  res.render('user/details', { layout: 'user.handlebars' });
})










app.listen(port, () => console.log(`Example app listening on port ${port}!`))