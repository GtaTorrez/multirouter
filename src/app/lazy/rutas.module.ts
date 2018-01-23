import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { Router } from '@angular/router/src/router';
import { AaaaComponent } from './aaaa/aaaa.component';
import { BbbbComponent } from './bbbb/bbbb.component';
import { MenuComponent } from './menu/menu.component';


const routes:Routes=[
    {path:'',redirectTo:'menu'},
    {path:'menu',component:MenuComponent,children:[
        {path:'aaaa',component:AaaaComponent,outlet:'tercerhijo'},
        {path:'bbbb',component:BbbbComponent,outlet:'tercerhijo'}
    ]},
    
    
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class RutasModule{}