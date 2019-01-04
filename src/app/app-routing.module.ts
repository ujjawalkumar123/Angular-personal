import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UserComponent } from 'src/app/user/user.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'start', component: AppComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'user' , component: UserComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
