var type_list = ["蔬菜", "水果", "肉", "海鮮", "蛋", "蜂蜜", "奶製品", "其他"];


function sel_food(n,re){
    if (re == false){
        var foodName = food[n[0]].Ingredients[n[1]].ingre_re[n[2]].name;
        document.getElementById("test").innerHTML += "<br> test0";
        var food_ = document.getElementById(foodName+"_re");
        var food_re = document.getElementById(foodName);
        document.getElementById("test").innerHTML += "<br> test1";
    } else {
        var foodName = food[n[0]].Ingredients[n[1]].ingre[n[2]].name;
        var food_ = document.getElementById(foodName);
        if (re){
            var food_re = document.getElementById(foodName+"_re");
        }
        document.getElementById("test").innerHTML += "<br> test2";

    }


    if(food_.checked){
        document.getElementById("test").innerHTML += "<br> test3";
        if(!have_food[n[0]][n[1]].includes(foodName)){
            have_food[n[0]][n[1]].push(foodName);
        }
        document.getElementById("test").innerHTML += "<br> test4";
    }else {
        document.getElementById("test").innerHTML += "<br> test5";
        if(have_food[n[0]][n[1]].includes(foodName)){
            var index = have_food[n[0]][n[1]].indexOf(foodName);
            have_food[n[0]][n[1]].splice(index,1);
            document.getElementById("test").innerHTML += "<br> test6";

        }
    }

    if (re != null && food_re.checked!=food_.checked){
        document.getElementById("test").innerHTML += "<br> test7";
        food_re.checked = food_.checked;
        food_re.onchange();
    }
}

function print_food(){
    var foodName = "藤壺";
    document.getElementById("test").innerHTML = food[3].Ingredients[0].ingre[0].name;
    document.getElementById("test").innerHTML += "<br>"; 
    document.getElementById("test").innerHTML += document.getElementById(foodName+"_re").checked;
    document.getElementById("test").innerHTML += ',' + have_food[2][0].includes(foodName);
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += document.getElementById(foodName).checked;
    document.getElementById("test").innerHTML += ',' + have_food[3][0].includes(foodName);
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[3][0].length;

}