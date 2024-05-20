import { ProduitChimique } from "./produitChimique.js";
import { MaterielFragile } from "./materielFragile.js";
export class Cargaison {
    produits = [];
    distance;
    frais;
    constructor(distance, frais) {
        this.distance = distance;
        this.frais = frais;
    }
    ajouterProduit(produit) {
        if (this.produits.length >= 10) {
            console.log("La cargaison est pleine");
            return;
        }
        if (produit instanceof MaterielFragile && this instanceof CargaisonMaritime) {
            console.log("Les produits fragiles ne doivent pas être transportés par voie maritime");
            return;
        }
        if (produit instanceof ProduitChimique && !(this instanceof CargaisonMaritime)) {
            console.log("Les produits chimiques doivent être transportés par voie maritime");
            return;
        }
        this.produits.push(produit);
        console.log("Produit ajouté: ${produit.libelle} - Montant Total: ${this.sommeTotal()} ");
    }
    nombreProduits() {
        return this.produits.length;
    }
    sommeTotal() {
        return this.produits.reduce((total, produit) => total + produit.poids * this.frais, 0);
    }
    getDistance() {
        return this.distance;
    }
    setDistance(distance) {
        if (distance < 0) {
            throw new Error("La distance ne peut pas être négative");
        }
        this.distance = distance;
    }
    getFrais() {
        return this.frais;
    }
    setFrais(frais) {
        if (frais < 0) {
            throw new Error("Les frais ne peuvent pas être négatifs");
        }
        this.frais = frais;
    }
    getProduits() {
        return this.produits;
    }
}
export class CargaisonMaritime extends Cargaison {
    dureeTransit;
    constructor(distance, frais) {
        super(distance, frais);
        this.dureeTransit = 19;
    }
    calculerFrais() {
        return this.distance * this.frais;
    }
    getDureeTransit() {
        return this.dureeTransit;
    }
    setDureeTransit(dureeTransit) {
        if (dureeTransit < 0) {
            throw new Error("La durée du transit ne peut pas être négative");
        }
        this.dureeTransit = dureeTransit;
    }
}
export class CargaisonAerienne extends Cargaison {
    constructor(distance) {
        super(distance, 100);
    }
    calculerFrais() {
        return this.distance * this.frais;
    }
}
export class CargaisonRoutier extends Cargaison {
    constructor(distance) {
        super(distance, 90);
    }
    calculerFrais() {
        return this.distance * this.frais;
    }
}
