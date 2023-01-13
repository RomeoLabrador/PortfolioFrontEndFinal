export class Certificados {
    id?: number;
    nombreC:string;
    descripcionC:string;
    img:string;

    constructor(nombreC:string,descripcionC:string,img:string){
        this.nombreC = nombreC;
        this.descripcionC = descripcionC;
        this.img = img;
    }
}
