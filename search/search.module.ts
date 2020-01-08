import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    InfiniteScrollModule
  ],
  declarations: [SearchPage],
  providers: [AngularFirestore],
})
export class SearchPageModule {}
