const express=require('express');
const app=express();
const hbs=require('hbs');
hbs.registerPartials(__dirname+'/views/partials');
const os=require('os');
var userName=os.userInfo().username;
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
  res.render('maintenance.hbs');
})
app.get('/',(req,res)=>{
res.render('home.hbs',{
  Title:'Homepage',
  pageTitle:userName,
  currentTime:new Date(),
  currentYear:new Date().getFullYear()
});
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear:new Date().getFullYear()
  });
})
app.get('/bad',(req,res)=>{
  res.send({
    name:'Vinay Singh',
    likes:['Bikes','Girls'],
    bad:'Error while searching a girlfirend'
  });
})
app.listen(3000,()=>{
  console.log('App is listening on port 3000');
})
