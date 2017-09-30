import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  isLoggedIn:boolean = false;
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
   
  }

  ionViewDidLoad(userid) {
    console.log('ionViewDidLoad ChatPage');
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
    })
    .catch(e => {
      console.log(e);
    });
  }

  // getUserDetail(userid) {
  //   this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
  //     .then(res => {
  //       console.log(res);
  //       this.users = res;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }


}
