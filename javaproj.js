class Client{
    constructor(fname,lname,age,email, phnumber,ncat,adr,occ){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.phnumber = phnumber;
        this.ncat = ncat;
        this.adr = adr;
        this.occ = occ;
    };
    showed(){
        return String(this.fname) + " " + String(this.lname) + " " + String(this.age) + " " + String(this.email) + " " + String(this.phnumber) + " " + String(this.ncat) + " " + String(this.adr) + " " + String(this.occ);
    };
};

function GetInfo(cs){
    let nam = document.getElementById('fname').value;
    let snam = document.getElementById('lname').value;
    let a = document.getElementById('age').value;
    let em = document.getElementById('email').value;
    let phnum = document.getElementById('phnumber').value;
    let c = document.getElementById('ncat').value;
    let adre = document.getElementById('adr').value;
    let occup = document.getElementById('occ').value;

    let ad = new Client(nam,snam,a,em,phnum,c,adre,occup);
    cs.push(ad);
};

function Show(cs){
    text = "";
    for(x of cs){
        text += x.showed() + "</br></br>";
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