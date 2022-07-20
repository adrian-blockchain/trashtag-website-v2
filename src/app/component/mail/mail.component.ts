import { Component, OnInit } from '@angular/core';
import {WhitelistService} from "../../whitelist.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(public whitelistService: WhitelistService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let data = this.whitelistService.form.value;
    console.log("data from onSubmit", data)

    this.whitelistService.createEmail(data)
      .then(res =>{
        console.log(res)
      })
  }

}
