import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data: any;

  constructor() { }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        currentUser: 'Julie Laou',
        currentUserPp: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
        currentUserFollowers: 2440,
        currentUserFollowing: 300,
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
