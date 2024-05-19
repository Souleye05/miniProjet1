import { Cargaison } from "./cargaison.js";
export class CargaisonAerienne extends Cargaison {
    constructor(distance, frais) {
        super(distance, 100);
    }
    calculerFrais() {
        return this.distance * this.frais;
    }
}
