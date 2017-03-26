import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditorModule  } from './editors/editor.module';
import { FormsModule } from '@angular/forms'

import { CheckComponent } from './CheckComponent';
import { RadioComponent } from './RadioComponent';
import { StarComponent } from './StarComponent';
import { UnknownComponent } from './unknownComponent'

const routes:Routes = [

{ path:'checkbox', component:CheckComponent },
{ path:'radiobutton', component:RadioComponent },
{ path:'rating', component:StarComponent },
{ path: '', redirectTo:'/checkbox',pathMatch:'full' },
  { path: '**', component:UnknownComponent }
];

export const routedComponents = [CheckComponent,RadioComponent,
                                StarComponent,UnknownComponent];

@NgModule({
  imports : [CommonModule,FormsModule, EditorModule, RouterModule.forRoot(routes)],
  declarations:routedComponents,
  exports: [RouterModule,EditorModule,CommonModule],
  providers:[]
})
export class AppRoutingModule{

}