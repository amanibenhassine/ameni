import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeComponent } from './components/admin-components/add-employe/add-employe.component';
//import { LoginComponent } from './login/login.component';
import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';

import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEmployeComponent } from './components/admin-components/profile-employe/profile-employe.component';
import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

import { FooterComponent } from './components/footer/footer.component';
import { InfoEmployeComponent } from './components/employe-components/info-employe/info-employe.component';
import { ProfilCandidatComponent } from './components/admin-components/profil-candidat/profil-candidat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';
import { UpdateInfoEmployeComponent } from './components/employe-components/update-info-employe/update-info-employe.component';


import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { ResponseComponent } from './components/candidate-components/response/response.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';

import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CandidatureComponent } from './components/employe-components/candidature/candidature.component';
//import { HomeComponent } from './home/home.component';
//import { RegisterComponent } from './register/register.component';
import { OffresActuellesComponent } from './components/employe-components/offres-actuelles/offres-actuelles.component';

import { PostJobComponent } from './components/admin-components/post-job/post-job.component';
import { JobspageComponent } from './components/employe-components/jobspage/jobspage.component';
import { MyfavjobComponent } from './components/employe-components/myfavjob/myfavjob.component';
import { JobappFormComponent } from './components/employe-components/jobapp-form/jobapp-form.component';
import { JobappFormCreateComponent } from './components/employe-components/jobapp-form/jobapp-form-create/jobapp-form-create.component';
import { JobappFormReviewComponent } from './components/employe-components/jobapp-form/jobapp-form-review/jobapp-form-review.component';
import { CandProfileComponent } from './components/employe-components/cand-profile/cand-profile.component';
import { ApplicationsComponent } from './components/employe-components/applications/applications.component';
import { CandidateFormComponent } from './components/employe-components/candidate-form/candidate-form.component';
import { ViewPostingComponent } from './components/admin-components/view-posting/view-posting.component';
import { ViewApplicantsComponent } from './components/admin-components/view-applicants/view-applicants.component';
import { HrProfileComponent } from './components/admin-components/hr-profile/hr-profile.component';
import { HrFormComponent } from './components/admin-components/hr-form/hr-form.component';
import { RecruitmentComponent } from './components/admin-components/recruitment/recruitment.component';


const routes: Routes = [
  {
    path: '', component : PublicLayoutComponent, children: [
      
      {path: '',redirectTo: 'home', pathMatch: 'full'},
      { path: 'home',component: HomeComponent},
      
      { path: 'response', component: ResponseComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  
  

    ]
  },
  

  { path: '', component: SidebarComponent,children:[

  {path:'', redirectTo:'dashboard' , pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'profil', component: UpdateProfilComponent},
  { path: 'addEmploye', component: AddEmployeComponent },
  { path: 'OffresActuelles', component: OffresActuellesComponent},
  { path: 'candidature', component: CandidatureComponent },
  { path: 'listEmployes', component: ListEmployesComponent },
  //{ path: 'listEmployes/profilEmploye/:idUser', component: ProfileEmployeComponent },
  { path: 'profilEmploye/:id', component: ProfileEmployeComponent },
  { path: 'updateEmploye', component: UpdateEmployeComponent },
  { path: 'updatePhoto', component: UpdatePhotoComponent },
  { path: 'updateInfoEmploye', component: UpdateInfoEmployeComponent },
 
  { path: 'profilCandidat/:id', component: ProfilCandidatComponent },
  
  { path: 'post-job', component: PostJobComponent },
  { path: "jobspage", component: JobspageComponent },
  { path: "myfavjob", component: MyfavjobComponent },
  { path: "jobappform", component: JobappFormComponent  },
  { path: "jobappform-create", component: JobappFormCreateComponent},
  { path: "jobappform-review", component: JobappFormReviewComponent },
  { path: "cand-profile", component: CandProfileComponent},
  { path: "applications", component: ApplicationsComponent},
  { path: "cand-form", component: CandidateFormComponent},
  { path: "view-posting", component: ViewPostingComponent},
  { path: "view-applicants", component: ViewApplicantsComponent},
  { path: "hr-profile", component: HrProfileComponent },
  { path: "hr-form", component: HrFormComponent },

  { path: "recruitment", component: RecruitmentComponent },





 
  { path: 'info-employe/:id', component: InfoEmployeComponent },
  
  
  { path: 'recrutement', component: RecrutementsComponent },
 

  
 ]},
  

 
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
