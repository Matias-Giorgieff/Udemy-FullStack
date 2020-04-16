import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { FormComponent } from './components/clientes/form.component';

export const ROUTES: Routes = [
    {path: 'cliente', component: ClientesComponent},
    {path: 'directivas', component: DirectivasComponent},
    {path: 'clientes/form', component: FormComponent},
    {path: 'clientes/form/:id', component: FormComponent},   
    {path: '', pathMatch: 'full', redirectTo: 'cliente'},
    {path: '**', pathMatch: 'full', redirectTo: 'cliente'}
];
