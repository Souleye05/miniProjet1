/* import { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutier } from './modele/cargaison.js';
import { Produit } from './modele/produit.js';
import { ProduitAlimentaire } from './modele/produitAlimentaire.js';
import { ProduitChimique } from './modele/produitChimique.js';
import { MaterielFragile } from './modele/materielFragile.js';
import { MaterielIncassable } from './modele/materielIncassable.js';


// Instanciations de cargaison
const cargaisons: { [key: string]: Cargaison } = {
    aerienne: new CargaisonAerienne(500, '../images/location-avion-cargo-fret-national-europe-international.jpg'),
    maritime: new CargaisonMaritime(1000, 200, '../images/bateau.jpg'),
    routier: new CargaisonRoutier(800, '../images/semi-trailer-trucks-on-parking-600nw-2335174911.webp')
};
// mise à jour de la date
function updateDate() {
    const elementDate = document.getElementById('currentDate');
    if (elementDate) {
        elementDate.textContent = new Date().toLocaleDateString();
    }
}

// ajout produit à la cargaison
function addProductToCargaison(typeCargaison: string, productType: string, nomProduit: string, poidsProduit: number) {
    const selectedCargaison = cargaisons[typeCargaison];
    if (!selectedCargaison) {
        alert('Type de cargaison invalide');
        return;
    }

    let newProduct: Produit;
    switch (productType) {
        case 'alimentaire':
            newProduct = new ProduitAlimentaire(nomProduit, poidsProduit);
            break;
        case 'chimique':
            newProduct = new ProduitChimique(nomProduit, poidsProduit, 5); 
            break;
        case 'fragile':
            newProduct = new MaterielFragile(nomProduit, poidsProduit);
            break;
        case 'incassable':
            newProduct = new MaterielIncassable(nomProduit, poidsProduit);
            break;
        default:
            alert('Type de produit invalide');
            return;
    }

    if (selectedCargaison.nombreProduits() >= 10) {
        alert("La cargaison est pleine");
        return;
    }

    if (newProduct instanceof MaterielFragile && selectedCargaison instanceof CargaisonMaritime) {
        alert("Les produits fragiles ne doivent pas être transportés par voie maritime");
        return;
    }

    if (newProduct instanceof ProduitChimique && !(selectedCargaison instanceof CargaisonMaritime)) {
        alert("Les produits chimiques doivent être transportés par voie maritime");
        return;
    }

    selectedCargaison.ajouterProduit(newProduct);
    AfficherProduits();
}

// affichage de nos produits
function AfficherProduits() {
    const cargaisonProductsElement = document.getElementById('cargaisonProducts');
    if (cargaisonProductsElement) {
        cargaisonProductsElement.innerHTML = '';
        Object.values(cargaisons).forEach(cargaison => {
            const cargaisonDiv = document.createElement('div');
            cargaisonDiv.classList.add('border', 'rounded-lg', 'p-4');

            const libelle = document.createElement('h3');
            libelle.classList.add('text-xl', 'font-bold', 'mb-2');
            libelle.innerText = `${cargaison.constructor.name}`;

            const typeCargaison = document.createElement('p');
            typeCargaison.classList.add('text-sm', 'mb-1');
            typeCargaison.innerText = `Type: ${cargaison.constructor.name}`;

            const poidsCargaison = document.createElement('p');
            poidsCargaison.classList.add('text-sm', 'mb-1');
            poidsCargaison.innerText = `Distance: ${cargaison.getDistance()} km, Frais: ${cargaison.getFrais()} fcfa/kg`;

            // Ajout de l'image de la cargaison
            const imageCargaison = document.createElement('img');
            imageCargaison.src = cargaison.image;
            imageCargaison.alt = `${cargaison.constructor.name} Image`;
            imageCargaison.classList.add('w-full', 'h-auto', 'mb-2');

            cargaisonDiv.appendChild(libelle);
            cargaisonDiv.appendChild(imageCargaison);
            cargaisonDiv.appendChild(typeCargaison);
            cargaisonDiv.appendChild(poidsCargaison);

            cargaison.getProduits().forEach(produit => {
                const productHTML = `
                    <div class="border rounded-lg p-2 mt-2">
                        <h4 class="text-lg font-bold">${produit.libelle}</h4>
                        <p class="text-sm">Poids: ${produit.poids} kg</p>
                        <p class="text-sm">Frais: ${produit.calculerFrais(cargaison)} fcfa</p>
                    </div>
                `;
                cargaisonDiv.insertAdjacentHTML('beforeend', productHTML);
            });

            cargaisonProductsElement.appendChild(cargaisonDiv);
        });
    }
}


// affichage du degré de toxicité pour le type chimique
const degreToxicite = (document.getElementById('toxique') as HTMLInputElement);
document.getElementById('productType')?.addEventListener("change", function(){
    console.log("productType");
    const typeProduit = (document.getElementById('productType') as HTMLSelectElement).value;
    
    if (typeProduit == 'chimique'){
       degreToxicite?.classList.remove('hidden');
    }else{
        degreToxicite?.classList.add('hidden');
    }
});

// validation du formulaire
document.getElementById('productForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const typeCargaison = (document.getElementById('cargaisonType') as HTMLSelectElement).value;
    const typeProduit = (document.getElementById('productType') as HTMLSelectElement).value;
    const nomProduit = (document.getElementById('productName') as HTMLInputElement).value;
    const poidsProduit = parseFloat((document.getElementById('productWeight') as HTMLInputElement).value);

    if (!nomProduit || isNaN(poidsProduit)) {
        alert('Veuillez remplir tous les champs correctement');
        return;
    }

    addProductToCargaison(typeCargaison, typeProduit, nomProduit, poidsProduit);
});


// Affichage de la page Gestion des cargaison
const cargoLoyout = (document.getElementById('cargaison') as HTMLSelectElement);
const linkCargaison = (document.getElementById('linkCargo') as HTMLSelectElement).value;
document.getElementById('linkCargo')?.addEventListener("click", function(){
    cargoLoyout?.classList.remove('hidden');
    produitLoyout?.classList.add('hidden');
    
});

// Affichage des pages de la page des produits
const produitLoyout = (document.getElementById('produit') as HTMLSelectElement);
const linkProduit = (document.getElementById('linkProduit') as HTMLSelectElement).value;
document.getElementById('linkProduit')?.addEventListener("click", function(){
    produitLoyout?.classList.remove('hidden');
    cargoLoyout?.classList.add('hidden');
    
});




    
// // ajouter une nouvelle cargaison
// document.getElementById('formAddCargaison')?.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const typeCargaison = (document.getElementById('typeCargaison') as HTMLSelectElement).value;
//     const distance = parseFloat((document.getElementById('distance') as HTMLInputElement).value);
//     const frais = parseFloat((document.getElementById('frais') as HTMLInputElement).value);

//     if (!typeCargaison || isNaN(distance) || isNaN(frais) ) {
//         alert('Veuillez remplir tous les champs correctement');
//         return;
//     }

//     const newCargaison = new Cargaison(typeCargaison, distance, frais);
//     cargaisons[typeCargaison] = newCargaison;
//     AjoutCargaison();
// });

// Ajouter sur la table des cargaisons
function AjoutCargaison() {
    const cargaisonTableBody = document.getElementById('cargaisonTableBody');
    if (cargaisonTableBody) {
        Object.values(cargaisons).forEach(cargaison => {
            const row = document.createElement('tr');

            const typeCell = document.createElement('td');
            typeCell.textContent = cargaison.constructor.name;
            typeCell.classList.add('py-2', 'px-4', 'border-b', 'border-gray-200');

            const distanceCell = document.createElement('td');
            distanceCell.textContent = `${cargaison.getDistance()} km`;
            distanceCell.classList.add('py-2', 'px-4', 'border-b', 'border-gray-200');

            const fraisCell = document.createElement('td');
            fraisCell.textContent = `${cargaison.getFrais()} fcfa/kg`;
            fraisCell.classList.add('py-2', 'px-4', 'border-b', 'border-gray-200');

            const imageCell = document.createElement('td');
            const image = document.createElement('img');
            image.src = cargaison.image;
            image.alt = `${cargaison.constructor.name} Image`;
            image.classList.add('w-15', 'h-15', 'rounded-lg', 'object-cover');
            imageCell.appendChild(image);
            imageCell.classList.add('py-2', 'px-4', 'border-b', 'border-gray-200');

            row.appendChild(imageCell);
            row.appendChild(typeCell);
            row.appendChild(distanceCell);
            row.appendChild(fraisCell);

            cargaisonTableBody.appendChild(row);
        });
    }
}


// // Filtrer les cargaisons par type
// document.getElementById('filterInput')?.addEventListener('input', function() {
//     const filterValue = (document.getElementById('filterInput') as HTMLInputElement).value.toLowerCase();
//     const rows = document.querySelectorAll('#cargaisonTableBody tr');
//     rows.forEach(row => {
//         const typeCell = row.querySelector('td:first-child');
//         if (typeCell) {
//             const typeText = typeCell.textContent?.toLowerCase() || '';
//             if (typeText.includes(filterValue)) {
//                 row.style.display = '';
//             } else {
//                 row.style.display = 'none';
//             }
//         }
//     });
// });


updateDate();
AfficherProduits();
AjoutCargaison();
 */
import { Cargaison } from './modele/cargaison.js';



    const limitationType = (document.getElementById('limitation') as HTMLSelectElement);
    limitationType.addEventListener('change', () => {
    const poidsField = document.getElementById('poidsField') as HTMLElement;
    const produitField = document.getElementById('produitField') as HTMLElement;

    if (limitationType.value == 'poids') {
        poidsField.classList.remove('hidden');
        produitField.classList.add('hidden');
    } else if (limitationType.value == 'produit') {
        poidsField.classList.add('hidden');
        produitField.classList.remove('hidden');
    } else {
        poidsField.classList.add('hidden');
        produitField.classList.add('hidden');
    }
});
  
document.getElementById('valider')?.addEventListener('click', () => {
  afficherCargaisons();
});

// afficherCargaisons();

// // Fonction pour afficher les cargaisons
// function afficherCargaisons(): void {
//   fetch('../public/data/cargos.json')
//     .then(response => response.json())
//     .then(data => {
//       const cargaisons: Cargaison[] = data.cargaisons;
//       const cargaisonList = document.getElementById('cargaisonbody');
//       if (!cargaisonList) return;
//       cargaisonList.innerHTML = '';
//       cargaisons.forEach(cargaison => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.numero}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.type}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.lieu_depart}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.lieu_arrivee}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.date_depart}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.date_arrivee}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.distance}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button class="bg-blue-500 text-white px-1 py-1 rounded btn-view" type="button" data-id="${cargaison.idcargo}">voir</button></td>
//         `;
//         cargaisonList.appendChild(row);
//       });

    
//     })

// }

let currentPage = 1;
const itemsPerPage = 5; // Nombre de cargaisons par page
let cargaisons: Cargaison[] = [];

function afficherCargaisons(): void {
    fetch('../public/data/cargos.json')
      .then(response => response.json())
      .then(data => {
        cargaisons = data.cargaisons;
        displayPage(currentPage);
      });
  }
  
  function displayPage(page: number): void {
    const cargaisonList = document.getElementById('cargaisonbody');
    if (!cargaisonList) return;
    
    cargaisonList.innerHTML = '';
  
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageCargaisons = cargaisons.slice(startIndex, endIndex);
  
    pageCargaisons.forEach(cargaison => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.numero}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.type}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.lieu_depart}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.lieu_arrivee}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.date_depart}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.date_arrivee}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cargaison.distance}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button class="bg-blue-500 text-white px-1 py-1 rounded btn-view" type="button" data-id="${cargaison.idcargo}">voir</button></td>
      `;
      cargaisonList.appendChild(row);
    });
  
    updatePaginationControls();
  }

  function updatePaginationControls(): void {
    const paginationControls = document.getElementById('pagination-controls');
    if (!paginationControls) return;
    
    paginationControls.innerHTML = '';
    
    const totalPages = Math.ceil(cargaisons.length / itemsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.innerText = i.toString();
      button.classList.add('pagination-button');
      button.className = `join-item btn`;
      if (i === currentPage) {
        button.classList.add('active');
      }
      button.addEventListener('click', () => {
        currentPage = i;
        displayPage(currentPage);
      });
      paginationControls.appendChild(button);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    afficherCargaisons();
  });
    
document.getElementById('form_id')?.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const idcargo = Cargaison.length +1;
    const typeCargaison = (document.getElementById('type') as HTMLSelectElement).value;
    const numero = "CRG" + Math.floor(Math.random() * 1000);  // Générer un numéro aléatoire pour la cargaison
    const poidsCargaison = parseFloat((document.getElementById('poids') as HTMLInputElement).value);
    const pointDepart = (document.getElementById('depart') as HTMLInputElement).value;
    const pointArrive = (document.getElementById('arrivee') as HTMLInputElement).value;
    const dateDepart = (document.getElementById('dateDepart') as HTMLInputElement).value;
    const dateArrivee = (document.getElementById('dateArrivee') as HTMLInputElement).value;
    const distance = parseFloat((document.getElementById('distance') as HTMLInputElement).value);


    const cargaison = new Cargaison(
        'addCargaison',
        idcargo,
        numero,
        typeCargaison,
        poidsCargaison,
        pointDepart,
        pointArrive,
        dateDepart,
        dateArrivee,
        distance
    
      );
    
  
    
      console.log(cargaison);

      fetch('../template/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cargaison),
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.status === 'success') {
            alert(result.message);
          } else {
            alert('Erreur lors de l\'ajout de la cargaison');
          }
        })
       
    });
    
    
    
    