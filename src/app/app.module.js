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
                favorite_service_1.FavoriteService,
                couchbase_service_1.CouchbaseService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsOEVBQTJFO0FBRTNFLDJFQUEyRTtBQUMzRSxvREFBcUU7QUFDckUsd0NBQXFEO0FBRXJELGtGQUFrRjtBQUNsRixnRUFBZ0Y7QUFDaEYsNkNBQXdEO0FBQ3hELDhEQUFvRjtBQUNwRix3REFBc0Q7QUFDdEQsNENBQTJDO0FBQzNDLHdEQUFzRDtBQUN0RCwwRUFBd0U7QUFDeEUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsdUVBQThEO0FBQzlELGdFQUE4RDtBQUM5RCw0REFBZ0Y7QUFDaEYsdUVBQXFFO0FBQ3JFLDZFQUEyRTtBQUMzRSw0RkFBMEY7QUFDMUYsaUVBQStEO0FBQy9ELGtFQUFnRTtBQTBDaEU7SUFIQTs7TUFFRTtJQUNGO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBeENyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsMENBQTRCO2dCQUM1Qix1QkFBZ0I7Z0JBQ2hCLHdDQUE4QjtnQkFDOUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixFQUFFLEVBQUUsOEJBQThCO2lCQUNuQyxDQUFDO2dCQUNGLHNDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsMENBQW1CO2dCQUNuQiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLHdDQUFrQjtnQkFDbEIsNENBQW9CO2dCQUNwQixzREFBeUI7Z0JBQ3pCLG9DQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFPLEVBQUU7Z0JBQ3pDLDBCQUFXO2dCQUNYLCtDQUFxQjtnQkFDckIsa0NBQWU7Z0JBQ2Ysb0NBQWdCO2FBQ2pCO1lBQ0QsZUFBZSxFQUFFLENBQUMsc0RBQXlCLEVBQUUsb0NBQWdCLENBQUM7WUFDOUQsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vc2hhcmVkL2Jhc2V1cmwnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNoZGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNoZGV0YWlsL2Rpc2hkZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNlcnZhdGlvbm1vZGFsL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tICcuL0NvbW1lbnQvQ29tbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291Y2hiYXNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgIGZhOiAnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcydcbiAgICB9KSxcbiAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgRGlzaGRldGFpbENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIENvbnRhY3RDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgIFJlc2VydmF0aW9uQ29tcG9uZW50LFxuICAgIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQsXG4gICAgQ29tbWVudENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6ICdiYXNlVVJMJywgdXNlVmFsdWU6IGJhc2VVUkwgfSxcbiAgICBEaXNoU2VydmljZSxcbiAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UsXG4gICAgRmF2b3JpdGVTZXJ2aWNlLFxuICAgIENvdWNoYmFzZVNlcnZpY2VcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCwgQ29tbWVudENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19