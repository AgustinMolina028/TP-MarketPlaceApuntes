import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompradoComponent } from './comprado/comprado.component';
import { PublicadoComponent } from './publicado/publicado.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { FooterComponent } from './footer/footer.component';
import { EnterTokenComponent } from './enter-token/enter-token.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'comprado', component: CompradoComponent },
  { path: 'publicado', component: PublicadoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recover-pass', component: RecoverPassComponent},
  { path: 'enter-token', component: EnterTokenComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'footer', component: FooterComponent}
];
