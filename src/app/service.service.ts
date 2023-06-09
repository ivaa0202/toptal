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

    return this.http.get("https://private-anon-6db71068d5-toptalui.apiary-mock.com/developers", options);

  }


  getSkills():Observable<any>{
    return this.http.get("https://private-anon-6db71068d5-toptalui.apiary-mock.com/categories/skills");
  }

  getSpecialisations():Observable<any>{
    return this.http.get("http://private-anon-6db71068d5-toptalui.apiary-mock.com/categories/specialisations");
  }


}


