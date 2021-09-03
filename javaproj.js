class Client{
    constructor(name,sname,age, number){
        this.name = name;
        this.sname = sname;
        this.age = age;
        this.number = number;
    };
    showed(){
        return String(this.name) + " " + String(this.sname) + " " + String(this.age) + " " + String(this.number);
    };
};

function GetInfo(cs){
    let nam = document.getElementById('fname').value;
    let snam = document.getElementById('sname').value;
    let clage = document.getElementById('cage').value;
    let cnum = document.getElementById('cnumber').value;
    let cliente = new Client(nam,snam,clage,cnum);
    cs.push(cliente);
};

function Show(cs){
    text = "";
    for(x of cs){
        text += x.showed() + "</br>";
        document.getElementById("text").innerHTML = text;
    };
};

var cs = [];

/*
var Today = new Date();
new Date(year,month,day,hours,minutes);

const a = new Set (["x","y", "z"])
a.add("a")
a.forEach(function(value(
    alert(value)
)))

var x = "";
console.log(value(True))
undefined
null

Number("24") -> 24
Number(False) -> 0
Number(True) -> 1
Number("1 1a") -> NaN // not a number
String()

Event
onclick = "func"
onchange
omouseover
omouseout
onkeydown //push some key
onload


window.onload = function(){

}
*/

/*
let x = new.Client(document.getElementById('name').value, array.age = document.getElementById('age').value)
document.write(first.name + " " + first.age)
function add(array){
    array.name = document.getElementById('name').value;
    array.age = document.getElementById('age').value;
};

function show(array){
    for(x = 0; x <= array.length; x++){
        document.write(x.name + " " + x.age);
    }
    document.write(array.name + " " + array.age);
};
*/