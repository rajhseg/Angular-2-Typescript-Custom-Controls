import { Component,ViewEncapsulation,
         Input,Output,AfterViewChecked,AfterViewInit,
         OnInit,ElementRef } from '@angular/core';

declare var jQuery:any;

@Component({
    moduleId:module.id,
    selector:'checkbox',
    styleUrls:['editor.control.css'],
    styles:[`
     .commonEditor{
        font-size:20px;
        font-weight:400
     }

    #Rcheckbox1:checked + .checkcontrol-label:before {
        background: #2aa1c0;
    }

   #Rcheckbox2:checked + .checkcontrol-label:before {
        background: #2aa1c0;
        box-shadow: inset 0px 0px 0px 4px #fff;
    }
    
   .fancycheck input:checked ~ .fancydraw {
        background: #2aa1c0;
    }

    .fancycheck:hover input:not([disabled]):checked ~ .fancydraw,
    .fancycheck input:checked:focus ~ .fancydraw {
        background: #0e647d;
    }

`],
  template:`
    <div [ngSwitch]="type" style="display:inline-block">
        <div *ngSwitchCase="'fancy1'">    
            <input name="Rcheckbox1" id="Rcheckbox1" class="checkcontrol"  type="checkbox" checked>
            <label for="Rcheckbox1" class="checkcontrol-label text-muted">{{label}}</label>    
        </div>
        <div *ngSwitchCase="'fancy2' ">
            <input name="Rcheckbox2" id="Rcheckbox2" class="checkcontrol" type="checkbox" checked>
            <label for="Rcheckbox2" class="checkcontrol-label text-muted">{{label}}</label>
        </div>
        <div *ngSwitchCase="'fancy3'">   
        <div style="display:inline-block">         
            <label class="fancycheck fancycheckbox text-muted">{{label}}
                <input type="checkbox" checked="checked"/>
                <div class="fancydraw"></div>
            </label>  
        </div>               
        </div>
        <div *ngSwitchDefault>   
            <input id="Rcheckbox4" #check class="" name="Rcheckbox4" type="checkbox" checked>
            <label for="Rcheckbox4" class="Rcheckbox-label text-muted commonEditor">{{label}}</label>
        </div>
    </div>
 `
})
export class CheckBox implements OnInit {

@Input('label') label:string;
@Input('type') type:string;

    constructor(private ele:ElementRef){

    }

    ngOnInit(){

    }

    checked(value){

    }

}