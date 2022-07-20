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

  async createEmail(data:any){


    await fetch('https://api.trashtag.io/email',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({
        email:data,
      })
    })

    return new Promise<any>((resolve,reject) =>{
      this.firestore.collection("mail")
        .add(data)
        .then(res =>{}, err => reject(err));
    } );
  }
}
