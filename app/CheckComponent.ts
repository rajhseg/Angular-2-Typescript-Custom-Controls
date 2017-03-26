import { Component,ViewEncapsulation } from '@angular/core'

@Component({
    template:`
    <br/>
    <div>
      <h1>Custom checkbox controls</h1>
      <checkbox type="fancy2" label="Testing"></checkbox>
       <checkbox type="fancy1" label="Testing"></checkbox>
       <checkbox type="dd" label="Testing"></checkbox>
    </div>
    <br/>        
    `,
    encapsulation:ViewEncapsulation.None,
     styles:[`
    
        .border{
            border:2px solid blue;
        }

        .strong{
            font-weight:bold;
        }

        .light{

        }

    `]
})
export class CheckComponent {

}