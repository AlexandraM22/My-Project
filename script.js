/*{"firstName":"Jhon","lastName":"Bilen"}*/

let x = "clients":{
    "firstName": " Jhon", "lastName":"Bilen",
    "firstName":"David", "lastName":"Janson",
    "firstName":"Alexandra", "lastName":"Matasa";
    }
const y = JSON.parse(x)
/*
for(i of y){
    text += y.showed() + "</br>";
    document.getElementById("text").innerHTML = text;
}*/
function See(y){
    do = "";
    for(x of y){
        do += x.showed() + "</br>";
        document.getElementById("do").innerHTML = do;
    };
};
y.clients[1].firstName