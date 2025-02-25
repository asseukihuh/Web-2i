// Fonctions pour tryIt Editor
console.log("Fonctions tryIt Editor");

// Variables globales
var ref_code, ref_rendu, ref_cb_auto, ref_img_auto_maj,
    ref_popup;
var id_timeout;

// Initialise les variables globales
function init() {
  console.log("fonction init");
  ref_code = document.getElementById("code");
  ref_rendu = document.getElementById("rendu");
  ref_cb_auto =
          document.getElementById("cb_auto");
  ref_img_auto_maj =
          document.getElementById("img_auto_maj");
  ref_popup = document.getElementById("popup");
  
  // ref_cb_auto.checked = false;
  auto_maj();
}

// Met à jour le rendu en fonction du code
function maj() {
  console.log("fonction maj");
  ref_rendu.innerHTML = ref_code.value;
}

function auto_maj() {
  console.log("fonction auto_maj");
  if (ref_cb_auto.checked) {
    maj();
    ref_img_auto_maj.style.display = "inline";
    // Cacher l'image après 0,5 seconde
    setTimeout(cacher_img_auto_maj, 500);
    // Rappeler la fonction autom_aj après 1 seconde
    id_timeout = setTimeout(auto_maj, 1000);
  } else {
    clearTimeout(id_timeout);
    cacher_img_auto_maj();
  }
}

function cacher_img_auto_maj() {
  console.log("fonction cacher_img_auto_maj");
  ref_img_auto_maj.style.display = "none";
}

function arreter_auto_maj(oEvent) {
  console.log("fonction arreter_auto_maj");
  if (oEvent.key === "Escape") {
    clearTimeout(id_timeout);
    cacher_img_auto_maj();
    ref_cb_auto.checked = false;
  }
}

// Popups
function afficher_popup(oEvent) {
  console.log("fonction afficher_popup");
  //console.log(oEvent.target.htmlFor);
  console.log(oEvent.target.htmlFor === undefined);
  
  // id_html contient l'identifiant de l'élément ou l'idientifiant de l'attribut « for » (pour un label)
  var id_html = oEvent.target.id;
  if (oEvent.target.htmlFor !== undefined) {
    id_html = oEvent.target.htmlFor;
  }
  console.log(id_html);
  
  
  switch (id_html) {
    case "btn_maj":
      ref_popup.innerHTML =
        "<p>Cliquez ici pour mettre à jour le rendu</p>";
      break;
    case "cb_auto":
      ref_popup.innerHTML =
        "<p>Cochez ceci pour activer la mise à jour automatique (désactibable avec Échap)</p>";
      break;
    case "code":
      ref_popup.innerHTML =
        "<p>Tapez votre code HTML ici</p>";
      break;
    case "rendu":
      ref_popup.innerHTML =
        "<p>Le rendu du code s'affichera ici après mise à jour</p>";
      break;
    default:
      ref_popup.innerHTML = "";
  }
  
  if (ref_popup.innerHTML !== "") {
    ref_popup.style.display = "block";
    ref_popup.style.top = (oEvent.clientY + 10) + "px";
    if (oEvent.clientX + 10 + 120 > window.innerWidth) {
      ref_popup.style.left =
        Math.max(oEvent.clientX - 120 - 10, 0) + "px";
    } else {
      ref_popup.style.left = (oEvent.clientX + 10) + "px";
    }
  }
}

function cacher_popup(oEvent) {
  console.log("fonction cacher_popup");
  ref_popup.style.display = "none";
}





















