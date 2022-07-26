import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {WhitelistService} from "../../whitelist.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(public whiteList: WhitelistService) { }

  ngOnInit(): void {
  }

  onSubmit(FormData: NgForm){
    console.log(FormData.value)
    this.whiteList.PostContact(FormData)

  }

}
