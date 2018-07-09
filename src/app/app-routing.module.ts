import {NgModule} from "@angular/core";
import {Routes, Router, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {} from "../../node_modules/@angular/router/src/router";
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {TrainingComponent} from "./training/training.component";

//noinspection TypeScriptValidateTypes
const router: Routes=  [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'trening', component: TrainingComponent},

];
@NgModule({
imports:[RouterModule.forRoot(router)],
exports:[RouterModule]
})
export class AppRoutingModel{}
