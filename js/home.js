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
}



function print_type_item(){
    for(var i=0; i<getFood.length; i++){

    }
}

function print_choice(){
    
}


function sel_food(n){
    
    var foodName = food[n[0]].Ingredients[n[1]].ingre[n[2]].name;
    if(document.getElementById(foodName).checked){
        
        if(!have_food[n[0]][n[1]].includes(foodName)){
            have_food[n[0]][n[1]].push(foodName);
        }
    }else {
        if(have_food[n[0]][n[1]].includes(foodName)){
            var index = have_food[n[0]][n[1]].indexOf(n);
            have_food[n[0]][n[1]].splice(index,1);

        }
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
}

function remove_all(){
    var checkbox = document.getElementById("sel_all");
    checkbox.checked = false;
    checkbox.onchange(sel_all("sel_"));

}

function isEmpty(array) {
    return Array.isArray(array) && (array.length == 0 || array.every(isEmpty));
}