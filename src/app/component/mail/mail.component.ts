import { Component, OnInit } from '@angular/core';
import {WhitelistService} from "../../whitelist.service";
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  constructor(private whiteList: WhitelistService) { }

  ngOnInit(): void{

  }
  onSubmit(FormData: NgForm){
    console.log(FormData.value)
    this.whiteList.PostEmail(FormData.value)

  }

}
