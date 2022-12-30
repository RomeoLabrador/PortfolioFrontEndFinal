export class Social {
    id?:number;
    github:string;
    linkedin:string;

    constructor(github:string,linkedin:string){
         this.github = github;
         this.linkedin = linkedin;
    }
}
