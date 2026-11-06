function love(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value
    var res = Math.floor(Math.random()*100);
    var par = document.getElementById("par");
    par.innerHTML=
    "the love b/w "+name1+" "+name2+" "+res +"%";

}