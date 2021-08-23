const express = require('express');
const path = require('path');
const morgan = require('morgan'); //GET / 304 7.008 ms - - 출력
const dotenv = require('dotenv'); // .env파일관리
const nunjucks = require('nunjucks'); // 뷰엔진 방식

//multer=파일업로드

const app = express();

const indexRouter = require('./routes');

app.use(morgan('dev'));

app.set('port', process.env.PORT || 3002);
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app,
    watch: true,
});

app.use('/', indexRouter);

app.use((req,res,next) =>
{
    res.status(404).send('Not Found');
});

// app.get('/', (req,res)=>
// {
//     res.sendFile(path.join(__dirname,'/views/index.html'))
// });

app.listen(app.get('port'),()=>
{
    console.log(app.get('port'), '에서 대기중');
});