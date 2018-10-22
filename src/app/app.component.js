"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var platform_service_1 = require("./services/platform.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions, fonticon, platformService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.fonticon = fonticon;
        this.platformService = platformService;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = '/menu';
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return (_this._activatedUrl = event.urlAfterRedirects); });
        this.platformService.printPlatformInfo();
        this.platformService
            .startMonitoringNetwork()
            .subscribe(function (message) {
            console.log(message);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.platformService.stopMonitoringNetwork();
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
            nativescript_ngx_fonticon_1.TNSFontIconService,
            platform_service_1.PlatformService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELGlDQUFtQztBQUNuQyxzREFBK0Q7QUFDL0QseUVBSW9DO0FBQ3BDLDRDQUF3QztBQUN4Qyx1RUFBK0Q7QUFDL0QsZ0VBQThEO0FBTzlEO0lBSUUsc0JBQ1UsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUE0QixFQUM1QixlQUFnQztRQUhoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFFeEMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbURBQXNCLEVBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMsa0JBQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLENBQUM7YUFDNUQsU0FBUyxDQUNSLFVBQUMsS0FBb0IsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBOUMsQ0FBOEMsQ0FDekUsQ0FBQztRQUVKLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZTthQUNqQixzQkFBc0IsRUFBRTthQUN4QixTQUFTLENBQUMsVUFBQyxPQUFlO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0JBQUksOENBQW9CO2FBQXhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELDBDQUFtQixHQUFuQixVQUFvQixHQUFXO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLFlBQW9CO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM3QyxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGLENBQUMsQ0FBQztRQUVILElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFwRFUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQkFBb0I7U0FDbEMsQ0FBQzt5Q0FNa0IsZUFBTTtZQUNJLHlCQUFnQjtZQUN4Qiw4Q0FBa0I7WUFDWCxrQ0FBZTtPQVIvQixZQUFZLENBcUR4QjtJQUFELG1CQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgRHJhd2VyVHJhbnNpdGlvbkJhc2UsXG4gIFJhZFNpZGVEcmF3ZXIsXG4gIFNsaWRlSW5PblRvcFRyYW5zaXRpb25cbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BsYXRmb3JtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1TZXJ2aWNlXG4gICkge1xuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2YXRlZFVybCA9ICcvbWVudSc7XG4gICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+ICh0aGlzLl9hY3RpdmF0ZWRVcmwgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cylcbiAgICAgICk7XG5cbiAgICB0aGlzLnBsYXRmb3JtU2VydmljZS5wcmludFBsYXRmb3JtSW5mbygpO1xuICAgIHRoaXMucGxhdGZvcm1TZXJ2aWNlXG4gICAgICAuc3RhcnRNb25pdG9yaW5nTmV0d29yaygpXG4gICAgICAuc3Vic2NyaWJlKChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucGxhdGZvcm1TZXJ2aWNlLnN0b3BNb25pdG9yaW5nTmV0d29yaygpO1xuICB9XG5cbiAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gIH1cblxuICBpc0NvbXBvbmVudFNlbGVjdGVkKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZFVybCA9PT0gdXJsO1xuICB9XG5cbiAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdmYWRlJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgfVxufVxuIl19