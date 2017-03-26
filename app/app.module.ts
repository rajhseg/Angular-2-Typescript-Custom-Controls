    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';
      
    
    import { appComponent } from './app.component'
    import { AppRoutingModule } from './app.routing'  
  
    @NgModule({
        imports: [BrowserModule,HttpModule,AppRoutingModule],
        exports: [],
        declarations: [appComponent],
        providers:[],
        bootstrap:[appComponent]
    })
    export class AppModule { 

    }


