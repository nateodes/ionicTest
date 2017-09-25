import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { NavController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  username: string = '';

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public appCtrl: App, public viewCtrl: ViewController ) {

  }



  alert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser() {

    if (/^[a-zA-z0-9]+$/.test(this.username)) {
       
      this.navCtrl.push(ChatPage);
    }
    else {
      this.alert('Error', 'Invalid Username')
    }
  }
}
