//JS SCRIPT

var var1 = document.getElementById("IdExample1");
var var2 = document.getElementById("IdExample2");
var var3 = document.getElementById("IdExample3");
var var4 = document.getElementById("IdExample4");

var form1 = document.forms["FormExample1"];
var form2 = document.forms["FormExample1"];

var exporttxt = document.getElementById('exptxt');
var importtxt = document.getElementById('imptxt');
var divminutes = document.getElementById('ajoutermin');


//JSON EXAMPLE

var Jsontemp = [];
let k = 0;

function afficherInfo(){
    divminutes.innerHTML+="<div id='informationdiv'></div>";
    var infodiv = document.getElementById('informationdiv');
    infodiv.innerHTML+="<div><label for='Auteur'>Auteur :</label><input name='Auteur' id='at' type='text'"+JSON.stringify(Jsontemp[0]["valeur"])+"></div>";
    infodiv.innerHTML+="<div><label for='Date'>Date :</label><input name='Date' id='dt' type='text'value='"+Jsontemp[1]["valeur"]+"'></div>></div>";
    infodiv.innerHTML+="<div><label for='Durée'>Durée (heures) :</label><input name='Durée' id='dr'type='text' value='"+Jsontemp[2]["valeur"]+"'></div>";
    for(let i = 3; i < Jsontemp.length ; i++){
        //PAS ASSEZ DE TEMPS POUR FAIRE LES CHOIX MULTIPLES CAR J'AI PAS TROUVE LA METHODE
        if(Jsontemp[i]["type"] == "Choix Multiple"){
            let tempvar = JSON.stringify(Jsontemp[i]["valeur"]);
            tempvar = tempvar.replaceAll(",", "','");
            tempvar = tempvar.replaceAll('"', "'");
            //let tempvar2 = [tempvar];
            let j = 0
            while(tempvar.slice(j, tempvar.indexOf(',')) != ""){
                console.log(tempvar.slice(0, tempvar.indexOf(',')));
                j++;
            }
        }else{
            console.log(JSON.stringify(Jsontemp[i]["valeur"]));
            infodiv.innerHTML+="<div><label for='"+JSON.stringify(Jsontemp[i]["nom"])+"'>"+
            JSON.stringify(Jsontemp[i]["nom"])+" :</label><input name='Auteur' type='text'></div>";
        }
    }
    k++;
}

function importingtext(){
    Jsontemp = JSON.parse(importtxt.value);
    afficherInfo();
}

function adddiv(){
    divminutes.innerHTML+="<div id='informationdiv'></div>";
}

function exporter(){
    Jsontemp[0]["valeur"]=document.getElementById('at').value;
    Jsontemp[1]["valeur"]=document.getElementById('dt').value;
    Jsontemp[2]["valeur"]=document.getElementById('dr').value;
    exporttxt.value = JSON.stringify(Jsontemp);
}

console.log(Jsontemp);

//Jsontemp.push({"nom":"Date","valeur":""});

var JsonExample = [
    {
        "nom": "Burpees explosifs",
        "description": "Commencez en position debout, faites une flexion, puis sautez en l'air en tendant vos bras au-dessus de votre t&ecirc;te.",
        "difficulte": 4
    },
    {
        "nom": "Mountain Climbers",
        "description": "En position de planche, alternez rapidement le repli des genoux vers la poitrine comme si vous escaladiez une montagne.",
        "difficulte": 3
    },
    {
        "nom": "Sauts group&eacute;s",
        "description": "En position accroupie, sautez en l'air en repliant vos genoux vers la poitrine, puis atterrissez doucement.",
        "difficulte": 4
    }
];

//FUNCTIONS

function main(){
    return 0;
}

function main2(){
    return 0;
}

function main3(){
    return 0;
}

function main4(){
    return 0;
}

// STRUCTURES DE BOUCLES ETC

//for(let i = 0; i < ?? ; i++){
    //faire jsp
//}

//if (Condition){
    //faire jsp
//} else {
    //faire jsp
//}

