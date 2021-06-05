import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeRandomizerComponent } from './type-randomizer/type-randomizer.component';
import { RegionRandomizerComponent } from './region-randomizer/region-randomizer.component';
import { NumEvolutionsRandomizerComponent } from './num-evolutions-randomizer/num-evolutions-randomizer.component';
import { InspirationRandomizerComponent } from './inspiration-randomizer/inspiration-randomizer.component';
import {MatCardModule} from '@angular/material/card';
import { StatRandomizerComponent } from './stat-randomizer/stat-randomizer.component';
import { AbilityRandomizerComponent } from './ability-randomizer/ability-randomizer.component';
import { LinkIndicatorComponent } from './link-indicator/link-indicator.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    TypeRandomizerComponent,
    RegionRandomizerComponent,
    NumEvolutionsRandomizerComponent,
    InspirationRandomizerComponent,
    StatRandomizerComponent,
    AbilityRandomizerComponent,
    LinkIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
