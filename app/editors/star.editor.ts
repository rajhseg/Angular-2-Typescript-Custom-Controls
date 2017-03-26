import { Component, ViewEncapsulation, Input, Output,
         EventEmitter, ElementRef, OnInit, OnChanges,
         DoCheck, Renderer, AfterViewInit, AfterViewChecked,
         AfterContentInit, ViewChildren, ContentChildren,
         ChangeDetectionStrategy, HostBinding
    } from '@angular/core'

export class star{
    public filled:boolean;
}

@Component({
    moduleId:module.id,
    selector:'star-rating',
    styleUrls:['editor.control.css'],
    styles:[`
        .rating {
        unicode-bidi: bidi-override;              
        text-align: start; 
        display:inline-block;  
        direction:rtl;      
    }    
    .star{      
        color: gold;    
    }
    .rating > span {
        display: inline-block;
        position: relative;
        width: 0.9em;
        font-size:30px;
    }
    .rating:hover{
        cursor:pointer;
    }
    .rating > span:hover,
    .rating > span:hover ~ span {
        color: transparent;
    }
    .rating > span:hover:before,
    .rating > span:hover ~ span:before {
        content: "\\2605";
        position: absolute;
        left: 0;
        color: gold;
    }

    `],
    changeDetection:ChangeDetectionStrategy.OnPush,            
    host:{

    },
    template:`    
    <div class="rating">
    <span   *ngFor="let star of stars; let i=index" 
            [class.star]="star.filled" 
            (click)="toggle(i)">
        <span   #starfilled (mouseenter)="OnMouseenter($event)" 
                [style.color]="fillcolor" *ngIf="star.filled">
                    &#9733;
        </span>
        <span   (mouseenter)="OnMouseenter($event)" 
                *ngIf="!star.filled">
                    &#9734;
        </span>        
    </span>
    </div>
`
})
export class StarRating implements OnInit , 
                                OnChanges,
                                AfterViewInit,
                                AfterContentInit,
                                AfterViewChecked {

        @Input() ratingvalue:number;
        @Output() ratingvalueChange:EventEmitter<number> = new EventEmitter<number>();

        @Output() OnRatingChanged = new EventEmitter();

        @Input() max:number;

        @Input() readonly:boolean;

        @Input() starsize:number;

        @Input() color:string;

        @Input() fillcolor:string;

        @Output() OnMouseOver = new EventEmitter();

        @ViewChildren('starfilled') starChildren;

        public stars:star[];
        private ele:ElementRef;
        private render:Renderer;
        private changeElements:HTMLElement[]

        constructor(e1:ElementRef,render:Renderer){
            this.ele = e1;
            this.render = render;  
            this.fillcolor = "gold";    
        }

        public ngOnInit(){
        
        }

        public ngOnChanges(){ 
            if(this.readonly==undefined){
                this.readonly = false;
            }     
            if(typeof(this.readonly)=="string"){    
                this.readonly = (String(this.readonly)=="true");    
            }
            this.updateStars();
        }

        public ngAfterViewInit(){            
            this.starChildren.changes.subscribe(changes=>
            {   
                this.changeElements = changes._results.map(
                (eleref)=> eleref.nativeElement
                );

                this.OnRatingChanged.next(
                {  
                    ratingvalue:this.ratingvalue,
                    max:this.max,
                    Changedelements:this.changeElements
                });           
            });  
        }

        public OnMouseenter(evt){  
         this.OnMouseOver.next(evt);
        }

        public ngAfterViewChecked(){
            
        }

        public ngAfterContentInit(){
        
        }

        private updateStars(){
            this.stars = [];    
            var j = this.max - this.ratingvalue;

            for (var i = 1; i <= this.max; i++) {                                  
                    this.stars.push({ filled: i > j });         
                }
            this.render.setElementStyle(this.ele.nativeElement,'color',this.color);
        }

        private toggle(index){     
            if(this.readonly===false){
                this.ratingvalue =  (this.max - index);
                this.updateStars(); 
                this.ratingvalueChange.emit(this.ratingvalue);      
            }
        }

}