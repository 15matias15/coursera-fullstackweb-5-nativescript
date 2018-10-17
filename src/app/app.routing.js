"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var menu_component_1 = require("./menu/menu.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'dishdetail/:id', component: dishdetail_component_1.DishdetailComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsd0RBQXNEO0FBQ3RELDBFQUF3RTtBQUN4RSx3REFBc0Q7QUFDdEQsaUVBQStEO0FBQy9ELDJEQUF5RDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0NBQ2pELENBQUM7QUFNRjtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzaGRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZGlzaGRldGFpbC9kaXNoZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdtZW51JywgY29tcG9uZW50OiBNZW51Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2Rpc2hkZXRhaWwvOmlkJywgY29tcG9uZW50OiBEaXNoZGV0YWlsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=