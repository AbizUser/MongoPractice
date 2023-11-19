const express = require("express");
const app = express();
const mongoose = require("mongoose");


// 下記についてはExcepressでのルートの設定の基本の分野で学習できる
const foodRouter = require(".//routes/foodRoute");
app.use(foodRouter);


// データベース接続(DB名はFood)
mongoose.connect(
    
).then(()=>{console.log("データベース接続に成功しました。")})
.catch((err)=>{console.log(err)});




app.listen(3000, ()=>{
    console.log("サーバが起動しました。")
});