import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign } from '../campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  readonly ROOT_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllCmapaign(){
    return this.http.get(`${this.ROOT_URL}/list`)
  }

  addCampaign(data: Campaign){
    return this.http.post(`${this.ROOT_URL}/addItem` , data);
  }

  delteCampaign(id: string){
    return this.http.delete(`${this.ROOT_URL}/mainPage/list/${id}`)
  }

  editCampaign(data: Campaign, id: string){
    console.log(id)
    return this.http.patch(`${this.ROOT_URL}/mainPage/list/edit-campaign/${id}`, data)
  }
}
