"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var http_client_1 = require("nativescript-angular/http-client");
var http_1 = require("@angular/common/http");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var dish_service_1 = require("./services/dish.service");
var baseurl_1 = require("./shared/baseurl");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var favorite_service_1 = require("./services/favorite.service");
var angular_2 = require("nativescript-ui-listview/angular");
var favorites_component_1 = require("./favorites/favorites.component");
var reservation_component_1 = require("./reservation/reservation.component");
var reservationmodal_component_1 = require("./reservationmodal/reservationmodal.component");
var Comment_component_1 = require("./Comment/Comment.component");
var couchbase_service_1 = require("./services/couchbase.service");
var userauth_component_1 = require("./userauth/userauth.component");
var platform_service_1 = require("./services/platform.service");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_client_1.NativeScriptHttpClientModule,
                http_1.HttpClientModule,
                angular_1.NativeScriptUISideDrawerModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    fa: './fonts/font-awesome.min.css'
                }),
                angular_2.NativeScriptUIListViewModule,
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent,
                favorites_component_1.FavoritesComponent,
                reservation_component_1.ReservationComponent,
                reservationmodal_component_1.ReservationModalComponent,
                Comment_component_1.CommentComponent,
                userauth_component_1.UserAuthComponent
            ],
            providers: [
                { provide: 'baseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                favorite_service_1.FavoriteService,
                couchbase_service_1.CouchbaseService,
                platform_service_1.PlatformService
            ],
            entryComponents: [reservationmodal_component_1.ReservationModalComponent, Comment_component_1.CommentComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsOEVBQTJFO0FBRTNFLDJFQUEyRTtBQUMzRSxvREFBcUU7QUFDckUsd0NBQXFEO0FBRXJELGtGQUFrRjtBQUNsRixnRUFBZ0Y7QUFDaEYsNkNBQXdEO0FBQ3hELDhEQUFvRjtBQUNwRix3REFBc0Q7QUFDdEQsNENBQTJDO0FBQzNDLHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsdUVBQThEO0FBQzlELGdFQUE4RDtBQUM5RCw0REFBZ0Y7QUFDaEYsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUMzRSw0RkFBMEY7QUFDMUYsaUVBQStEO0FBQy9ELGtFQUFnRTtBQUNoRSxvRUFBa0U7QUFDbEUsZ0VBQThEO0FBNEM5RDtJQUhBOztNQUVFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUExQ3JCLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiwwQ0FBNEI7Z0JBQzVCLHVCQUFnQjtnQkFDaEIsd0NBQThCO2dCQUM5Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3hCLEVBQUUsRUFBRSw4QkFBOEI7aUJBQ25DLENBQUM7Z0JBQ0Ysc0NBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLDJCQUFtQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYiwwQ0FBbUI7Z0JBQ25CLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsZ0NBQWM7Z0JBQ2Qsd0NBQWtCO2dCQUNsQiw0Q0FBb0I7Z0JBQ3BCLHNEQUF5QjtnQkFDekIsb0NBQWdCO2dCQUNoQixzQ0FBaUI7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBTyxFQUFFO2dCQUN6QywwQkFBVztnQkFDWCwrQ0FBcUI7Z0JBQ3JCLGtDQUFlO2dCQUNmLG9DQUFnQjtnQkFDaEIsa0NBQWU7YUFDaEI7WUFDRCxlQUFlLEVBQUUsQ0FBQyxzREFBeUIsRUFBRSxvQ0FBZ0IsQ0FBQztZQUM5RCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERpc2hkZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgRmF2b3JpdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3Jlc2VydmF0aW9ubW9kYWwvcmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbWVudENvbXBvbmVudCB9IGZyb20gJy4vQ29tbWVudC9Db21tZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQXV0aENvbXBvbmVudCB9IGZyb20gJy4vdXNlcmF1dGgvdXNlcmF1dGguY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGxhdGZvcm0uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgZmE6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJ1xuICAgIH0pLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBEaXNoZGV0YWlsQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudCxcbiAgICBGYXZvcml0ZXNDb21wb25lbnQsXG4gICAgUmVzZXJ2YXRpb25Db21wb25lbnQsXG4gICAgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCxcbiAgICBDb21tZW50Q29tcG9uZW50LFxuICAgIFVzZXJBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogJ2Jhc2VVUkwnLCB1c2VWYWx1ZTogYmFzZVVSTCB9LFxuICAgIERpc2hTZXJ2aWNlLFxuICAgIFByb2Nlc3NIVFRQTXNnU2VydmljZSxcbiAgICBGYXZvcml0ZVNlcnZpY2UsXG4gICAgQ291Y2hiYXNlU2VydmljZSxcbiAgICBQbGF0Zm9ybVNlcnZpY2VcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCwgQ29tbWVudENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19