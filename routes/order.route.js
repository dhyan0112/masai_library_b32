const express=require('express');
const { OrderModel } = require('../models/order.model');
const orderRouter=express.Router();
orderRouter.get('/orders', async(req,res)=>{
    const orders=await OrderModel.find();
    res.send(orders)
})
orderRouter.post('/orders', async(req,res)=>{
    const payload=req.body;
    const order=new OrderModel(payload)
    await order.save()
    res.send({"msg":"New order is added"})
})
module.exports={
    orderRouter
}