import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { DishService } from './services/dish.service';
import { baseURL } from './shared/baseurl';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { FavoriteService } from './services/favorite.service';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationModalComponent } from './reservationmodal/reservationmodal.component';
import { CommentComponent } from './Comment/Comment.component';
import { CouchbaseService } from './services/couchbase.service';
import { UserAuthComponent } from './userauth/userauth.component';
import { PlatformService } from './services/platform.service';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    HttpClientModule,
    NativeScriptUISideDrawerModule,
    TNSFontIconModule.forRoot({
      fa: './fonts/font-awesome.min.css'
    }),
    NativeScriptUIListViewModule,
    NativeScriptFormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FavoritesComponent,
    ReservationComponent,
    ReservationModalComponent,
    CommentComponent,
    UserAuthComponent
  ],
  providers: [
    { provide: 'baseURL', useValue: baseURL },
    DishService,
    ProcessHTTPMsgService,
    FavoriteService,
    CouchbaseService,
    PlatformService
  ],
  entryComponents: [ReservationModalComponent, CommentComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
