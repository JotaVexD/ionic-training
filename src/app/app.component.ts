import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  constructor(public router: Router,private storage: Storage){ 
    this.storage.create();
  }

  username:string = ''
  photoURL:any = ''
  email:any = ''

  ngOnInit() {
    this.storage.get('name').then((result) => {
      this.username = result;
    });
    this.storage.get('profilePicture').then((result) => {
      this.photoURL = result;
    });
    this.storage.get('email').then((result) => {
      this.email = result;
    });
  }

  activePageTitle = 'home';

  Pages = [
    {
      title: 'Repositorios',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'Profile',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'person'
    },

  ];

}