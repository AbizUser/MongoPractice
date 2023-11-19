const express = require("express");
const app = express();
// 以下はインポート
const foodModel = require("../models/food"); 

//APIを叩く時になんの形式でAPIを叩くのか記述している。
app.use(express.json());



// データの取得 ※server.jsでfoodrouteをインポートをしないと利用できない。
app.get("/foods" , async(req,res) =>{
    // データベースの中のデータをすべて返す。find関数はmongooseライブラリ
    const foods = await foodModel.find({});
    try{
        res.send(foods)
    }catch(err){
        res.status(500).send(err);
    }
})


// データの作成
app.post("/food" , async(req,res) =>{
        const food = new foodModel(req.body);   
    
    try{
        // 以下はDBに登録
        await food.save();
        res.send(food)
    }catch(err){
        res.status(500).send(err);
    }
})


// データの部分修正
app.patch("/food/:id" , async(req,res) =>{
    try{
        //Idはリクエストで投げたId属性のリクエストボディに対して部分修正を行う
        await foodModel.findByIdAndUpdate(req.params.id , req.body);
        await foodModel.save();
        // 変更内容を保存
    }catch(err){
        res.status(500).send(err);
    }
})


// データの削除
app.delete("/food/:id" , async(req,res) =>{
    try{
        await foodModel.findByIdAndDelete(req.params.id);
    }catch(err){
        res.status(500).send(err);
    }
})










module.exports = app;