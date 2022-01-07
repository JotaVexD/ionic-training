import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import {  MenuController } from '@ionic/angular';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest , HttpInterceptor , HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  userInfo:any = ''
  userRepo:any = ''
  headers:any

  constructor(
    public router: Router,
    private storage: Storage,
    public menuCtrl: MenuController,
    private http: HttpClient
    ) {    }

  username:string = ''
  photoURL:any = ''
  email:any = ''
  token:any = ''

  ngOnInit() {
    Promise.all([
      this.storage.get('name').then((result) => {
        this.username = result;
      }),
      this.storage.get('profilePicture').then((result) => {
        this.photoURL = result;
      }),
      this.storage.get('email').then((result) => {
        this.email = result;
      }),
      this.storage.get('token').then((result) => {
        this.token = result;
      }),
    ]).then(result => {
      this.searchRepo()
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  
  searchRepo(){
    this.headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.token);

    this.http.get(`https://api.github.com/user`, {headers: this.headers}).subscribe(res => {
      this.userInfo = res
      this.http.get(`https://api.github.com/users/${this.userInfo.login}/repos`,{headers: this.headers}).subscribe(result => {
        this.userRepo = result
      })
    })
     
    
  }

  

}
