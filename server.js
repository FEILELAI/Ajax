const express = require('express')

const app = express();

//使用中间件解析 urlencoded 编码形式的请求体参数
app.use(express.urlencoded({extended:true}));

//使用中间件解析 json 编码形式的请求体参数
app.use(express.json())

//暴露静态资源
app.use(express.static(__dirname + '/src'));

app.get('/test_get', (request, response) => {
    console.log('有人请求test_get了');
    response.send('hello_test_get_w');
})
// get 请求
app.get('/test_get2/:name/:age',(request,response)=>{
    console.log('有人请求test_get2了,--携带的params参数是:',request.params);
    response.send('hello_test_get2')
})

//post 请求
app.post('/test_post',(request,response)=>{
    console.log('有人请求test_post了--携带的请求体参数是：',request.body);
    response.send('hello_test_post')
})

app.listen(8080, (err) => {
    if (!err) console.log('测试服务器成功!测试地址如下');
    console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
    console.log('http://127.0.0.1:8080/04_ajax_post请求.html');
})