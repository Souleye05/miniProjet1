import { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutier } from './modele/cargaison.js';
import { ProduitAlimentaire } from './modele/produitAlimentaire.js';
import { ProduitChimique } from './modele/produitChimique.js';
import { MaterielFragile } from './modele/materielFragile.js';
import { MaterielIncassable } from './modele/materielIncassable.js';
class CargaisonWithImage extends Cargaison {
    image;
    constructor(distance, frais, image) {
        super(distance, frais);
        this.image = image;
    }
}
// Instanciations de cargaison
const cargaisons = {
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
function addProductToCargaison(typeCargaison, productType, nomProduit, poidsProduit) {
    const selectedCargaison = cargaisons[typeCargaison];
    if (!selectedCargaison) {
        alert('Type de cargaison invalide');
        return;
    }
    let newProduct;
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
const degreToxicite = document.getElementById('toxique');
document.getElementById('productType')?.addEventListener("change", function () {
    console.log("productType");
    const typeProduit = document.getElementById('productType').value;
    if (typeProduit == 'chimique') {
        degreToxicite?.classList.remove('hidden');
    }
    else {
        degreToxicite?.classList.add('hidden');
    }
});
// validation du formulaire
document.getElementById('productForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const typeCargaison = document.getElementById('cargaisonType').value;
    const typeProduit = document.getElementById('productType').value;
    const nomProduit = document.getElementById('productName').value;
    const poidsProduit = parseFloat(document.getElementById('productWeight').value);
    if (!nomProduit || isNaN(poidsProduit)) {
        alert('Veuillez remplir tous les champs correctement');
        return;
    }
    addProductToCargaison(typeCargaison, typeProduit, nomProduit, poidsProduit);
});
// Affichage de la page Gestion des cargaison
const cargoLoyout = document.getElementById('cargaison');
const linkCargaison = document.getElementById('linkCargo').value;
document.getElementById('linkCargo')?.addEventListener("click", function () {
    cargoLoyout?.classList.remove('hidden');
    produitLoyout?.classList.add('hidden');
});
// Affichage des pages de la page des produits
const produitLoyout = document.getElementById('produit');
const linkProduit = document.getElementById('linkProduit').value;
document.getElementById('linkProduit')?.addEventListener("click", function () {
    produitLoyout?.classList.remove('hidden');
    cargoLoyout?.classList.add('hidden');
});
// ajouter une nouvelle cargaison
document.getElementById('formAddCargaison')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const typeCargaison = document.getElementById('typeCargaison').value;
    const distance = parseFloat(document.getElementById('distance').value);
    const frais = parseFloat(document.getElementById('frais').value);
    const image = document.getElementById('image').value;
    if (!typeCargaison || isNaN(distance) || isNaN(frais) || !image) {
        alert('Veuillez remplir tous les champs correctement');
        return;
    }
    const newCargaison = new CargaisonWithImage(distance, frais, image);
    cargaisons[typeCargaison] = newCargaison;
    AjoutCargaison();
});
// Mettre à jour la table des cargaisons
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
            image.classList.add('w-15', 'h-15', 'object-cover');
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
// Filtrer les cargaisons par type
document.getElementById('filterInput')?.addEventListener('input', function () {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();
    const rows = document.querySelectorAll('#cargaisonTableBody tr');
    rows.forEach(row => {
        const typeCell = row.querySelector('td:first-child');
        if (typeCell) {
            const typeText = typeCell.textContent?.toLowerCase() || '';
            if (typeText.includes(filterValue)) {
                row.style.display = '';
            }
            else {
                row.style.display = 'none';
            }
        }
    });
});
updateDate();
AfficherProduits();
AjoutCargaison();
