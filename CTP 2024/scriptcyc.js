console.log("Chargement de la librairie chrono.js");
var cycle = [];
var tab_dureeexo = [];
var tab_dureerepoex = [];

var textcycle;
function importcyc(){
    //console.log("imporation du cycle")
    textcycle = document.getElementById("cyclejson").value;
    cycle[0]=JSON.parse(textcycle);
    tab_dureeexo.length = cycle[0]["nbRepetitions"];
    for(let i = 0; i<cycle[0]["nbRepetitions"];i++)
    {
        //console.log(cycle[0]["dureeExercice"]);
        tab_dureeexo[i]=cycle[0]["dureeExercice"];
    }

    for(let i = 0; i<cycle[0]["nbRepetitions"]-1;i++)
    {
        tab_dureerepoex[i]=cycle[0]["reposEntreExercices"];
    }

    console.log(tab_dureerepoex);

    console.log(tab_dureeexo);
    var timer1 = newTimer();

    let i = 0;
    let j = 0;

    timer1.bind("timer");  // Lie un timer à la div d'identifiant mytimer
    timer1.reset(tab_dureeexo[i]);        // Durée initiale de ce timer
    timer1.startstop();
    timer1.elapsed = function () {
        timer1.reset(tab_dureerepoex[i]);
        timer1.startstop();
        if(i < tab_dureeexo.length-1){
            timer1.reset(tab_dureeexo[i]);
            timer1.startstop();
            i++;
        }
    }
}

function newTimer() {
	var counter=0; 
	var refNode = null; 
	var refCounter = null; 
	var refPlayPause = null; 
	var timeout = null; 
	var that = {
		bind : function(refOrId){
			// Cette méthode est appelée pour insérer un timer dans un div 
			// refOrId ? 
			if (typeof refOrId == "string") refOrId = document.getElementById(refOrId);
			refNode = refOrId;
			console.log("association du timer au noeud " + refNode.tagName + " (id:" + refNode.id+")");		
			refNode.className += "cadre";
			refNode.innerHTML = '<div class="timer"></div>'; 
			refNode.innerHTML += '<input class="playpause" type="button" value=">" />';
			refCounter = refNode.children[0]; 
			refPlayPause = refNode.children[1]; 
			refPlayPause.addEventListener("click",that.startstop);
			refPlayPause.className = "playpause";  
		},
		
		reset : function (t) {
			// Cette méthode sélectionne la valeur du compte à rebours à afficher
			counter = t; refCounter.innerHTML = counter;
			console.log("initialisation du timer a " + counter +" s");
		},
		
		startstop : function(){
			// Cette méthode démarre ou relance le compte à rebours 
			if (timeout != null) {
				console.log("arret du timer");
				clearInterval(timeout);
				timeout = null; 
				refPlayPause.value = ">"; 
			} else {
				timeout = window.setInterval(that.run,1000);
				console.log("(re)demarrage du timer"); 
				refPlayPause.value = "||";
			}
		},
		
		run : function() {
			// Cette méthode est appelée toutes les secondes pour décrémenter le compteur 
			if (counter > 0) {
				counter--; 
				refCounter.innerHTML = counter;
			}
			
			if (counter == 0) {
				that.elapsed(); 
				that.startstop(); 
			}
		}, 
		
		elapsed : function() {
			// Cette méthode est appelée à chaque fin de compte à rebours
			console.log("fonction elapsed !"); 
		}
		
	}
	
	return that; 
}


