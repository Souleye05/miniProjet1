import { Produit } from "./produit.js";
import { ProduitChimique } from "./produitChimique.js";
import { MaterielFragile } from "./materielFragile.js";

export abstract class Cargaison {
    protected produits: Produit[] = [];
    protected distance: number;
    protected frais: number;

    constructor (distance: number, frais: number ){
        this.distance = distance;
        this.frais = frais;
    }
// Méthode de calcul les frais
    abstract calculerFrais (): number;

// Méthode d'ajout de produits
public ajouterProduit(produit: Produit): void {
    if (this.produits.length >= 10) {
        console.log("La cargaison est pleine");
        return;
    }
    
    
    this.produits.push(produit);
    console.log("Produit ajouté: " + produit.libelle + " - Montant Total: " + this.sommeTotal());
}

// Nombre de produit
    public nombreProduits(): number{
        return this.produits.length;
    }
    //  le montant total des frais de transport
    public sommeTotal(): number{
        return this.produits.reduce((total, produit) => total + produit.poids * this.frais, 0);
    }

// getter and setter
    public getDistance(): number {
        return this.distance;
    }

    public setDistance(distance: number): void {
        if (distance < 0) {
            throw new Error("la distance ne peut pas être négative");           
        }
        this.distance = distance;
    }

    public getFrais(): number {
        return this.frais;
    }
    public setFrais(frais: number): void {
        if (frais < 0) {
            throw new Error("le frais ne peut pas être négatif");           
        }
        this.frais = frais;
    }
    public getProduits(): Produit[] {
        return this.produits;
    }
}

