import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  data: any;

  constructor() { }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        userList: ['Maxence Bannier','Yvan Brai','Charly Escalona', 'Christophe Salou'],
      };
    }, 100);
  }

  ngOnInit() {
  }


}
