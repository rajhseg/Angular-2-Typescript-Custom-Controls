import {  Component, ViewEncapsulation,
          Input, Output, AfterViewInit, AfterViewChecked,
          OnInit, ElementRef   } from '@angular/core'

declare var jQuery:any;

@Component({
    moduleId:module.id,
    selector:'radiobutton',
    styleUrls:['editor.control.css'],
    styles:[`
    
    .commonEditor{
        font-size:20px;
        font-weight:400
     }

    .radiocontrol1:checked + .radiocontrol-label:before {
        background: #2aa1c0;
        box-shadow: inset 0px 0px 0px 4px #fff;
    }


    .radiocontrol2:checked + .radiocontrol-label:before {
        background: #2aa1c0;
    }     
    
    `],
    host:{
        '[id]':'id'
    },
    template:`
     <div [ngSwitch]="type" style="display:inline-block">
        <div *ngSwitchCase="'fancy1'">    
            <input name="{{name}}" id="{{radioId}}" [attr.value]="label" class="radiocontrol radiocontrol1"  type="radio" checked>
            <label  [attr.for]="radioId"  class="radiocontrol-label text-muted">{{label}}</label>    
        </div>
        <div *ngSwitchCase="'fancy2'">
            <input name="{{name}}" id="{{radioId}}" [attr.value]="label" class="radiocontrol radiocontrol2" type="radio" >
            <label  [attr.for]="radioId"  class="radiocontrol-label text-muted">{{label}}</label>
        </div>             
        <div *ngSwitchDefault>   
            <input name="{{name}}" [attr.id]="radioId" [attr.value]="label" type="radio" value="{{label}}">  
             <label [attr.for]="radioId" class="text-muted commonEditor">{{label}}</label>          
        </div>
    </div>
    `
})
export class RadioButton implements OnInit, AfterViewInit{

@Input('id') radioId:string;
@Input('label') label:string;
@Input('type') type:string;
@Input('color') color:string;
@Input('name') name:string;
@Input('ischeck') ischeck:boolean = true;


constructor(private ele:ElementRef){
    if(this.name===undefined || this.name ===''){
           this.name = 'editorRadiobox';
       }
}

ngOnInit(){

}

ngAfterViewInit(){
  if(this.color!==undefined && this.color!==''){
            if(this.type=='fancy1') {
                jQuery(`
                    <style>#Radiobox1:checked + .radiocontrol-label:before { 
                        background: `+this.color+`!important; 
                        box-shadow: inset 0px 0px 0px 4px #fff;
                    }</style>
                `).appendTo('head');        
            }

            if(this.type=='fancy2'){
                jQuery(`
                    <style>#Radiobox2:checked + .radiocontrol-label:before { 
                        background: `+this.color+`!important;                  
                    }</style>
                `).appendTo('head');   
            }
        }
}

checked(value){

}

}