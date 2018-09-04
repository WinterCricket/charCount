 


function countLength() {


    var str = document.getElementById('words').value;


    var n = str.length;
    document.getElementById("count").innerHTML = n;
}
document.getElementById('submit').onclick=function(){
	countLength();
}


