"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
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
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                dishdetail_component_1.DishdetailComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent
            ],
            providers: [
                { provide: 'baseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                process_httpmsg_service_1.ProcessHTTPMsgService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsOEVBQTJFO0FBRTNFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLGdFQUFnRjtBQUNoRiw2Q0FBd0Q7QUFDeEQsOERBQW9GO0FBQ3BGLHdEQUFzRDtBQUN0RCw0Q0FBMkM7QUFDM0Msd0RBQXNEO0FBQ3RELDBFQUF3RTtBQUN4RSx3REFBc0Q7QUFDdEQsaUVBQStEO0FBQy9ELDJEQUF5RDtBQTZCekQ7SUFIQTs7TUFFRTtJQUNGO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBM0JyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsMENBQTRCO2dCQUM1Qix1QkFBZ0I7Z0JBQ2hCLHdDQUE4QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYiwwQ0FBbUI7Z0JBQ25CLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsZ0NBQWM7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGlCQUFPLEVBQUU7Z0JBQ3pDLDBCQUFXO2dCQUNYLCtDQUFxQjthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERpc2hkZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBEaXNoZGV0YWlsQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6ICdiYXNlVVJMJywgdXNlVmFsdWU6IGJhc2VVUkwgfSxcbiAgICBEaXNoU2VydmljZSxcbiAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=