import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoiesService {

  constructor(private afs: AngularFirestore) { }

  loadData(){

    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data}

        })
      })
    )

  }

}


