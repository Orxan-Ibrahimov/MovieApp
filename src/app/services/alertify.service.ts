import { Injectable } from '@angular/core';

declare let alertify:any;


@Injectable()
export class AlertifyService {
    constructor(){}

    success(message:string){
        alertify.success(message);
    }

    danger(message:string){
        alertify.error(message);
    }
}
