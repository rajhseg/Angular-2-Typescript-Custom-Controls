import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBox } from './checkbox.editor'
import { RadioButton } from './radiobutton.editor'
import { StarRating } from './star.editor'




@NgModule({
    imports:[CommonModule],
    declarations:[StarRating,CheckBox,RadioButton],
    providers:[],
    exports:[StarRating,CheckBox,RadioButton]
})
export class EditorModule{

}