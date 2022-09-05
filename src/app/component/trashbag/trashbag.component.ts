import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import {WhitelistService} from "../../whitelist.service";



@Component({
  selector: 'app-trashbag',
  templateUrl: './trashbag.component.html',
  styleUrls: ['./trashbag.component.css']
})
export class TrashbagComponent implements OnInit {

  constructor(private whiteList: WhitelistService) { }
  ngOnInit(): void {
  }
  onSubmit(FormData : NgForm) {
    console.log(FormData.value)
    this.whiteList.PostTrashBag(FormData.value)

  }


}
