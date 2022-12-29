export class Certificados {
    id?: number;
    nombreC:string;
    descripcionC:string;

    constructor(nombreC:string,descripcionC:string){
        this.nombreC = nombreC;
        this.descripcionC = descripcionC;
    }
}
