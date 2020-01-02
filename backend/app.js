const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Request received');
    next();
})

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) => {
    res.json({message: 'Your request was successful'});
    next();
})

app.use((req, res, next) => {
    console.log('Response sent successfully');
    next();
})

app.get('/savedata',(req,res)=>{
    const data = req.query
    const blogPost = new blog(
      {
        title: data.title,
        author: data.author,
        body: data.body,
        comment: 0,
        date: new Date()
      }
    )
    blogPost.save((err,doc)=>{
      return res.json(doc)
    })
  })
  

module.exports = app;