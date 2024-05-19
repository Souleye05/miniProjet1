import { ProduitAlimentaire } from "./modele/produitAlimentaire.js";
import { ProduitChimique } from "./modele/produitChimique.js";
import { MaterielFragile } from "./modele/materielFragile.js";
import { MaterielIncassable } from "./modele/materielIncassable.js";
import { CargaisonAerienne } from "./modele/cargaisonAerienne.js";
import { CargaisonMaritime } from "./modele/cargaisonMaritime.js";
import { CargaisonRoutier } from "./modele/cargaisonRoutier.js";

// instanciations des produit 
const produitAlimentaire = new ProduitAlimentaire("Pomme", 10);
const produitChimique = new ProduitChimique("Acide", 5, 3);
const produitFragile = new MaterielFragile("Vase", 2);
const produitIncassable = new MaterielIncassable("Ancre", 20);

// instanciations des cargaison
const cargaisonMaritime = new CargaisonMaritime(500,45);
const cargaisonAerienne = new CargaisonAerienne(300,21);
const cargaisonRoutier = new CargaisonRoutier(200,54);

// Ajout de produit
cargaisonMaritime.ajouterProduit(produitAlimentaire);
cargaisonMaritime.ajouterProduit(produitChimique);
cargaisonMaritime.ajouterProduit(produitFragile);
cargaisonMaritime.ajouterProduit(produitIncassable);

console.log("Maritime - nombre de produit: " + cargaisonMaritime.nombreProduits);
console.log("Maritime - frais de transport: " + cargaisonMaritime.calculerFrais());
console.log("Maritime -somme total des produit: " + cargaisonMaritime.sommeTotal);

cargaisonAerienne.ajouterProduit(produitAlimentaire);
cargaisonAerienne.ajouterProduit(produitChimique);
cargaisonAerienne.ajouterProduit(produitFragile);
cargaisonAerienne.ajouterProduit(produitIncassable);

console.log("Aerienne - nombre de produit: " + cargaisonAerienne.nombreProduits);
console.log("Aerienne - frais de transport: " + cargaisonAerienne.calculerFrais());
console.log("Aerienne -somme total des produit: " + cargaisonAerienne.sommeTotal);

cargaisonRoutier.ajouterProduit(produitAlimentaire);
cargaisonRoutier.ajouterProduit(produitChimique);
cargaisonRoutier.ajouterProduit(produitFragile);
cargaisonRoutier.ajouterProduit(produitIncassable);

console.log("Routier - nombre de produit: " + cargaisonRoutier.nombreProduits);
console.log("Routier - frais de transport: " + cargaisonRoutier.calculerFrais());
console.log("Routier -somme total des produit: " + cargaisonRoutier.sommeTotal);
