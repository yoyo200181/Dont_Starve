var type_list = ["蔬菜", "水果", "肉", "海鮮", "蛋", "蜂蜜 ", "奶製品", "其他"];

function switch_type(n) {
    var target = document.getElementById(n);
    target.classList.toggle("hide");
    target = document.getElementById(n+"_tab");
    target.classList.toggle("sel");
    for (var i of type_list) {
       if (i != n) {
        var show = document.getElementById(i);
        var bg = document.getElementById(i+"_tab");
        show.classList.add("hide");
        bg.classList.remove("sel");
            
       } 
    }

}

function print_type(){

    for(var i=0; i<type_list.length; i++){
        document.write("<button id=" + '"' + type_list[i] + '_tab"' + "onclick='switch_type(" + '"' + type_list[i] + '"' + ")'>" + type_list[i] + "</button>")
    }
    document.write("<br>");
    for(var i=0; i<type_list.length; i++){
        document.write('<span id="' + type_list[i] + '" class="hide">');
        document.write('<label><input id="' + type_list[i] + 'all" name="sel_" type="checkbox" onchange=\'sel_all("' + type_list[i] + '")\'>選擇所有'+ type_list[i] + '</label>');
        
        for(var j=0; j<food.length; j++) {
            if(type_list.includes(food[j].type)){
                if(food[j].type == type_list[i]){

                    for(var k=0; k<food[j].Ingredients.length;k++){
                        document.write("<br><b>" + food[j].type + "度: "+ food[j].Ingredients[k].weight + "</b><br>");
                        if(food[j].Ingredients[k].ingre.length>0){
                            
                            for(var l=0;l<food[j].Ingredients[k].ingre.length;l++){
                                document.write('<label><input id="' + food[j].Ingredients[k].ingre[l].name + '" name="' + type_list[i] + '" type="checkbox" onchange="sel_food([' + j +',' + k +',' + l +'],' + food[j].Ingredients[k].ingre[l].repeat + ')">'+ food[j].Ingredients[k].ingre[l].name + '</label>');
                            }
                            
                        }

                        if(food[j].Ingredients[k].ingre_re.length>0){

                            for(var l=0;l<food[j].Ingredients[k].ingre_re.length;l++){
                                document.write('<label><input id="' + food[j].Ingredients[k].ingre_re[l].name + '_re" name="' + type_list[i] + '" type="checkbox" onchange="sel_food([' + j +',' + k +',' + l +'],' + food[j].Ingredients[k].ingre_re[l].repeat + ')">'+ food[j].Ingredients[k].ingre_re[l].name + '</label>');
                            }

                        }
                    }
                    break;
                }
                
            }else if (type_list[i] == "其他"){

                for(var k=0; k<food[j].Ingredients.length;k++){
                    document.write("<br><b>" + food[j].type + "度: "+ food[j].Ingredients[k].weight + "</b><br>");
                    if(food[j].Ingredients[k].ingre.length>0){
                        
                        for(var l=0;l<food[j].Ingredients[k].ingre.length;l++){
                            document.write('<label><input id="' + food[j].Ingredients[k].ingre[l].name + '" name="' + type_list[i] + '" type="checkbox" onchange="sel_food([' + j +',' + k +',' + l +'],' + food[j].Ingredients[k].ingre[l].repeat + ')">'+ food[j].Ingredients[k].ingre[l].name + '</label>');
                        }
                        
                    }

                    if(food[j].Ingredients[k].ingre_re.length>0){

                        for(var l=0;l<food[j].Ingredients[k].ingre_re.length;l++){
                            document.write('<label><input id="' + food[j].Ingredients[k].ingre_re[l].name + '_re" name="' + type_list[i] + '" type="checkbox" onchange="sel_food([' + j +',' + k +',' + l +'],' + food[j].Ingredients[k].ingre_re[l].repeat + ')">'+ food[j].Ingredients[k].ingre_re[l].name + '</label>');
                        }

                    }
                }     
            }
        }
        document.write('</span>');
    }
}




function sel_food(n,re){

    if (re == false){
        var foodName = food[n[0]].Ingredients[n[1]].ingre_re[n[2]].name;
        var food_ = document.getElementById(foodName+"_re");
        var food_re = document.getElementById(foodName);
    } else {
        var foodName = food[n[0]].Ingredients[n[1]].ingre[n[2]].name;
        var food_ = document.getElementById(foodName);
        if (re){
            var food_re = document.getElementById(foodName+"_re");
        }
    }


    if(food_.checked){
        if(!have_food[n[0]][n[1]].includes(foodName)){
            have_food[n[0]][n[1]].push(foodName);
        }
    }else {
        if(have_food[n[0]][n[1]].includes(foodName)){
            var index = have_food[n[0]][n[1]].indexOf(foodName);
            have_food[n[0]][n[1]].splice(index,1);
        }
    }

    if (re != null && food_re.checked!=food_.checked){
        food_re.checked = food_.checked;
        food_re.onchange();
    }
    
}

function sel_all(n){
    var checkboxes = document.getElementsByName(n);
    var result = document.getElementById(n+"all")
    for (var checkbox of checkboxes){
        checkbox.checked = result.checked;
        checkbox.onchange();
    }
}

function print_food(){

    document.getElementById("test").innerHTML = have_food[3][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[3][1];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[3][2];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[4][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[5][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[5][1];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[6][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[6][1];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[7][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[8][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[9][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[10][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[10][1];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[11][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[12][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[13][0];

}

function remove_all(){
    var checkbox = document.getElementById("sel_all");
    checkbox.checked = false;
    checkbox.onchange(sel_all("sel_"));


}

function isEmpty(array) {
    return Array.isArray(array) && (array.length == 0 || array.every(isEmpty));
}

function print_recipe(n,chef){
    document.getElementById("t").innerHTML = '<tr style="font-weight: bold;"> <td>名稱</td><td onclick="change(0)">生命值</td><td onclick="change(1)">饑餓值</td><td onclick="change(2)">理智值</td><td onclick="change(3)">烹飪時長</td><td onclick="change(4)">保質期</td><th style="width:270px;">介紹</th></tr>';



   if (isEmpty(have_food) || document.getElementById("sel_all").checked==true){
        for(var i=0;i<47;i++){
            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ recipe[i].name + '.jpg" alt="'+ recipe[i].name + '">'+ recipe[i].name + '</td><td>'+ recipe[i].blood + '</td><td>'+ recipe[i].hungry + '</td><td>'+ recipe[i].san + '</td><td>'+ recipe[i].time + '</td><td>'+ recipe[i].life + '</td><td id="longtd">'+ recipe[i].intro + '</td></tr>';
        }
    }
}
