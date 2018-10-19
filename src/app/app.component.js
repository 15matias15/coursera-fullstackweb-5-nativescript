"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
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
    AppComponent.prototype.displayLoginDialog = function () {
        var options = {
            title: 'Login',
            message: 'Type Your Login Credentials',
            userName: application_settings_1.getString('userName', ''),
            password: application_settings_1.getString('password', ''),
            okButtonText: 'Login',
            cancelButtonText: 'Cancel'
        };
        dialogs_1.login(options).then(function (loginResult) {
            application_settings_1.setString('userName', loginResult.userName);
            application_settings_1.setString('password', loginResult.password);
        }, function () {
            console.log('Login cancelled');
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXdEO0FBQ3hELGlDQUFtQztBQUNuQyxzREFBK0Q7QUFDL0QseUVBSW9DO0FBQ3BDLDRDQUF3QztBQUN4Qyx1RUFBK0Q7QUFDL0Qsc0NBQWdEO0FBQ2hELDZEQUE0RDtBQU81RDtJQUlFLHNCQUNVLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBNEI7UUFGNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFFcEMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtREFBc0IsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNmLElBQUksQ0FBQyxrQkFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUMsQ0FBQzthQUM1RCxTQUFTLENBQ1IsVUFBQyxLQUFvQixJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUE5QyxDQUE4QyxDQUN6RSxDQUFDO0lBQ04sQ0FBQztJQUVELHNCQUFJLDhDQUFvQjthQUF4QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxZQUFvQjtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0MsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQseUNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsUUFBUSxFQUFFLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNuQyxRQUFRLEVBQUUsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ25DLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7U0FDM0IsQ0FBQztRQUVGLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2pCLFVBQUMsV0FBd0I7WUFDdkIsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLGdDQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQ0Q7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBN0RVLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDLENBQUM7eUNBTWtCLGVBQU07WUFDSSx5QkFBZ0I7WUFDeEIsOENBQWtCO09BUDNCLFlBQVksQ0E4RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgRHJhd2VyVHJhbnNpdGlvbkJhc2UsXG4gIFJhZFNpZGVEcmF3ZXIsXG4gIFNsaWRlSW5PblRvcFRyYW5zaXRpb25cbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBsb2dpbiwgTG9naW5SZXN1bHQgfSBmcm9tICd1aS9kaWFsb2dzJztcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2VcbiAgKSB7XG4gICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gJy9tZW51JztcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gKHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICB9XG5cbiAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcbiAgfVxuXG4gIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiAnZmFkZSdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIH1cblxuICBkaXNwbGF5TG9naW5EaWFsb2coKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogJ0xvZ2luJyxcbiAgICAgIG1lc3NhZ2U6ICdUeXBlIFlvdXIgTG9naW4gQ3JlZGVudGlhbHMnLFxuICAgICAgdXNlck5hbWU6IGdldFN0cmluZygndXNlck5hbWUnLCAnJyksXG4gICAgICBwYXNzd29yZDogZ2V0U3RyaW5nKCdwYXNzd29yZCcsICcnKSxcbiAgICAgIG9rQnV0dG9uVGV4dDogJ0xvZ2luJyxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgfTtcblxuICAgIGxvZ2luKG9wdGlvbnMpLnRoZW4oXG4gICAgICAobG9naW5SZXN1bHQ6IExvZ2luUmVzdWx0KSA9PiB7XG4gICAgICAgIHNldFN0cmluZygndXNlck5hbWUnLCBsb2dpblJlc3VsdC51c2VyTmFtZSk7XG4gICAgICAgIHNldFN0cmluZygncGFzc3dvcmQnLCBsb2dpblJlc3VsdC5wYXNzd29yZCk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gY2FuY2VsbGVkJyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19