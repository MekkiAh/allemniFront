import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { PublicationComponent} from './publication/publication.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { PublicationPageComponent} from './publication-page/publication-page.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'publications', component: PublicationComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'publication/:id', component: PublicationPageComponent},
  { path: '**', redirectTo: 'publications' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
