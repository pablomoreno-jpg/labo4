import { Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [{

    path: "bienvenida",
    component: BienvenidaComponent,
    
},{
    path: "Login",
    component: LoginComponent,
},{
    path: "registro",
    component: RegistroComponent,
},{
    path: "**",
    component: ErrorComponent,
}];
