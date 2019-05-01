import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productint } from './prodData.model';
@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }
//id:number, name:string, category:string,subcategory:string, imgurl:string,descr:string,price:string
  sendDataToDatabase(productData:any[])
  {
  return this.http.post('https://ecommerce-cfc6b.firebaseio.com/data.json',productData);
  }

  getDataFromDatabase()
  {
    return this.http.get<productint>('https://ecommerce-cfc6b.firebaseio.com/data.json');
  }

}
