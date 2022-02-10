import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  data: any;

  constructor() { }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        notifLikeDesc: 'Maxence Bannier just liked your publication',
        notifLikeTitle: 'Like',
        notifLikeIcon: 'heart',
        notifCommentDesc: 'Yvan Brai just commented your publication',
        notifCommentTitle: 'Comment',
        notifCommentIcon: 'chatbox-ellipses',
        notifFollowDesc: 'Anna bridge just followed you',
        notifFollowTitle: 'Follow',
        notifFollowIcon: 'people'
      };
    }, 100);
  }

  ngOnInit() {
  }

}
