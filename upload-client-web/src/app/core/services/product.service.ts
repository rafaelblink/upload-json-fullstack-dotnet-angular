import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '@app/shared/models/product.model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) {}

   public getAll(): Observable<IProduct[]> {
     return this.http.get<IProduct[]>(`${this.endpoint}`);
   }
   public get(id: number): Observable<IProduct> {
     return this.http.get<IProduct>(`${this.endpoint}/${id}`);
   }
   public sendFile(formData: FormData): any {
    return this.http.post(`${this.endpoint}`, formData);
   }
   public update(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.endpoint}/${product.id}`, product);
   }
   public remove(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.endpoint}/${id}`);
   }
}
