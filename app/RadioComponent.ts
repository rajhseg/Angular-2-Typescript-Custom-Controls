import {Component,ViewEncapsulation} from '@angular/core'

@Component({
    template:`
    <br/>
    <div>
       <h1>Custom Radiobutton controls</h1>
       <radiobutton id="id1" name="eradio" color="orange" type="fancy1" label="Male"></radiobutton>       
       <radiobutton id="id2" name="eradio" color="red" type="fancy2" label="Female"></radiobutton>
       <radiobutton id="id3" name="eradio" label="Adult"></radiobutton>     
        <br/>
    </div>
    <br />    
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
export class RadioComponent{

}