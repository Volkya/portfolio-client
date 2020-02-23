import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { ContactComponent } from './components/contact/contact.component';
import { MeComponent } from './components/me/me.component';
import { WebComponent } from './components/web/web.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { BlogComponent } from './components/blog/blog.component';
import { StoreComponent } from './components/store/store.component';
import { SkillsComponent } from './components/skills/skills.component';

const appRoutes: Routes = [
  {path: 'me', component: MeComponent, data: {title: 'About me'}},
  {path: 'skills', component: SkillsComponent},
  {path: 'web', component: WebComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'store', component: StoreComponent},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact me'}},
  {path: '', redirectTo: '/me', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MeComponent,
    WebComponent,
    PhotographyComponent,
    BlogComponent,
    StoreComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
