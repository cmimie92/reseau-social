import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ListeamisComponent} from './components/listeamis/listeamis.component';
import {PhotoComponent} from './components/photo/photo.component';
import {HttpModule} from '@angular/http';
import {PostsComponent} from './components/posts/posts.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RouterModule} from '@angular/router';
import {FollowersService} from './services/Followers.service';
import {FriendsComponent} from './components/friends/friends.component';

import {FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { IdentificationService } from './services/identification.service';
import { LoginComponent } from './components/Login/Login.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeamisComponent,
    PhotoComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    FriendsComponent,
    LoginComponent,
    SearchComponent,
    RegistrationComponent,
    AproposComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
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
        path: 'registration',
        component:RegistrationComponent
      },
      {
        path: 'apropos',
        component:AproposComponent
      },
      {
        path: 'messages',
        component:MessagesComponent
      },
      {
        path: 'search',
        component:SearchComponent
      },
      {
        path: '**',
        component: LoginComponent
      }
    ])
  ],
  providers: [FollowersService, IdentificationService],
  bootstrap: [AppComponent ]
})
export class AppModule {}
