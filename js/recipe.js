function getRecipe() {
    return [
        {
            id:0,
            name:"鮮果可麗餅",
            chef:true,
            hungry:150,
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
            hungry:150,
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
            
        },{
            id:5,
            name:"火龍果派",
            chef:false,
            hungry:0,
            blood:0,
            san:5,
            time:32,
            life:10,
            re_ing:[[1,1,2,null]],
            other_ing:[],
            intro:"火龍果 + 3其他<br><font>特效:</font> 食用後10秒增加40溫度<br><font>禁忌:</font> 肉度"
            
        },
        {
            id:6,
            name:"蜜汁火腿",
            chef:false,
            hungry:75,
            blood:30,
            san:5,
            time:32,
            life:15,
            re_ing:[[6,0,0,null]],
            other_ing:[[2,2,null]],
            intro:"蜂蜜≥1 + 肉度≥1.75<br><font>特效:</font> 食用後10秒增加40溫度<br><font>禁忌:</font> 不可食用度"
            
        },
        {
            id:7,
            name:"火雞大餐",
            chef:false,
            hungry:75,
            blood:20,
            san:5,
            time:48,
            life:6,
            re_ing:[[2,1,2,null]],
            other_ing:[[2,1,[2,2]],[0,null,[1,null]]],
            intro:"2雞腿 + 肉度≥1.5 + 1水果/蔬菜<br><font>特效:</font> 讓身體變暖"
            
        },
        {
            id:8,
            name:"培根煎蛋",
            chef:false,
            hungry:75,
            blood:20,
            san:5,
            time:32,
            life:20,
            re_ing:[],
            other_ing:[[2,1,[2,2]],[5,null,null]],
            intro:"肉度≥1.25 + 蛋度≥2<br><font>禁忌:</font> 蔬菜度"
            
        },
        {
            id:9,
            name:"釀魚頭",
            chef:false,
            hungry:75,
            blood:20,
            san:0,
            time:32,
            life:3,
            re_ing:[[3,0,0,null]],
            other_ing:[[3,1,[3,2]]],
            intro:"藤壺 + 魚度≥1.25"
            
        },
        {
            id:10,
            name:"藤壺中細麵",
            chef:false,
            hungry:75,
            blood:10,
            san:20,
            time:32,
            life:6,
            re_ing:[[3,0,0,null]],
            other_ing:[0,1,null],
            intro:"2藤壺 + 2蔬菜度"
            
        },
        {
            id:11,
            name:"怪物韃靼",
            chef:true,
            hungry:65.5,
            blood:-20,
            san:-20,
            time:8,
            life:10,
            re_ing:[],
            other_ing:[[4,null,null]],
            intro:"怪物度≥2<br><font>禁忌:</font> 不可食用度"
            
        },
        {
            id:12,
            name:"肉丸",
            chef:false,
            hungry:62.5,
            blood:6,
            san:5,
            time:12,
            life:10,
            re_ing:[],
            other_ing:[[2,null,null]],
            intro:"肉度≥2<br><font>禁忌:</font> 不可食用度"
            
        },
        {
            id:13,
            name:"無花果釀樹幹",
            chef:false,
            hungry:56.2,
            blood:60,
            san:0,
            time:32,
            life:10,
            re_ing:[[2,2,3,null], [1,0,3,null]],
            other_ing:[],
            intro:"象鼻 + 無花果 + 2其他"
            
        },
        {
            id:14,
            name:"無花果意麵",
            chef:false,
            hungry:56.2,
            blood:30,
            san:15,
            time:32,
            life:6,
            re_ing:[[1,0,3,null]],
            other_ing:[2,0,null],
            intro:"無花果 + 菜度≥2<br><font>特效:</font> 迅速<br><font>禁忌:</font> 肉度"
            
        },
        {
            id:15,
            name:"華夫餅",
            chef:false,
            hungry:37.5,
            blood:60,
            san:5,
            time:32,
            life:20,
            re_ing:[[7,0,0,null],[5,0,0,null],[1,1,0,null]],
            other_ing:[],
            intro:"黃油 + 蛋 + 漿果 + 其他"
            
        },
        {
            id:16,
            name:"海鮮牛排",
            chef:false,
            hungry:37.5,
            blood:60,
            san:33,
            time:16,
            life:10,
            re_ing:[],
            other_ing:[[3,2,null],[2,2,null]],
            intro:"魚≥1.5 + 肉≥1.5<br><font>禁忌:</font> 冰塊"
            
        },
        {
            id:17,
            name:"龍蝦正餐",
            chef:false,
            hungry:37.5,
            blood:60,
            san:50,
            time:16,
            life:15,
            re_ing:[[3,2,4,null],[7,0,0,null]],
            other_ing:[],
            intro:"龍蝦 + 黃油 + 2填充物<br><font>禁忌:</font> 冰塊"
            
        },
        {
            id:18,
            name:"藤壺握壽司",
            chef:false,
            hungry:37.5,
            blood:40,
            san:5,
            time:8,
            life:10,
            re_ing:[[3,0,0,null],[0,0,5,null],[5,0,0,null]],
            other_ing:[],
            intro:"藤壺 + 海帶 + 蛋 + 其他"
            
        },
        {
            id:19,
            name:"海鮮濃湯",
            chef:false,
            hungry:37.5,
            blood:40,
            san:20,
            time:16,
            life:10,
            re_ing:[[3,2,3,null]],
            other_ing:[[3,1,[3,2]]],
            intro:"鰻魚 + 魚度≥2.5"
            
        },
        {
            id:20,
            name:"炸魚排",
            chef:false,
            hungry:37.5,
            blood:40,
            san:5,
            time:32,
            life:10,
            re_ing:[[8,0,0,null]],
            other_ing:[[3,null,null],[0,null,null]],
            intro:"魚 + 樹枝 + 2其他"
            
        },
        {
            id:21,
            name:"波蘭水餃",
            chef:false,
            hungry:37.5,
            blood:40,
            san:5,
            time:16,
            life:20,
            re_ing:[[5,0,0,null]],
            other_ing:[[2,null,null],[0,null,null]],
            intro:"鳥度≥1 + 蔬菜度≥0.5 + 肉度≥0.25 + 填充物<br><font>禁忌:</font> 不可食用度/辣椒"
            
        },
        {
            id:22,
            name:"素食堡",
            chef:false,
            hungry:37.5,
            blood:30,
            san:33,
            time:32,
            life:6,
            re_ing:[[2,2,2,null],[0,1,3,null]],
            other_ing:[],
            intro:"葉肉 + 洋蔥 + 蔬菜度≥2"
            
        },
        {
            id:23,
            name:"蛙腿三明治",
            chef:false,
            hungry:37.5,
            blood:20,
            san:5,
            time:32,
            life:15,
            re_ing:[[2,1,1,null]],
            other_ing:[[0,null,null]],
            intro:"蛙腿 + 蔬菜度≥0.5 + 2填充物"
            
        },
        {
            id:24,
            name:"辣椒燉肉",
            chef:false,
            hungry:37.5,
            blood:20,
            san:0,
            time:8,
            life:10,
            re_ing:[],
            other_ing:[[2,2,null],[0,1,null]],
            intro:"肉≥1.5+菜≥1.5<br><font>特效:</font> 食用後15秒增加40溫度"
            
        },
        {
            id:25,
            name:"魚肉玉米卷",
            chef:false,
            hungry:37.5,
            blood:20,
            san:5,
            time:8,
            life:6,
            re_ing:[[0,1,8,[[0,1,14],[0,1,15]]]],
            other_ing:[[3,null,null]],
            intro:"玉米/爆米花魚/玉米鱈魚 + 魚度≥0.25 + 2填充物"
            
        },
        {
            id:26,
            name:"鱷梨醬",
            chef:false,
            hungry:37.5,
            blood:20,
            san:0,
            time:8,
            life:10,
            re_ing:[[2,1,5,null],[0,1,9,[[0,1,13]]]],
            other_ing:[],
            intro:"鼴鼠 + 石果/仙人掌肉 + 2填充物<br><font>禁忌:</font> 水果度"
        },
        {
            id:27,
            name:"蓬鬆土豆蛋奶酥",
            chef:true,
            hungry:37.5,
            blood:20,
            san:15,
            time:32,
            life:10,
            re_ing:[[0,1,2,null],[5,0,0,null]],
            other_ing:[],
            intro:"2土豆 + 1蛋 + 1其他<br><font>禁忌:</font> 肉度/不可食用度"
            
        },
        {
            id:28,
            name:"蜜汁滷肉",
            chef:false,
            hungry:37.5,
            blood:20,
            san:5,
            time:32,
            life:15,
            re_ing:[[6,0,0,null]],
            other_ing:[[2,null,null]],
            intro:"蜂蜜 + 肉度≥0.25<br><font>禁忌:</font> 不可食用度/肉>1.5"
            
        },
        {
            id:29,
            name:"藍帶魚排",
            chef:true,
            hungry:37.5,
            blood:20,
            san:-10,
            time:32,
            life:8,
            re_ing:[[2,1,1,null]],
            other_ing:[[3,1,[3,2]]],
            intro:"2蛙腿 + 魚度≥1<br><font>特效:</font> 潮濕免疫5分鐘<br><font>禁忌:</font> 不可食用度"
            
        },
        {
            id:30,
            name:"蝴蝶鬆餅",
            chef:false,
            hungry:37.5,
            blood:20,
            san:5,
            time:32,
            life:15,
            re_ing:[[10,1,0,[10,1,1]]],
            other_ing:[0,null,null],
            intro:"蝴蝶翅膀/月娥翅膀 + 蔬菜 + 2其他<br><font>禁忌:</font> 肉度"
            
        },
        {
            id:31,
            name:"燉兔子",
            chef:false,
            hungry:37.5,
            blood:20,
            san:5,
            time:10,
            life:10,
            re_ing:[[9,0,0,null]],
            other_ing:[[2,1,[2,0]]],
            intro:"肉度≥0.5 + 2冰塊<br><font>特效:</font> 食用後5秒增加40溫度<br><font>禁忌:</font> 肉度≥0.75/不可食用度"

        },
        {
            id:32,
            name:"藤壺皮塔餅",
            chef:false,
            hungry:37.5,
            blood:20,
            san:5,
            time:32,
            life:15,
            re_ing:[3,0,0,null],
            other_ing:[0,null,null],
            intro:"藤壺 + 蔬菜 + 2填充物"

        },
        {
            id:33,
            name:"加州卷",
            chef:false,
            hungry:37.5,
            blood:20,
            san:10,
            time:8,
            life:10,
            re_ing:[[0,0,5,null]],
            other_ing:[[3,1,[3,2]]],
            intro:"2海帶 + 魚度≥1<br><font>禁忌:</font> 海帶>2"

        },
        {
            id:34,
            name:"奶油土豆泥",
            chef:false,
            hungry:37.5,
            blood:20,
            san:33,
            time:16,
            life:15,
            re_ing:[[0,1,2,null],[0,1,4,null]],
            other_ing:[],
            intro:"2土豆 + 1大蒜<br><font>禁忌:</font> 肉度/不可食用度"

        },
        {
            id:35,
            name:"葉肉糕",
            chef:false,
            hungry:37.5,
            blood:8,
            san:5,
            time:32,
            life:20,
            re_ing:[2,2,2,null],
            other_ing:[],
            intro:"2葉肉 + 2其他"

        },
        {
            id:36,
            name:"肉串",
            chef:false,
            hungry:37.5,
            blood:3,
            san:5,
            time:32,
            life:15,
            re_ing:[[8,0,0,null]],
            other_ing:[2,null,null],
            intro:"樹枝 + 肉度≥0.25<br><font>特效:</font> 食用後15秒增加40溫度<br><font>禁忌:</font> 怪物度>1/不可食用度>1"

        },
        {
            id:37,
            name:"花式迴旋塊莖",
            chef:false,
            hungry:37.5,
            blood:3,
            san:15,
            time:12,
            life:10,
            re_ing:[[0,1,2,null],[8,0,0,null]],
            other_ing:[],
            intro:"土豆 + 樹枝<br><font>禁忌:</font> 肉度/怪物度>1/不可食用度>2"

        },
        {
            id:38,
            name:"伏特羊肉凍",
            chef:true,
            hungry:37.5,
            blood:3,
            san:10,
            time:32,
            life:10,
            re_ing:[[8,0,1,null]],
            other_ing:[[6,null,null]],
            intro:"伏特羊角 + 蜂蜜度≥2<br><font>特效:</font> 5分鐘攻擊造成x1.5倍電流傷害(目標潮濕時x2.5倍)<br><font>禁忌:</font> 肉度"

        },
        {
            id:39,
            name:"果醬",
            chef:false,
            hungry:37.5,
            blood:3,
            san:5,
            time:8,
            life:15,
            re_ing:[],
            other_ing:[[1,null,null]],
            intro:"4水果"

        },
        {
            id:40,
            name:"發光漿果慕斯",
            chef:true,
            hungry:37.5,
            blood:3,
            san:10,
            time:16,
            life:8,
            re_ing:[[1,0,2,[[1,1,4]]]],
            other_ing:[],
            intro:"發光漿果/2小發光漿果 + 水果度≥2<br><font>特效:</font> 人物食用後發光2天<br><font>禁忌:</font> 肉度/不可食用度"

        },
        {
            id:41,
            name:"釀茄子",
            chef:false,
            hungry:37.5,
            blood:3,
            san:5,
            time:32,
            life:15,
            re_ing:[[0,1,11,null]],
            other_ing:[],
            intro:"茄子≥1 + 蔬菜≥1.5<br><font>特效:</font> 食用後5秒增加40溫度"

        },
        {
            id:42,
            name:"南瓜餅",
            chef:false,
            hungry:37.5,
            blood:0,
            san:15,
            time:32,
            life:10,
            re_ing:[[0,1,7,null]],
            other_ing:[[6,null,null]],
            intro:"南瓜≥1 + 蜂蜜度≥2"

        },
        {
            id:43,
            name:"怪物千層餅",
            chef:false,
            hungry:37.5,
            blood:-20,
            san:-20,
            time:8,
            life:6,
            re_ing:[[2,2,1]],
            other_ing:[],
            intro:"2怪度肉 + 2其他<br><font>禁忌:</font> 不可食用度"

        },
        {
            id:44,
            name:"龍蝦湯",
            chef:false,
            hungry:25,
            blood:60,
            san:10,
            time:8,
            life:10,
            re_ing:[[3,2,4,null],[9,0,0,null]],
            other_ing:[],
            intro:"龍蝦 + 冰塊 + 2其他"

        },
        {
            id:45,
            name:"爆炒填餡辣椒",
            chef:false,
            hungry:25,
            blood:30,
            san:-5,
            time:32,
            life:15,
            re_ing:[[0,1,5,null]],
            other_ing:[[2,null,null]],
            intro:"辣椒 + 肉≤1.5<br><font>特效:</font> 食用後15秒增加40溫度<br><font>禁忌:</font> 不可食用度"

        },
        {
            id:46,
            name:"酸橘汁醃魚",
            chef:false,
            hungry:25,
            blood:20,
            san:5,
            time:8,
            life:10,
            re_ing:[[9,0,0,null]],
            other_ing:[[3,2,null]],
            intro:"魚度≥2 + 冰<br><font>特效:</font> 食用後10秒降低40溫度<br><font>禁忌:</font> 蛋度/不可食用度"

        },
        {
            id:47,
            name:"無花果烤串",
            chef:false,
            hungry:25,
            blood:20,
            san:15,
            time:16,
            life:15,
            re_ing:[[1,0,3,null],[8,0,0,null]],
            other_ing:[],
            intro:"無花果 + 樹枝≥1 + 肉度≥1"

        },
        {
            id:48,
            name:"水果聖代",
            chef:false,
            hungry:25,
            blood:20,
            san:5,
            time:8,
            life:6,
            re_ing:[[8,0,0,null]],
            other_ing:[[1,1,null]],
            intro:"水果度≥3 + 樹枝<br><font>特效:</font> 食用後5秒降40溫度"

        },
        {
            id:49,
            name:"蔬菜雞尾酒",
            chef:false,
            hungry:25,
            blood:3,
            san:33,
            time:8,
            life:15,
            re_ing:[[0,1,1,[[0,1,6]]],[9,0,0,null]],
            other_ing:[[0,1,null]],
            intro:"番茄/蘆筍 + 冰 + 蔬菜度≥2.5"

        },
        {
            id:50,
            name:"蘆筍冷湯",
            chef:true,
            hungry:25,
            blood:3,
            san:10,
            time:8,
            life:15,
            re_ing:[[0,1,6,null],[9,0,0,null]],
            other_ing:[],
            intro:"2蘆筍 + 2冰塊<br><font>特效:</font> 食用後持續5分鐘降溫40"

        },
        {
            id:51,
            name:"蔬菜雜燴",
            chef:false,
            hungry:25,
            blood:3,
            san:5,
            time:16,
            life:15,
            re_ing:[],
            other_ing:[[0,null,null]],
            intro:"蔬菜度≥0.5<br><font>禁忌:</font> 肉度/不可食用度"

        },
        {
            id:52,
            name:"生鮮薩爾薩醬",
            chef:false,
            hungry:25,
            blood:3,
            san:33,
            time:8,
            life:15,
            re_ing:[[0,1,1,null],[0,1,3,null]],
            other_ing:[],
            intro:"番茄≥1 + 洋蔥≥1<br><font>禁忌:</font> 肉度/蛋度/不可食用度"

        },
        {
            id:53,
            name:"恐怖國王餅",
            chef:true,
            hungry:25,
            blood:1,
            san:5,
            time:32,
            life:10,
            re_ing:[[0,1,2,null],[0,1,3,null],[8,0,2,null]],
            other_ing:[],
            intro:"2夢魘燃料 + 洋蔥 + 土豆<br><font>特效:</font> 回復食物基礎值後，對調理智值與生命值"

        },
        {
            id:54,
            name:"蘑菇蛋糕",
            chef:false,
            hungry:25,
            blood:0,
            san:10,
            time:16,
            life:15,
            re_ing:[[0,0,0,null],[0,0,1,null],[0,0,2,null],[0,0,3,null]],
            other_ing:[],
            intro:"藍蘑菇+綠蘑菇+紅蘑菇+月亮蘑菇<br><font>特效:</font> 食用後持續8分鐘獲得催眠抗性，由10秒提升至33.3秒<br><font>禁忌:</font> 必須為生蘑菇"

        },
        {
            id:55,
            name:"冰淇淋",
            chef:false,
            hungry:25,
            blood:0,
            san:50,
            time:8,
            life:3,
            re_ing:[[9,0,0,null]],
            other_ing:[[6,null,null],[7,null,null]],
            intro:"奶製品度≥1 + 蜂蜜度≥1 + 冰<br><font>特效:</font> 食用後15秒降低40溫度<br><font>禁忌:</font> 蔬菜度/肉度/蛋度/不可食用度"

        },
        {
            id:56,
            name:"太妃糖",
            chef:false,
            hungry:25,
            blood:-3,
            san:15,
            time:32,
            life:15,
            re_ing:[],
            other_ing:[[6,null,null]],
            intro:"蜂蜜度≥3 + 其他<br><font>禁忌:</font> 肉度"

        },
        {
            id:57,
            name:"辣龍椒沙拉",
            chef:true,
            hungry:25,
            blood:-3,
            san:10,
            time:12,
            life:15,
            re_ing:[[0,1,5,null],[0,1,2,null]],
            other_ing:[],
            intro:"辣椒≥1 + 火龍果≥1 + 其他<br><font>特效:</font> 持續5分鐘增加40溫度<br><font>禁忌:</font> 肉度/蛋度/不可食用度"

        },
        {
            id:58,
            name:"冰香蕉凍唇蜜",
            chef:false,
            hungry:18.7,
            blood:30,
            san:15,
            time:20,
            life:15,
            re_ing:[[0,1,3,null],[9,0,0,null]],
            other_ing:[],
            intro:"香蕉≥1+冰塊≥1<br><font>特效:</font> 食用後15秒降低40溫度<br><font>禁忌:</font> 肉度/魚度"

        },
        {
            id:59,
            name:"蘆筍湯",
            chef:false,
            hungry:18.7,
            blood:20,
            san:5,
            time:8,
            life:15,
            re_ing:[[0,1,6,null]],
            other_ing:[],
            intro:"蘆筍≥1 + 蔬菜≥2.5<br><font>禁忌:</font> 肉度/不可食用度"

        },
        {
            id:60,
            name:"鰻魚料理",
            chef:false,
            hungry:18.7,
            blood:20,
            san:5,
            time:8,
            life:10,
            re_ing:[[0,0,5,[[0,1,12]]],[3,2,3,null]],
            other_ing:[],
            intro:"鰻魚≥1 + 海帶≥1"

        },
        {
            id:61,
            name:"無花果蛙腿三明治",
            chef:false,
            hungry:18.7,
            blood:8,
            san:10,
            time:16,
            life:15,
            re_ing:[[1,0,3,null],[2,1,1,null]],
            other_ing:[],
            intro:"蛙腿 + 無花果 + 2其他<br><font>禁忌:</font> 蔬菜度"

        },
        {
            id:62,
            name:"花沙拉",
            chef:false,
            hungry:12.5,
            blood:40,
            san:5,
            time:8,
            life:6,
            re_ing:[[0,0,4,null]],
            other_ing:[],
            intro:"仙人掌花 + 蔬菜度≥2<br><font>禁忌:</font> 水果度/肉度/蛋度/蜂蜜度/不可食用度"

        },
        {
            id:63,
            name:"什錦乾果",
            chef:false,
            hungry:12.5,
            blood:30,
            san:5,
            time:8,
            life:15,
            re_ing:[[12,0,0,null],[1,0,0,[[1,0,1]]]],
            other_ing:[],
            intro:"烤樺樹果≥1 + 漿果/多汁漿果≥1 + 水果度≥1<br><font>禁忌:</font> 蔬菜度/肉度/蛋度/奶制品度"

        },
        {
            id:64,
            name:"香蕉凍",
            chef:false,
            hungry:12.5,
            blood:20,
            san:33,
            time:8,
            life:3,
            re_ing:[[1,1,3,null],[9,0,0,null],[8,0,0,null]],
            other_ing:[],
            intro:"香蕉 + 冰塊 + 樹枝<br><font>特效:</font> 食用後10秒降低40溫度<br><font>禁忌:</font> 肉度/魚度"

        },
        {
            id:65,
            name:"西瓜冰棍",
            chef:false,
            hungry:12.5,
            blood:3,
            san:20,
            time:8,
            life:3,
            re_ing:[[1,1,1,null],[9,0,0,null],[8,0,0,null]],
            other_ing:[],
            intro:"西瓜 + 冰塊 + 樹枝<br><font>特效:</font> 食用後10秒降低40溫度<br><font>禁忌:</font> 蔬菜度/肉度/蛋度"

        },
        {
            id:66,
            name:"琥珀美食",
            chef:false,
            hungry:12.5,
            blood:0,
            san:0,
            time:32,
            life:"不限",
            re_ing:[[10,1,2,null]],
            other_ing:[],
            intro:"塵土塊 + 3其他<br><font>特效:</font> 玩家和豬人不可食用，餵食給塵蛾，使玩家能挖到3個銩礦碎片"

        },
        {
            id:67,
            name:"牛奶帽",
            chef:false,
            hungry:187.5,
            blood:0,
            san:0,
            time:32,
            life:"不限",
            re_ing:[[2,1,4,null],[0,0,5,null]],
            other_ing:[[7,null,null]],
            intro:"裸露鼻孔 + 海帶 + 奶製品度≥1<br><font>特效:</font> 每5秘恢復3.9饑餓值"

        },
        {
            id:68,
            name:"舒緩茶",
            chef:false,
            hungry:0,
            blood:3,
            san:15,
            time:16,
            life:3,
            re_ing:[[10,0,0,null],[9,0,0,null]],
            other_ing:[6,null,null],
            intro:"勿忘我≥1 + 冰塊≥1 + 峰蜜度≥1<br><font>特效:</font> 食用後5秒增加40溫度<br><font>禁忌:</font> 不可有此3樣外的食物度"

        },
        {
            id:69,
            name:"彩虹糖豆x3",
            chef:false,
            hungry:0,
            blood:122,
            san:5,
            time:40,
            life:"不限",
            re_ing:[[6,1,0,null]],
            other_ing:[],
            intro:"蜂王漿 + 3其他<br><font>特效:</font> 在2分鐘內每2秒恢復2點血量<br><font>禁忌:</font> 怪物度/不可食用度"

        },
        {
            id:70,
            name:"果凍沙拉",
            chef:false,
            hungry:37.5,
            blood:0,
            san:50,
            time:40,
            life:6,
            re_ing:[[2,2,2,null],[6,0,0,[[6,1,0]]]],
            other_ing:[],
            intro:"2葉肉 + 蜂王漿/2蜂蜜"

        },
        {
            id:71,
            name:"曼德拉草湯",
            chef:false,
            hungry:150,
            blood:100,
            san:5,
            time:60,
            life:6,
            re_ing:[[0,1,10,null]],
            other_ing:[],
            intro:"曼德拉草≥1"

        },
        {
            id:72,
            name:"芝士蛋糕",
            chef:false,
            hungry:0,
            blood:-3,
            san:0,
            time:10,
            life:18750,
            re_ing:[[0,1,8,[[0,1,14],[0,1,15]]],[6,0,0,null],[8,0,0,null]],
            other_ing:[],
            intro:"玉米/爆米花魚/玉米鱈魚≥1 + 蜂蜜≥1 + 樹枝≥1<br><font>特效:</font> 作誘餌吸引火雞/魚人進入尖牙陷阱<br><font>禁忌:</font> 曼德拉草/魚度"

        },
        {
            id:73,
            name:"香蕉奶昔",
            chef:false,
            hungry:25,
            blood:8,
            san:33,
            time:10,
            life:15,
            re_ing:[[1,1,3,null]],
            other_ing:[],
            intro:"香蕉≥2<br><font>禁忌:</font> 肉度/魚度/怪物度"

        },
        {
            id:74,
            name:"普通煎蛋",
            chef:false,
            hungry:50,
            blood:3,
            san:5,
            time:10,
            life:10,
            re_ing:[],
            other_ing:[[5,null,null]],
            intro:"蛋度≥3"

        },
        {
            id:75,
            name:"早餐鍋",
            chef:false,
            hungry:37.5,
            blood:20,
            san:5,
            time:20,
            life:20,
            re_ing:[[5,0,0,null]],
            other_ing:[[0,null,null]],
            intro:"鳥蛋≥1 + 蔬菜度≥1<br><font>禁忌:</font> 高腳鳥蛋/肉度/奶製品度"

        },
        {
            id:76,
            name:"蘇格蘭高鳥蛋",
            chef:false,
            hungry:150,
            blood:60,
            san:5,
            time:40,
            life:15,
            re_ing:[[5,1,0,null]],
            other_ing:[[0,null,null]],
            intro:"高腳鳥蛋≥1 + 蔬菜度≥1"

        },
        {
            id:77,
            name:"蒸樹枝",
            chef:false,
            hungry:100,
            blood:15,
            san:0,
            time:10,
            life:20,
            re_ing:[],
            other_ing:[[8,null,null]],
            intro:"不可食用度=4<br><font>特效:</font> 玩家不可食用，只供牛食用"

        },
        {
            id:78,
            name:"皮弗婁牛零食",
            chef:false,
            hungry:25,
            blood:75,
            san:0,
            time:40,
            life:20,
            re_ing:[[10,0,0,null],[12,0,0,null]],
            other_ing:[8,null,null],
            intro:"不可食用度≥1 + 樺栗果≥1 + 勿忙我≥1<br><font>特效:</font> 玩家不可食用，只供牛食用<br><font>禁忌:</font> 不可有此3種外的食物度"

        }           



    ]
}