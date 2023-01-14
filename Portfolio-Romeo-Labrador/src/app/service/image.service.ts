import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { reference } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url:string = "";

  imagenes:string[];

  numero:number = 0;

  constructor(private storage:Storage) { this.imagenes = []; }

  public uploadImage($event:any, name:string){

    const file = $event.target.files[0];
    const imgReference = ref(this.storage, `imagen/`+name+this.numero)
    this.numero = this.numero + 1;
    uploadBytes(imgReference,file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))

  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      this.imagenes = [];
      for (let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es " + this.url)
        this.imagenes.push(this.url);
      }
      console.log("la ultima url " + this.imagenes[0])
    })
    
    .catch(error => console.log(error))
  }

}
