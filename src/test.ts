import { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutier } from './modele/cargaison';
import { Produit } from './modele/produit';
import { ProduitAlimentaire } from './modele/produitAlimentaire';
import { ProduitChimique } from './modele/produitChimique';
import { MaterielFragile } from './modele/materielFragile';
import { MaterielIncassable } from './modele/materielIncassable';

const cargaisons: { [key: string]: Cargaison } = {
    aerienne: new CargaisonAerienne(500),
    maritime: new CargaisonMaritime(1000, 200),
    routier: new CargaisonRoutier(800)
};

function updateDate() {
    const elementDate = document.getElementById('currentDate');
    if (elementDate) {
        elementDate.textContent = new Date().toLocaleDateString();
    }
}
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


function AfficherProduits() {
    const cargaisonProductsElement = document.getElementById('cargaisonProducts');
    if (cargaisonProductsElement) {
        cargaisonProductsElement.innerHTML = '';
        Object.values(cargaisons).forEach(cargaison => {
            const cargaisonDiv = document.createElement('div');
            cargaisonDiv.classList.add('border', 'rounded-lg', 'p-4');

            const cargaisonTitle = document.createElement('h3');
            cargaisonTitle.classList.add('text-xl', 'font-bold', 'mb-2');
            cargaisonTitle.innerText = `Cargaison ${cargaison.constructor.name}`;

            const typeCargaison = document.createElement('p');
            typeCargaison.classList.add('text-sm', 'mb-1');
            typeCargaison.innerText = `Type: ${cargaison.constructor.name}`;

            const cargaisonWeight = document.createElement('p');
            cargaisonWeight.classList.add('text-sm', 'mb-1');
            cargaisonWeight.innerText = `Distance: ${cargaison.getDistance()} km, Frais: ${cargaison.getFrais()} fcfa/kg`;

            cargaisonDiv.appendChild(cargaisonTitle);
            cargaisonDiv.appendChild(typeCargaison);
            cargaisonDiv.appendChild(cargaisonWeight);

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


updateDate();
AfficherProduits();
