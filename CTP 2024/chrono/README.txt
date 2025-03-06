Bibliothèque de timers/chronomètres

Cette bilbiothèque permet d'intégrer des timers dans une page web.
Un timer permet de décompter un nombre de secondes donné en démarrant à une
  certaine valeur et en descendant jusqu'à zéro (0).
Un timer se déclare à l'intérieur d'une balise <div> vide choisie, et un
  bouton marche/arrêt est aussi automatiquement ajouté.

Contenu :
  - chrono.js : la bilbiothèque à importer (sans modification)
  - chrono.css : des styles CSS à importer ou ajouter à votre feuille de style
  - test-chrono.html : un exemple d'utilisation

Utilisation :
  - Importer le fichier chrono.js dans votre page web à l'aide d'une 
      balise <script>.
  - Ajouter les styles CSS de chrono.css à votre popre feuille de style CSS,
      ou intégrer le fichier chrono.css à votre page avec une balise <link>.
  - Ajouter une <div> vide avec un identifiant donné à votre page.
  - Dans une autre balise <script> de votre page, il est possible de :
    * Déclarer un timer monTimer (en tant que variable globale) :
        var monTimer = newTimer();
    * Assigner ce timer à la <div> :
        monTimer.bind("identifiant_de_la_div");
    * Assigner la valeur X au timer :
        monTimer.reset(X);
    * Définir une fonction qui sera exécutée lorsque le timer se termine (0) :
        monTimer.elapsed = function () { /* Corps de la fonction */ };
    * Démarrer ou arrêter le timer :
        monTimer.startstop();

