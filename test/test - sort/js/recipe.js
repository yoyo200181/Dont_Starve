function getRecipe() {
    return [
        {
            id:0,
            name:"鮮果可麗餅",
            chef:true,
            hungry:140,
            blood:60,
            san:15,
            time:32,
            life:10,
            re_ing:[[7,0,0,null],[6,0,0,null]],
            other_ing:[[1,1,null]],
            intro:"黃油 + 蜂蜜 + 水果度≥1.5"
            
        },
        {
            id:1,
            name:"骨頭湯",
            chef:true,
            hungry:150,
            blood:32,
            san:5,
            time:32,
            life:10,
            re_ing:[[8,0,3,null],[0,1,3,null]],
            other_ing:[],
            intro:"2骨頭 + 洋蔥<br><font>禁忌:</font> 不可食用度>2"
            
        },
        {
            id:2,
            name:"燉肉湯",
            chef:false,
            hungry:130,
            blood:12,
            san:5,
            time:12,
            life:10,
            re_ing:[],
            other_ing:[[2,2,null]],
            intro:"肉度≥3<br><font>禁忌:</font> 不可食用度, 怪物度＞1"
            
        },{
            id:3,
            name:"海鮮雜燴",
            chef:true,
            hungry:112.5,
            blood:60,
            san:33,
            time:32,
            life:8,
            re_ing:[[0,1,1,null],[0,1,3,null]],
            other_ing:[[3,null,null]],
            intro:"魚度≥0.25 + 1洋蔥 + 1番茄<br><font>禁忌:</font> 不可食用度"
            
        },{
            id:4,
            name:"牛肉綠葉菜",
            chef:false,
            hungry:75,
            blood:40,
            san:5,
            time:32,
            life:6,
            re_ing:[[2,2,2,null]],
            other_ing:[[0,1,null]],
            intro:"葉肉 + 3蔬菜度"
            
        }      



    ]
}