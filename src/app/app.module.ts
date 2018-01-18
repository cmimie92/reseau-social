import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListeamisComponent} from './components/listeamis/listeamis.component';
import {PhotoComponent} from './components/photo/photo.component';
import {HttpModule} from '@angular/http';
import {AjoutAmiComponent} from './components/ajout-ami/ajout-ami.component';
import {PostsComponent} from './components/posts/posts.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RouterModule} from '@angular/router';
import {FollowersComponent} from './components/followers/followers.component';
import {FollowersService} from './services/Followers.service';
import {FriendsComponent} from './components/friends/friends.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListeamisComponent,
    PhotoComponent,
    AjoutAmiComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent,
    FollowersComponent,
    FriendsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'friends',
        component: FriendsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**',
        component: LoginComponent
      }
    ])
  ],
  providers: [FollowersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
