import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  data: any;

  constructor() { }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        postUser: 'Lopez Anthony',
        postImg: 'https://i.pinimg.com/originals/18/7c/8f/187c8f58a77b83c77f0340f57c56dfcf.png',
        postDesc: 'Keep close to Nature\'s heart... and break clear away',
        nbComments: 32,
        nbLikes: 530
      };
    }, 100);
  }

  ngOnInit() {
  }

}
