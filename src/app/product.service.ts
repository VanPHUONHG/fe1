import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IProduct from './interface/product';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url= 'http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  //call api lấy danh sách sản phẩm
  getList():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
  }

  getById(id: string) : Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }
}