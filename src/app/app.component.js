"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions, fonticon) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.fonticon = fonticon;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = '/menu';
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return (_this._activatedUrl = event.urlAfterRedirects); });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade'
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            moduleId: module.id,
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXdEO0FBQ3hELGlDQUFtQztBQUNuQyxzREFBK0Q7QUFDL0QseUVBSW9DO0FBQ3BDLDRDQUF3QztBQUN4Qyx1RUFBK0Q7QUFPL0Q7SUFJRSxzQkFDVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLFFBQTRCO1FBRjVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBRXBDLG9EQUFvRDtJQUN0RCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbURBQXNCLEVBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMsa0JBQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLENBQUM7YUFDNUQsU0FBUyxDQUNSLFVBQUMsS0FBb0IsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBOUMsQ0FBOEMsQ0FDekUsQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLEdBQVc7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsWUFBb0I7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdDLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQXhDVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDO3lDQU1rQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLDhDQUFrQjtPQVAzQixZQUFZLENBeUN4QjtJQUFELG1CQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIERyYXdlclRyYW5zaXRpb25CYXNlLFxuICBSYWRTaWRlRHJhd2VyLFxuICBTbGlkZUluT25Ub3BUcmFuc2l0aW9uXG59IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2VcbiAgKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gJy9tZW51JztcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gKHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICB9XG5cbiAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcbiAgfVxuXG4gIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZSdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIH1cbn1cbiJdfQ==