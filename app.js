const express = require('express');
const path = require('path');
const consign = require('consign');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


consign({locale: 'pt-br'})
	.include('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.listen(3000, () => {
	console.log('Ntalk no ar.');
});