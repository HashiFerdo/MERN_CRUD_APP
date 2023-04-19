const express = require('express');
const Incomes = require('../models/income');

const router = express.Router();


// Save income

router.post('/income/save',(req,res)=>{
    let newIncome = new Incomes(req.body);

    newIncome.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Income record saved successfully"
        });
    });
});


//get posts

router.get('/income',(req,res)=>{
    Incomes.find().exec((err,Incomes) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingIncomes:Incomes
        })
    });
});


//update Posts

router.put('/income/update/:id',(req,res)=>{
    Incomes.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,income)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Income record updated successfully"
            });
        }
    );
});

//delete post

router.delete('/income/delete/:id',(req,res)=>{
    Incomes.findByIdAndRemove(req.params.id).exec((err,deleteIncome)=>{
        if(err) return res.status(400).json({
            message:"delete unsuccessful",err
        })
        return res.json({
            message:"Delete Successful",deleteIncome
        })
    })
})





module.exports = router;