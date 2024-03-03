const todoModel = require('../models/todoModel');

module.exports.postData = async function postData(req,res){
    try{
     const newItem = new todoModel({
        item:req.body.item
     })  
     //save this item in db
     const saveItem = await newItem.save();
     res.status(200).json(saveItem)//here it will just simply save the data in db
     
    // const obj = req.body;    
    // const data = await todoModel.create(obj);
    // if(data){
    //     res.json({
    //         message:"data created successfully",
    //         data:data
    //     })
    // }else{
    //     res.json({
    //         message:"data not created"
    //     })
    // }

    // }
}
catch(err){
    res.json(err)
}
}
module.exports.getData = async function getData(req,res){
    try{   
    const data = await todoModel.find({});
    res.status(200).json(data); 
    // if(data){
    //     res.json({
    //         message:"data retreived successfully",
    //         data:data
    //     })
    // }else{
    //     res.json({
    //         message:"data not found"
    //     })
    // }

    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports.updateData = async function updateData(req,res){
    try{
    const id = req.params.id;   
    const data = await todoModel.findByIdAndUpdate(id, {$set:req.body});
    res.status(200).json("data updated successfully");
    // if(data){
    //     res.json({
    //         message:"data updated successfully",
    //         data:data
    //     })
    // }else{
    //     res.json({
    //         message:"data not found"
    //     })
    // }

    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports.deleteData = async function deleteData(req,res){
    try{
    const id = req.params.id;   
    const data = await todoModel.findByIdAndDelete(id);
    if(data){
        res.json({
            message:"data deleted successfully",
            data:data
        })
    }else{
        res.json({
            message:"data not found"
        })
    }

    }
    catch(err){
        res.json({
            message:err.message
        })
    }
}