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
                Comment_component_1.CommentComponent
            ],
            providers: [
                { provide: 'baseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                favorite_service_1.FavoriteService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsOEVBQTJFO0FBRTNFLDJFQUEyRTtBQUMzRSxvREFBcUU7QUFDckUsd0NBQXFEO0FBRXJELGtGQUFrRjtBQUNsRixnRUFBZ0Y7QUFDaEYsNkNBQXdEO0FBQ3hELDhEQUFvRjtBQUNwRix3REFBc0Q7QUFDdEQsNENBQTJDO0FBQzNDLHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsdUVBQThEO0FBQzlELGdFQUE4RDtBQUM5RCw0REFBZ0Y7QUFDaEYsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUMzRSw0RkFBMEY7QUFDMUYsaUVBQStEO0FBeUMvRDtJQUhBOztNQUVFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF2Q3JCLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiwwQ0FBNEI7Z0JBQzVCLHVCQUFnQjtnQkFDaEIsd0NBQThCO2dCQUM5Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3hCLEVBQUUsRUFBRSw4QkFBOEI7aUJBQ25DLENBQUM7Z0JBQ0Ysc0NBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLDJCQUFtQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYiwwQ0FBbUI7Z0JBQ25CLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsZ0NBQWM7Z0JBQ2Qsd0NBQWtCO2dCQUNsQiw0Q0FBb0I7Z0JBQ3BCLHNEQUF5QjtnQkFDekIsb0NBQWdCO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQU8sRUFBRTtnQkFDekMsMEJBQVc7Z0JBQ1gsK0NBQXFCO2dCQUNyQixrQ0FBZTthQUNoQjtZQUNELGVBQWUsRUFBRSxDQUFDLHNEQUF5QixFQUFFLG9DQUFnQixDQUFDO1lBQzlELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuL3NoYXJlZC9iYXNldXJsJztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzaGRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZGlzaGRldGFpbC9kaXNoZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBGYXZvcml0ZXNDb21wb25lbnQgfSBmcm9tICcuL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2VydmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tZW50Q29tcG9uZW50IH0gZnJvbSAnLi9Db21tZW50L0NvbW1lbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICBmYTogJy4vZm9udHMvZm9udC1hd2Vzb21lLm1pbi5jc3MnXG4gICAgfSksXG4gICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIERpc2hkZXRhaWxDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBDb250YWN0Q29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50LFxuICAgIEZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICBSZXNlcnZhdGlvbkNvbXBvbmVudCxcbiAgICBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50LFxuICAgIENvbW1lbnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiAnYmFzZVVSTCcsIHVzZVZhbHVlOiBiYXNlVVJMIH0sXG4gICAgRGlzaFNlcnZpY2UsXG4gICAgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLFxuICAgIEZhdm9yaXRlU2VydmljZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50LCBDb21tZW50Q29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=