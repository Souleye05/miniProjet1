"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var limitationType = document.getElementById('limitation');
limitationType.addEventListener('change', function () {
    var poidsField = document.getElementById('poidsField');
    var produitField = document.getElementById('produitField');
    if (limitationType.value == 'poids') {
        poidsField.classList.remove('hidden');
        produitField.classList.add('hidden');
    }
    else if (limitationType.value == 'produit') {
        poidsField.classList.add('hidden');
        produitField.classList.remove('hidden');
    }
    else {
        poidsField.classList.add('hidden');
        produitField.classList.add('hidden');
    }
});
// Fonction pour afficher les cargaisons
function afficherCargaisons() {
    fetch('../data/cargos.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var cargaisons = data.cargaisons;
        var cargaisonList = document.getElementById('cargaison-list');
        if (!cargaisonList)
            return;
        cargaisonList.innerHTML = '';
        cargaisons.forEach(function (cargaison) {
            var row = document.createElement('tr');
            row.innerHTML = "\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\">".concat(cargaison.numero, "</td>\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\">").concat(cargaison.type, "</td>\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\">").concat(cargaison.lieu_depart, "</td>\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\">").concat(cargaison.lieu_arrivee, "</td>\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\">").concat(cargaison.date_depart, "</td>\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\">").concat(cargaison.date_arrivee, "</td>\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\">").concat(cargaison.distance, "</td>\n          <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-500\"><button class=\"bg-blue-500 text-white px-1 py-1 rounded btn-view\" type=\"button\" data-id=\"").concat(cargaison.idcargo, "\">voir</button></td>\n        ");
            cargaisonList.appendChild(row);
        });
    })
        .catch(function (error) { return console.error('Erreur:', error); });
}
document.getElementById('form_id')?.addEventListener('submit', (event) => {
    event.preventDefault();
    var typeCargaison = document.getElementById('type').value;
    var distance = parseFloat(document.getElementById('distance').value);
    var numero = "CRG" + Math.floor(Math.random() * 1000); // Générer un numéro aléatoire pour la cargaison
    var poidsCargaison = parseFloat(document.getElementById('poidsCargaison').value);
    var pointDepart = document.getElementById('depart').value;
    var pointArrive = document.getElementById('arrivee').value;
    // var prix = parseFloat(document.getElementById('prix').value);
    var dateDepart = document.getElementById('dateDepart').value;
    var dateArrivee = document.getElementById('dateArrivee').value;
    var formData = new FormData();
    formData.append('action', 'addCargaison');
    formData.append('numero', numero);
    formData.append('type', typeCargaison);
    formData.append('poids', poidsCargaison.toString());
    formData.append('date_depart', dateDepart);
    formData.append('date_arrivee', dateArrivee);
    formData.append('lieu_depart', pointDepart);
    formData.append('lieu_arrivee', pointArrive);
    formData.append('distance_km', distance.toString());

    fetch('../template/api.php', {
        method: 'POST',
        body: formData
    })
        .then(function (response) { return response.json(); })
        .then(function (result) {
        console.log(result);
        if (result.status === 'success') {
            alert(result.message);
        }
        else {
            alert('Erreur lors de l\'ajout de la cargaison');
        }
    })
        .catch(function (error) {
        console.error('Erreur:', error);
    });
});
//   document.getElementById('valider')?.addEventListener('click', () => {
//     afficherCargaisons();
//   });
afficherCargaisons();
console.log(afficherCargaisons());
