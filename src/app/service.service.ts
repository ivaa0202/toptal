import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  getDevelopers(params?:any):Observable<any>{
    let options = {};

    if(params){
      options = {
        params: new HttpParams()
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
        .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get("https://apimocktt.knezevic.dev/developers/", options);

  }


  getSkills():Observable<any>{
    return this.http.get("https://apimocktt.knezevic.dev/categories/skills/");
  }

  getSpecialisations():Observable<any>{
    return this.http.get("https://apimocktt.knezevic.dev/categories/specialisations/");
  }


}


