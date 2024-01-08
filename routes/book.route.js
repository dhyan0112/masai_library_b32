const express=require('express');
const { BookModel } = require('../models/book.model');

const bookRouter=express.Router();


bookRouter.get('/books', async(req,res)=>{
    const books=await BookModel.find();
    res.send(books)
})

bookRouter.get('/books/:id',async(req,res)=>{
    const bookid=req.params.id
    const book=await BookModel.findById({_id:bookid})
    res.send(book)
})

bookRouter.post('/books', async(req,res)=>{
    const payload=req.body;
    const book=new BookModel(payload)
    await book.save()
    res.send({"msg":"New book is added"})
})

bookRouter.patch('/books/:id', async (req,res) =>{
    const bookid=req.params.id
    const payload=req.body
    await BookModel.findByIdAndUpdate({_id:bookid},payload)
    res.send({"msg":`Book with ID:${book} has been updated.`})
})

bookRouter.delete('/books/:id', async (req,res) =>{
    const bookid=req.params.id
    await BookModel.findByIdAndDelete({_id:bookid})
    res.send({"msg":`Book with ID:${book} has been deleted.`})
})

module.exports={
    bookRouter
}