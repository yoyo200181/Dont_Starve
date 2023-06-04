function switch_type(n) {
    var type = ["meat", "fruit", "ve"];
    var target = document.getElementById(n);
    target.classList.toggle("hide");
    target = document.getElementById(n+"_base");
    target.classList.toggle("sel");
    for (var i of type) {
       if (i != n) {
        var show = document.getElementById(i);
        var bg = document.getElementById(i+"_base");
        show.classList.add("hide");
        bg.classList.remove("sel");
            
       } 
    }

}