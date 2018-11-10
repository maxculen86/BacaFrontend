import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar';
import { inhabitantInfoComponent } from './inhabitant-info/inhabitant-info.component';
import { PopulationService } from './population.service';
import { inhabitantListComponent } from './inhabitant-list/inhabitant-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { inhabitantRowComponent } from './inhabitant-row/inhabitant-row.component';
import { SearchinhabitantsComponent } from './search-inhabitants/search-inhabitants.component';
import { inhabitantFilterComponent } from './inhabitant-filter/inhabitant-filter.component';
import { inhabitantSelectedComponent } from './inhabitant-selected/inhabitant-selected.component';


@NgModule({
  declarations: [
    AppComponent,
    inhabitantInfoComponent,
    inhabitantListComponent,
    inhabitantRowComponent,
    SearchinhabitantsComponent,
    inhabitantFilterComponent,
    inhabitantSelectedComponent
  ],
  imports: [
  RouterModule,
  BrowserModule,
  HttpModule,
  AppRoutingModule,  
  FormsModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatListModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  ],
  providers: [PopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
