import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class WhitelistService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    email : new FormControl('')
    }
  )

  createEmail(data:any){
    return new Promise<any>((resolve,reject) =>{
      this.firestore.collection("mail")
        .add(data)
        .then(res =>{}, err => reject(err));
    } );
  }
}
