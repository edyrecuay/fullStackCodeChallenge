import { Injectable } from '@angular/core';
import { PropertyDetail } from './property-detail.model';
import { HttpClient } from "@angular/common/http";
import { Property } from './property-old-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailService {

  formData: PropertyDetail= new PropertyDetail();
  readonly baseURL = 'http://localhost:52565/api/PropertyDetail';
  readonly baseURLRemote='https://samplerspubcontent.blob.core.windows.net/public/properties.json';
  list:PropertyDetail[];
  remotelist:any[];

  constructor(private http: HttpClient) { }

  postPropertyDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
  putPropertyDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }
  deletePropertyDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as PropertyDetail[]);
  }
  
  refreshListFromRemteAPI(){
    this.http.get(this.baseURLRemote)
    .toPromise()
    .then(res =>
     
        // @ts-ignore
        this.remotelist = res.properties as Property[]
      );

  }
  
}
