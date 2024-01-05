const express=require('express')
const User=require('../models/user.model')
const { uuid } = require('uuidv4');

exports.getUser = async (req, res) => {
    try {
        const data = await User.find();
        return res.send({ message: "All data found", data: data });
    } catch (error) {
        return res.status(500).send({ message: "Error fetching data", error: error.message });
    }
};
exports.getOneUser= async (req,res) =>{
    try{
        const {id}=await req.params;
        const result=await User.findOne({_id:id})
        return res.send({data:result})

    }
    catch (error) {
        return res.status(500).send({ message: "Error fetching data", error: error.message });
    }
}
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
exports.deleteUser=async(req,res)=>{
    const { id }=await req.params;
    const result=await User.deleteOne({_id:id})
    return res.status(200).json({message:result})


}
exports.updateUser=async(req,res)=>{
    const reqbody=await req.body
    const { id }=await req.params;
    const findUser=await User.findOne({_id:id});
        findUser.id = findUser.id; 
        findUser.name = reqbody.name || findUser.name;
        findUser.email = reqbody.email || findUser.email;
        findUser.phone_number = reqbody.phone_number || findUser.phone_number;
        findUser.address = reqbody.address || findUser.address;
        findUser.image = reqbody.image || findUser.image;
   let result= await findUser.save()
   return res.status(202).json({data:result})

}