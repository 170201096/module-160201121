import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Travel } from './../travel.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { 
    
  }

  getTravels() {
    return this.firestore.collection('travels').snapshotChanges();
  }
  
  createTravel(travel: Travel){
    
    return this.firestore.collection('/travels').add(
      {
      'createrEmail' : travel.createrEmail,
      'createdDate': travel.createdDate,
      'country': travel.country,
      'city': travel.city,
      'Traveldate': travel.Traveldate,
      'search': travel.search,
      'notes': travel.notes}
    );
    
  }

  updateTravel(travel: Travel){
    delete travel.id;
    this.firestore.doc('travels/' + travel.id).update(travel);
  }

  deleteTravel (travelId: string){
    this.firestore.doc('travels/' + travelId).delete();
  }
  
  filterBy(categoriName : string, categoriaToFilter: string) {
     return  this.firestore.collection('travels', ref => ref.where(categoriName,'==',categoriaToFilter)).snapshotChanges();

  }


}
