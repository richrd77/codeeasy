import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CoursesAndProgramsComponent } from './components/courses-and-programs/courses-and-programs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'courses-and-programs', component: CoursesAndProgramsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'latest-news-and-resources', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
