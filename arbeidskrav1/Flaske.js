class Beholder {
    volum = 0;
    farge = "grønn";
    materiale = "glass";
    radius = 10;
    høyde = 20;
    aapen = false;

    fyllOpp(volum) {
        this.volum = volum;
    }

    tømUt() {
        this.volum = 0;
    }

    skurLokk() {
        this.lokk = true;
    }
}

export class Flaske extends Beholder {
    lokk = false;

    fyllOpp(volum) {
        this.volum = volum;
    }

    tømUt() {
        this.volum = 0;
    }

    skurLokk() {
        this.lokk = true;
    }
}

export class Termos extends Beholder {
    max_temp = 110;
    constructor() {
        super();
        this.materiale = "plast";
    }
}
