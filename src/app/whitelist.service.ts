import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WhitelistService {
private mailApi= 'https://api.trashtag.io/email'


  constructor(private http: HttpClient) { }



  async PostEmail(data:any){
    await fetch('https://api.trashtag.io/email',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({
        email:data,
      })
    })
  }

  async PostContact(data:any){
    await fetch('https://api.trashtag.io/contact',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({
        name: data.name,
        email:data.email,
        phone: data.phone,
        message: data.message
      })
    })
  }
}
