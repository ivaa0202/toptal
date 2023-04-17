import { Skill } from "./skills";

export class DeveloperList{

      id: number;
      first_name:string;
      last_name:string;
      city:string;
      country:string;
      category:string;
      skills:Skill[];
      generalBio:string;
      bio:string;
      photoUrl:string;


      constructor(obj?:any){
        this.id = obj && obj.id || 0;
        this.first_name = (obj && obj.first_name) || '';
        this.last_name = (obj && obj.last_name) || '';
        this.city = (obj && obj.city) || '';
        this.category = (obj && obj.category) || '';
        this.country = (obj && obj.country) || '';
        this.skills = (obj && obj.skills && obj.skills.map((elem: any) => new Skill(elem))) || [];
        this.generalBio = (obj && obj.generalBio) || '';
        this.bio = (obj && obj.bio) || '';
        this.photoUrl = (obj && obj.photoUrl) || '';
      }


}