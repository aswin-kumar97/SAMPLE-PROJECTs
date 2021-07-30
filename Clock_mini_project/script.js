
function dis(val){
        document.getElementById("result").value+=val;
    }
    

 function solve() {
         let x = document.getElementById("result").value;
         let y = eval(x);
         document.getElementById("result").value = y; 
     }

function clr(){
        document.getElementById("result").value = "";
     }

function restricted() {
    let x = document.getElementById("result").value;
    var exp = new RegExp(/[a-zA-Z]/g);
     var res = exp.test(x);
     if (res){
        alert('Only numbers are allowed!');
    }
}