console.log("Chargement de la librairie chrono.js");

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
