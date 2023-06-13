var type_list = ["蔬菜", "水果", "肉", "海鮮", "蛋", "蜂蜜 ", "奶製品", "其他"];
var need_chef = null;
var change_now = true;
var change_now_all=true;
var not_require_all=false;

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
    if(change_now){
        document.getElementById("sure").click();
    }
    
}

function sel_all(n){
    if(n=="sel_"){
        change_now_all=false;
    }
    if(change_now){
        change_now = false;
    }
    var checkboxes = document.getElementsByName(n);
    var result = document.getElementById(n+"all")
    for (var checkbox of checkboxes){
        checkbox.checked = result.checked;
        checkbox.onchange();
    }
    document.getElementById("sure").click();
    if(n=="sel_"){
        change_now_all=true;
    }
    if(change_now_all){
        change_now = true;
    }
    
}

function print_food(){
    document.getElementById("test").innerHTML = have_food[0][0];
    document.getElementById("test").innerHTML += "<br>";
}

function remove_all(){
    var checkbox = document.getElementById("sel_all");
    checkbox.checked = false;
    checkbox.onchange(sel_all("sel_"));
    

}

function isEmpty(array) {
    return Array.isArray(array) && (array.length == 0 || array.every(isEmpty));
}

function check_includeFood(n, must){
    if(must){
        var re_food = food[n[0]].Ingredients[n[1]].ingre[n[2]].name;
        if(!have_food[n[0]][n[1]].includes(re_food)){
            if(n.length==3 || n[3]==null){
                return false;
            }else{
                for(var i=0;i<n[3].length;i++){
                    if(check_includeFood(n[3][i],true)){
                        return true;
                    }
                }
                return false;
            }
        }

        return true;

    }else{
        var can=true;
        if(isEmpty(have_food[n[0]])){
            can=false;
        }else{
            if(n[1] != null){
                if(isEmpty(have_food[n[0]][n[1]])){
                    can=false;
                }
            }
        }

        if(!can){
            if(n.length==2 || n[2]==null){
                return false;
            }else{
                return check_includeFood(n[2],false);
            }
        }
        return true;

    }
    
}

function check_recipe(n){
    if(n.re_ing.length>0){
        for(var i=0;i<n.re_ing.length;i++){
            if(!check_includeFood(n.re_ing[i],true)){
                return false;
            }
        }
    }

    if(n.other_ing.length>0){
        for(var i=0;i<n.other_ing.length;i++){
            if(!check_includeFood(n.other_ing[i],false)){
                return false;
            }
        }
    }
    

    return true;
}

function print_recipe(list){
    if(list!=recipe_hungry){
        recipe_hungry = hg.sort(function (a, b) {return a.hungry > b.hungry ? 1 : -1;});
    }
    if(list!=recipe_blood){
        recipe_blood = bl.sort(function (a, b) {return a.blood > b.blood ? 1 : -1;});
    }
    if(list!=recipe_san){
        recipe_san = sa.sort(function (a, b) {return a.san > b.san ? 1 : -1;});
    }
    if(list!=recipe_time){
        recipe_time = ti.sort(function (a, b) {return a.time > b.time ? 1 : -1;});
    }
    if(list!=recipe_life){
        recipe_life = li.sort(function (a, b) {return a.life > b.life ? 1 : -1;});
    }
    if(list == null){
        list = recipe_hungry;
    }
    list = list.reverse();    

    document.getElementById("t").innerHTML = '<tr style="font-weight: bold;"> <td>名稱</td><td onclick="print_recipe(recipe_blood)">生命值</td><td onclick="print_recipe(recipe_hungry)">饑餓值</td><td onclick="print_recipe(recipe_san);">理智值</td><td onclick="print_recipe(recipe_time);">烹飪時長</td><td onclick="print_recipe(recipe_life);">保質期</td><th style="width:270px;">介紹</th></tr>';
 

   if (isEmpty(have_food) || document.getElementById("sel_all").checked==true){
        if(need_chef == null){
            for(var i=0;i<list.length;i++){
                if(list[i].chef){
                    document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br><font id="chefOnly">'+ list[i].name + '</font></td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                }else{
                    document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br>'+ list[i].name + '</td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                }
            }
        }else if (need_chef){
            for(var i=0;i<list.length;i++){
                if(list[i].chef){
                    document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br><font id="chefOnly">'+ list[i].name + '</font></td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                }
            }
        }else{
            for(var i=0;i<list.length;i++){
                if(!list[i].chef){
                    document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br>'+ list[i].name + '</td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                }
            }
        }       
    }else{
        if(!not_require_all){

            if(need_chef == null){
                for(var i=0;i<list.length;i++){
                    if(check_recipe(list[i])){
                        if(list[i].chef){
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br><font id="chefOnly">'+ list[i].name + '</font></td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }else{
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br>'+ list[i].name + '</td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }
                    }
                }
            }else if (need_chef){
                for(var i=0;i<list.length;i++){
                    if(check_recipe(list[i])){
                        if(list[i].chef){
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br><font id="chefOnly">'+ list[i].name + '</font></td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }
                    }
                }
            }else{
                for(var i=0;i<list.length;i++){
                    if(check_recipe(list[i])){
                        if(!list[i].chef){
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br>'+ list[i].name + '</td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }
                    }
                }
            }

        }else{

            if(need_chef == null){
                for(var i=0;i<list.length;i++){
                    if(check_recipe_not_all(list[i])){
                        if(list[i].chef){
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br><font id="chefOnly">'+ list[i].name + '</font></td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }else{
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br>'+ list[i].name + '</td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }
                    }
                }
            }else if (need_chef){
                for(var i=0;i<list.length;i++){
                    if(check_recipe_not_all(list[i])){
                        if(list[i].chef){
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br><font id="chefOnly">'+ list[i].name + '</font></td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }
                    }
                }
            }else{
                for(var i=0;i<list.length;i++){
                    if(check_recipe_not_all(list[i])){
                        if(!list[i].chef){
                            document.getElementById("t").innerHTML += '<tr> <td><img src="images/recipe/'+ list[i].name + '.jpg" alt="'+ list[i].name + '"><br>'+ list[i].name + '</td><td>'+ list[i].blood + '</td><td>'+ list[i].hungry + '</td><td>'+ list[i].san + '</td><td>'+ list[i].time + '</td><td>'+ list[i].life + '天</td><td id="longtd">'+ list[i].intro + '</td></tr>';
                        }
                    }
                }
            }
        }
         

    }

}

function change_chef(n){
    need_chef = n;
    document.getElementById("sure").click();
}

function not_re_all(){
    not_require_all = document.getElementById("require_all").checked;
    document.getElementById("sure").click();
}

function check_recipe_not_all(n){
    if(n.re_ing.length>0){
        for(var i=0;i<n.re_ing.length;i++){
            if(check_includeFood(n.re_ing[i],true)){
                return true;
            }
        }
    }
  

    return false;

}
