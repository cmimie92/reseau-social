import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IdentificationService {
    public identifiants: any ;
    public identifiantsComplets: any ;
    public proprietes: any;
    public toto: any;
    public amis: any;
    public  amiSelectionne:any;
    //en fait toute les donnée de l'ami
    public commentairesAmis:any;
   // les donnée de la personne qui recevra le message
    public profileDetailsMessage: any;
    //nouvelle photo
    public newImage:any;

    //code admin
    public passwordAdmin: string= 'carlos';
    public userAdmin: string= 'carlos';

    public tutu:boolean=false;

    constructor(private http: Http) {

    }


}
