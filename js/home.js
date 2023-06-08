var type_list = ["蔬菜", "水果", "肉", "海鮮", "蛋", "蜂蜜", "奶製品", "其他"];

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

                        if(food[j].Ingredients[k].ingre.length>0){
                            document.write("<br><b>" + food[j].type + "度: "+ food[j].Ingredients[k].weight + "</b><br>");
                            for(var l=0;l<food[j].Ingredients[k].ingre.length;l++){

                                document.write('<label><input id="' + food[j].Ingredients[k].ingre[l].name + '" name="' + type_list[i] + '" type="checkbox" onchange=\'sel_food([' + j +',' + k +',' + l +'],' + food[j].Ingredients[k].ingre[l].repeat + ')\'>'+ food[j].Ingredients[k].ingre[l].name + '</label>');
                            }
                        }

                        if(food[j].Ingredients[k].ingre_re.length>0){
                            for(var l=0;l<food[j].Ingredients[k].ingre_re.length;l++){

                                document.write('<label><input id="' + food[j].Ingredients[k].ingre_re[l].name + '_re" name="' + type_list[i] + '" type="checkbox" onchange=\'sel_food([' + j +',' + k +',' + l +'],false)\'>'+ food[j].Ingredients[k].ingre_re[l].name + '</label>');
                            }
                            
    
                        }
                    }
                }

            }else if (type_list[i] == "其他"){
                for(var k=0; k<food[j].Ingredients.length;k++){

                    if(food[j].Ingredients[k].ingre.length>0){
                        document.write("<br><b>" + food[j].type + "度: "+ food[j].Ingredients[k].weight + "</b><br>");
                        for(var l=0;l<food[j].Ingredients[k].ingre.length;l++){

                            document.write('<label><input id="' + food[j].Ingredients[k].ingre[l].name + '" name="' + type_list[i] + '" type="checkbox" onchange=\'sel_food([' + j +',' + k +',' + l +'])\'>'+ food[j].Ingredients[k].ingre[l].name + '</label>');
                        }
                        

                    }
                }
                
            }
   
        }
        document.write('</span>');
    }
}




function sel_food(n,re){

    if (re == false || re == true){
        var foodName = food[n[0]].Ingredients[n[1]].ingre_re[n[2]].name;
        var food = document.getElementById(foodName+"_re");
        var food_re = document.getElementById(foodName);
        var food_index = food[n[0]].Ingredients[n[1]].ingre_re[n[2]].repeat;
        var loop = null;
    } else {
        var foodName = food[n[0]].Ingredients[n[1]].ingre[n[2]].name;
        var food = document.getElementById(foodName);
        if (re != null){
            var food_re = document.getElementById(foodName+"_re");
            var food_index = re;
            var loop = true;
        }

    }


    if(food.checked){
        
        if(!have_food[n[0]][n[1]].includes(foodName)){
            have_food[n[0]][n[1]].push(foodName);
        }
    }else {
        if(have_food[n[0]][n[1]].includes(foodName)){
            var index = have_food[n[0]][n[1]].indexOf(foodName);
            have_food[n[0]][n[1]].splice(index,1);

        }
    }

    if (re != null && re!=true){
        food_re.checked = food.checked;
        food_re.onchange(sel_food(food_index,loop));
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

    document.getElementById("test").innerHTML = have_food[0][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[0][1];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[1][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[1][1];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[2][0];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[2][1];
    document.getElementById("test").innerHTML += "<br>";
    document.getElementById("test").innerHTML += have_food[2][2];
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
