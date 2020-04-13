var bac1 = document.getElementById('change1');
var bac2 = document.getElementById('change2');
bac1.addEventListener('click',function(){
    document.body.style.backgroundColor="tomato";
    document.getElementsByTagName('h1')[0].innerHTML="Background Changed To Green";
});
bac2.addEventListener('dblclick',function(){
    document.body.style.backgroundColor="green";
    document.getElementsByTagName('h1')[0].innerHTML="Background Changed To Green";
});

function chng(){
    var r = document.querySelector("#r").value;
    var g = document.querySelector("#g").value;
    var b = document.querySelector("#b").value;
        document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')';

}