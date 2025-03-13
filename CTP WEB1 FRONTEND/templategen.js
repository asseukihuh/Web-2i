//JS SCRIPT

var var1 = document.getElementById("IdExample1");
var var2 = document.getElementById("IdExample2");
var var3 = document.getElementById("IdExample3");
var var4 = document.getElementById("IdExample4");

var form1 = document.forms["FormExample1"];
var form2 = document.forms["FormExample1"];

var exporttxt = document.getElementById('exptxt');
var addingvalue = document.getElementById('valpos');
var addingname = document.getElementById('addname');
var addingtype = document.getElementById('type');

//JSON EXAMPLE

var Jsontemp = [
    {"nom":"Auteur","type":"string","valeur":""},
    {"nom":"Date","type":"string","valeur":""},
    {"nom":"Durée (heures)","type":"int","valeur":""}
];

var addedvalue = {"nom":"","type":"","valeur":""};

function changeval(){
    if(addingtype.value != "Choix Multiple"){
        valpos.readonly = false;
    }
}

function addingtotemp(){
    addedvalue["nom"] = addingname.value;
    addedvalue["valeur"] = addingvalue.value;
    addedvalue["type"] = addingtype.value;
    Jsontemp.push(addedvalue);
}

function exporter(){
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

