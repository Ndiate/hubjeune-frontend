import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '@app/share-module/share-module.module';
import { FrontOfficeComponent } from './frontoffice.component';
import { BackofficeRoutingModule } from './frontoffice.routing';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ConseilServiceComponent } from './components/services/conseil-service/conseil-service.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component'; 
import { FormationComponent } from './components/services/formation/formation.component';

import { AproposComponent } from './components/apropos/apropos.component';
import { PartenairesComponent } from './components/shared/partenaires/partenaires.component';

import { TemoignageComponent } from './components/shared/temoignage/temoignage.component';

 
import { NguCarouselModule } from '@ngu/carousel';

import { JobComponent } from './components/services/job/job.component';
// tslint:disable-next-line:max-line-length
import { FormationRenseignementFormComponent } from './components/services/formation/formation-renseignement-form/formation-renseignement-form.component';
import { SubmittedDialogComponent } from './components/shared/submitted-dialog/submitted-dialog.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { SliderHomeComponent } from './components/home/slider-home/slider-home.component';
import { CoachingJobComponent } from './components/services/coaching-job/coaching-job.component';
import { MetiersComponent } from './components/metiers/metiers.component'; 
import { BoursesComponent } from './components/bourses/bourses.component';
import { ServicesComponent } from './components/services/services.component';
import { FiliereListComponent } from './components/services/conseil-service/filiere-list/filiere-list.component';
import { FormationListComponent } from './components/services/conseil-service/formation-list/formation-list.component';
import { SerieListComponent } from './components/services/conseil-service/serie-list/serie-list.component'; 
import { MetierDetailsComponent } from './components/metiers/metier-details/metier-details.component';
import { InfoDetailsComponent } from './components/services/conseil-service/info-details/info-details.component'; 
import { InfoResolver } from './components/services/conseil-service/info-details/info.resolver';
import { MetierResolver } from './components/metiers/metier-details/metier.resolver';
import { BourseDetailsComponent } from './components/bourses/bourse-details/bourse-details.component';
import { BourseResolver } from './components/bourses/bourse-details/bourse.resolver';
// tslint:disable-next-line:max-line-length
import {
  AngularWeatherWidgetModule,
  WeatherApiName,
} from 'angular-weather-widget';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogService } from '@app/share-module/services/blog.service';
import { CovidComponent } from './components/covid/covid.component';
import { TombolaComponent } from './components/tombola/tombola.component';
import { TombolaDialogComponent } from './components/tombola/tombola-dialog/tombola-dialog.component';
import { GagnantsComponent } from './components/tombola/gagnants/gagnants.component';
import { LotsComponent } from './components/tombola/lots/lots.component';
import { StatistiqueComponent } from './components/statistique/statistique.component'; 
import { BlogResolver } from './components/blog/blog-details/blog.resolver';
import { NgxSocialShareModule } from 'ngx-social-share';
// tslint:disable-next-line:max-line-length
import { FormulaireCoachDialogComponent } from './components/services/coaching-job/formulaire-coach-dialog/formulaire-coach-dialog.component';
import { CardStatsComponent } from './components/covid/card-stats/card-stats.component';
import { CardConseilsComponent } from './components/covid/card-conseils/card-conseils.component';
import { CardTombolaComponent } from './components/covid/card-tombola/card-tombola.component';
import { TombolaResolver } from './components/tombola/tombola.resolver';
import { StatistiqueResolver } from './components/statistique/statistique.resolver'; 
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ActualitesComponent } from './components/blog/actualites/actualites.component';
import { SliderActualitesComponent } from './components/blog/actualites/slider-actualites/slider-actualites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuileComponent } from './components/home/tuile-home/tuile-tuile.component';
import { ActualitesHomeComponent } from './components/home/actualites-home/actualites-home.component';
import { FaqComponent } from './components/faq/faq.component';
import { EntreprenariatComponent } from './components/entreprenariat/entreprenariat.component';
import { SliderProductComponent } from './components/entreprenariat/slider-product/slider-product.component';
import { ListStartupComponent } from './components/entreprenariat/list-startup/list-startup.component';
import { LoginDialogComponent } from './components/entreprenariat/login-dialog/login-dialog.component';
import { InscriptionDialogComponent } from './components/entreprenariat/inscription-dialog/inscription-dialog.component';



@NgModule({
  declarations: [
    FrontOfficeComponent,
    TombolaComponent,
    TombolaDialogComponent,
    GagnantsComponent,
    LotsComponent,
    StatistiqueComponent,
    HomeComponent,
    CovidComponent,
    ContactComponent,
    ActualitesComponent, 
    SliderActualitesComponent,
    FormulaireCoachDialogComponent,
    AproposComponent,
    PartenairesComponent,
    ContactFormComponent,
    CardStatsComponent,
    CardConseilsComponent,
    CardTombolaComponent,
    // to remove
    BoursesComponent,
    ConseilServiceComponent,

    FormationComponent,

    TemoignageComponent, 
    MetiersComponent,
    CoachingJobComponent,
    ActualitesHomeComponent, 
    MetierDetailsComponent,
    InfoDetailsComponent,
    BourseDetailsComponent,
    JobComponent,
    FormationRenseignementFormComponent,
    SubmittedDialogComponent,

    SliderHomeComponent,
    TuileComponent,
    ServicesComponent,
    FiliereListComponent,
    FormationListComponent,
    SerieListComponent,
    BlogComponent,
    BlogDetailsComponent,
    FaqComponent,
    EntreprenariatComponent,
    SliderProductComponent,
    ListStartupComponent,
    LoginDialogComponent,
    InscriptionDialogComponent
  ],
  imports: [
   
    CommonModule,
    ShareModuleModule,
    BackofficeRoutingModule,
    LayoutModule,
    DragDropModule,
    NguCarouselModule, 
    AngularWeatherWidgetModule.forRoot({
      key: '8c06204d848cd7f238e4aaf850a11a2b',
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5',
    }),
    NgxSocialShareModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    
  ],
  exports: [HomeComponent],
  entryComponents: [
    SubmittedDialogComponent,
    TombolaDialogComponent,
    FormationRenseignementFormComponent,
    LoginDialogComponent,
    InscriptionDialogComponent
  ],
  providers: [
    InfoResolver,
    BourseResolver,
    MetierResolver,
    BlogService,
    BlogResolver,
    TombolaResolver,
    StatistiqueResolver,
  ],
})
export class FrontOfficeModule {}
