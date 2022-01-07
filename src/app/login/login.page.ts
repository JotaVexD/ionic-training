import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { StorageService } from '../services/storage.service';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  public user = {
    name: '',
    profilePicture: '',
    email: ''
  }

  constructor(
    private fire: AngularFireAuth,
    private router: Router,
    public navCtrl: NavController,
    private storageService: StorageService,
    public menuCtrl: MenuController
    ) { 
  }

  ngOnInit() {
  }

  loginWithGit() {
      const auth = getAuth();
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;       
  
        // The signed-in user info.
        this.storageService.set('name', result.user.displayName);
        this.storageService.set("profilePicture", result.user.photoURL);
        this.storageService.set("email", result.user.email);
        this.storageService.set("token", token)
        this.router.navigate(['/home'])
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GithubAuthProvider.credentialFromError(error);
    });
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // logoutOfGit(){
  //   this.fire.signOut()
  //   .then( res => {
  //     this.router.navigate
  //   })
  // }

}
