
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FollowersService {

    getFollowers(){
        return ["course1", "course2", "course3","course4"];
    }

}
