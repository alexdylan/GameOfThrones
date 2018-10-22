import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StarkPage} from "../stark/stark";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stark = StarkPage;

  constructor(public navCtrl: NavController) {

  }

  clickStark(){
    this.navCtrl.push(this.stark);
  }

}
