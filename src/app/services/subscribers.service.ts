import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubs(subData:any){
    this.afs.collection('subscribers').add(subData).then(()=>{
      console.log('Subscriber Saved Successfully');
    })


  }

  checkSubs(subEmail:any){
    return this.afs.collection('subsribers',ref=>ref.where('email','==',subEmail)).get()
  }
}
