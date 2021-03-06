import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../IProducts';

@Injectable({ 
  providedIn: 'root'
})
export class ProductapiService {
  private base_url = "http://localhost:3000";
  http_option = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient:HttpClient) { }

  /* getProducts():Observable<IProducts []>{
    return this.httpClient.get<IProducts[]>(this.base_url+"/app/products");
  } */
  getProducts():Observable<any>{
    return this.httpClient.get(this.base_url+"/app/products");
  }

  /*create(data:IProducts): Observable<IProducts>{
      return this.httpClient.post<IProducts>(this.base_url+"/app/products/add",data,this.http_option);
  } */
  create(data:any):Observable<any>{
    return this.httpClient.post(this.base_url+"/app/products",data,this.http_option);
  }

  get(id:number): Observable<any> {
    return this.httpClient.get(this.base_url+"/app/products/"+id);
  }

  update(data:any):Observable<any>{
    return this.httpClient.put(this.base_url+"/app/products/",data);
  }

  delete(id:number):Observable<any>{
    return this.httpClient.delete(this.base_url+"/app/products/"+id);
    //return this.httpClient.delete(`${this.base_url+"/api/products/"}${id}`);
  }
}
