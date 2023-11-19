const mongoose = require("mongoose");


// データのスキーマ定義
const FoodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, //入力必須
        trim:true, //空白削除
        lowercase:true
    },
    calories:{
        type:Number,
        default:0, //なにも設定がないと０になる。
        validate(value){
            if(value < 0)throw new Error("マイナスの値は設定できません。");
        }
    }
})


//定義したデータスキーマをファイル内で利用できるようにしている。
const Food = mongoose.model("Food" , FoodSchema);
module.exports = Food ; 