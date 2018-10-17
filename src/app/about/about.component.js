"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderService, baseURL) {
        this.leaderService = leaderService;
        this.baseURL = baseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService
            .getLeaders()
            .subscribe(function (leader) { return (_this.leaders = leader); }, function (errmess) { return (_this.errMess = errmess); });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            moduleId: module.id,
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [leader_service_1.LeaderService, Object])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELDZEQUEyRDtBQVMzRDtJQUdFLHdCQUNVLGFBQTRCLEVBQ1YsT0FBTztRQUR6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQUE7SUFDaEMsQ0FBQztJQUVKLGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxhQUFhO2FBQ2YsVUFBVSxFQUFFO2FBQ1osU0FBUyxDQUNSLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixFQUNqQyxVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLENBQUMsRUFBN0IsQ0FBNkIsQ0FDekMsQ0FBQztJQUNOLENBQUM7SUFmVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO1FBTUcsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBREssOEJBQWE7T0FKM0IsY0FBYyxDQWdCMUI7SUFBRCxxQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IExlYWRlciB9IGZyb20gJy4uL3NoYXJlZC9sZWFkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWJvdXQnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hYm91dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsZWFkZXJzOiBMZWFkZXJbXTtcbiAgZXJyTWVzczogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxlYWRlclNlcnZpY2U6IExlYWRlclNlcnZpY2UsXG4gICAgQEluamVjdCgnYmFzZVVSTCcpIHB1YmxpYyBiYXNlVVJMXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxlYWRlclNlcnZpY2VcbiAgICAgIC5nZXRMZWFkZXJzKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGxlYWRlciA9PiAodGhpcy5sZWFkZXJzID0gbGVhZGVyKSxcbiAgICAgICAgZXJybWVzcyA9PiAodGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzKVxuICAgICAgKTtcbiAgfVxufVxuIl19