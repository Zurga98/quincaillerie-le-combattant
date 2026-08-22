/**
 * Quincaillerie Le Combattant
 * Affiche « ouvert / fermé » en temps réel et met en évidence la ligne du jour
 * dans le tableau des horaires. L'heure est toujours celle du Cameroun
 * (Africa/Douala), quel que soit le fuseau du visiteur.
 */

(function () {
  "use strict";

  // 0 = dimanche … 6 = samedi. null = fermé.
  var HORAIRES = {
    0: null,
    1: [7, 18],
    2: [7, 18],
    3: [7, 18],
    4: [7, 18],
    5: [7, 18],
    6: [7, 16]
  };

  var JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  var JOURS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  /** Heure courante à Douala, ou null si le fuseau n'est pas disponible. */
  function maintenantDouala() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Douala",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).formatToParts(new Date());

      var valeurs = {};
      parts.forEach(function (p) { valeurs[p.type] = p.value; });

      var jour = JOURS_EN.indexOf(valeurs.weekday);
      if (jour < 0) return null;

      return {
        jour: jour,
        minutes: parseInt(valeurs.hour, 10) * 60 + parseInt(valeurs.minute, 10)
      };
    } catch (e) {
      return null;
    }
  }

  /** Prochain jour d'ouverture après `jour`, ou null si la boutique n'ouvre jamais. */
  function prochainJourOuvert(jour) {
    for (var i = 1; i <= 7; i++) {
      var candidat = (jour + i) % 7;
      if (HORAIRES[candidat]) {
        return { jour: candidat, ouverture: HORAIRES[candidat][0], demain: i === 1 };
      }
    }
    return null;
  }

  function messageFerme(t, plage) {
    if (plage && t.minutes < plage[0] * 60) {
      return "Fermé · ouvre aujourd'hui à " + plage[0] + "h";
    }

    var suivant = prochainJourOuvert(t.jour);
    if (!suivant) return "Fermé";

    var quand = suivant.demain ? "demain" : JOURS[suivant.jour];
    return "Fermé · ouvre " + quand + " à " + suivant.ouverture + "h";
  }

  function rendre() {
    var t = maintenantDouala();
    if (!t) return; // On garde le libellé statique écrit dans le HTML.

    var ligneDuJour = document.querySelector('.horaires tr[data-jour="' + t.jour + '"]');
    if (ligneDuJour) {
      var precedente = document.querySelector('.horaires tr[data-aujourdhui="oui"]');
      if (precedente && precedente !== ligneDuJour) precedente.removeAttribute("data-aujourdhui");
      ligneDuJour.setAttribute("data-aujourdhui", "oui");
    }

    var plage = HORAIRES[t.jour];
    var ouvert = Boolean(plage) && t.minutes >= plage[0] * 60 && t.minutes < plage[1] * 60;

    var statut = document.getElementById("statut");
    var texte = document.getElementById("statut-texte");
    if (!statut || !texte) return;

    statut.setAttribute("data-ouvert", ouvert ? "oui" : "non");
    texte.textContent = ouvert
      ? "Ouvert maintenant · ferme à " + plage[1] + "h"
      : messageFerme(t, plage);
  }

  rendre();
  setInterval(rendre, 60000);
})();
