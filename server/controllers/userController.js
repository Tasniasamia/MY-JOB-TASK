const express=require('express')
const User=require('../models/user.model')
const { uuid } = require('uuidv4');

exports.getUser=((req,res)=>{
return res.send({message:"all data found"})
})
exports.createUser=async(req,res)=>{
    const reqbody=await req.body
    const user=new User({
        id:uuid(),
        name:reqbody['name'],
        email:reqbody['email'],
        phone_number:reqbody['phone_number'],
        address:reqbody['address'],
        image:reqbody['image']
        
    })
    const result=await user.save();
    return res.send({message:"I am done",data:result})
}