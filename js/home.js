

function changemovie(){
    var mysel = document.getElementById("selcinema").value;
    var downlist=document.getElementById('down');
    downlist.innerHTML=""
    for(var i=0 ; i<cinemas.length; i++){
        if(cinemas[i].branchName==mysel){

            for(var j=0 ; j<cinemas[i].movies.length; j++){
                num=cinemas[i].movies[j].id
                downlist.innerHTML+="<br><br><p align=left><img src='"+recipe[num-1].thumbnail+"' alt='"+recipe[num-1].name+"'><form action='ticket.html'><input type='text' id='in"+j+"' Value="+recipe[num-1].name+" disabled><br><select id='sel"+j+"'></select><input type='submit' value='buy ticket' id='btn"+j+"' onclick='senddata("+j+")'></form></p><br><br>";
                for(var k=0; k<cinemas[i].movies[j].shows.length; k++){
                    document.getElementById('sel'+j).innerHTML+="<option value='"+cinemas[i].movies[j].shows[k].index+"'>"+cinemas[i].movies[j].shows[k].datetime+" - House"+cinemas[i].movies[j].shows[k].house+"</option>";
                }

            }
        }
    }

}


function cinemalist(){
        for(var i=0 ; i<cinemas.length; i++){
                document.write("<option value='" + cinemas[i].branchName + "'>" + cinemas[i].branchName + "</option>")
            }
        }


var data={cinema:"" ,name:"", date:"",house:""}

function senddata(n){
    localStorage.clear();
    window.location.href = "ticket.html";
    var a=document.getElementById("selcinema").selectedIndex;
    var c=document.getElementById("sel"+n).selectedIndex;
    var ids=cinemas[a].movies[n].id
    var choc=document.getElementById("selcinema").value;
    var choname=movie[ids-1].name;
    var chodate=cinemas[a].movies[n].shows[c].datetime;
    var chohou=cinemas[a].movies[n].shows[c].house;
    localStorage.setItem("Cinema",choc);
    localStorage.setItem("name", choname);
    localStorage.setItem("date", chodate);
    localStorage.setItem("house",chohou);


}

function showdata(){
    var place=localStorage.getItem("Cinema");
    var watch=localStorage.getItem("name");
    var time=localStorage.getItem("date");
    var hou=localStorage.getItem("house");

    var infoc=document.getElementById("infocinema");
    var infon=document.getElementById("infomovie");
    var infodt=document.getElementById("infodatetime");
    var infoh=document.getElementById("infohouse");
    infoc.value=place;
    infon.value=watch;
    infodt.value=time;
    infoh.value=hou;

}