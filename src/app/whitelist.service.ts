import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WhitelistService {



  constructor(private firestore: AngularFirestore) { }
  PostEmail(data:any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("Email")
            .add(data)
            .then(res => {}, err => reject(err));
    });
}
PostTrashBag(data:any) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("TrashBag")
          .add(data)
          .then(res => {}, err => reject(err));
  });
}

async PostContact(data:NgForm) {

  const form = await{
    'name':data.value.name,
    'email':data.value.email,
    'phone':data.value.phone,
    'message':data.value.message,
  }
  console.log(form)
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("Contact")
          .add(form)
          .then(res => {}, err => reject(err));
  });
}


  
}
