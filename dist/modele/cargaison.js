// import { CargaisonMaritime } from "./cargaisonMaritime.js";
export class Cargaison {
    produits = [];
    distance;
    frais;
    constructor(distance, frais) {
        this.distance = distance;
        this.frais = frais;
    }
    // Méthode d'ajout de produits
    ajouterProduit(produit) {
        if (this.produits.length >= 10) {
            console.log("La cargaison est pleine");
            return;
        }
        // if (produit instanceof MaterielFragile && this instanceof CargaisonMaritime) {
        //     console.log("Cargaison maritime ne peut pas transporter de produit fragile");
        //     return;
        // } 
        // if (produit instanceof ProduitChimique && !(this instanceof CargaisonMaritime)) {
        //     console.log("Cargaison maritime doit être transportée par voie maritime");
        //     return;
        // }
        this.produits.push(produit);
        console.log("Produit ajouté: " + produit.libelle + " - Montant Total: " + this.sommeTotal());
    }
    // Nombre de produit
    nombreProduits() {
        return this.produits.length;
    }
    //  le montant total des frais de transport
    sommeTotal() {
        return this.produits.reduce((total, produit) => total + produit.poids * this.frais, 0);
    }
    // getter and setter
    getDistance() {
        return this.distance;
    }
    setDistance(distance) {
        if (distance < 0) {
            throw new Error("la distance ne peut pas être négative");
        }
        this.distance = distance;
    }
    getFrais() {
        return this.frais;
    }
    setFrais(frais) {
        if (frais < 0) {
            throw new Error("le frais ne peut pas être négatif");
        }
        this.frais = frais;
    }
    getProduits() {
        return this.produits;
    }
}
