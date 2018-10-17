"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice, baseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.baseURL = baseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice
            .getFeaturedDish()
            .subscribe(function (dish) { return (_this.dish = dish); }, function (errmess) { return (_this.dishErrMess = errmess); });
        this.promotionservice
            .getFeaturedPromotion()
            .subscribe(function (promotion) { return (_this.promotion = promotion); }, function (errmess) { return (_this.promoErrMess = errmess); });
        this.leaderservice
            .getFeaturedLeader()
            .subscribe(function (leader) { return (_this.leader = leader); }, function (errmess) { return (_this.leaderErrMess = errmess); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __param(3, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            promotion_service_1.PromotionService,
            leader_service_1.LeaderService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQVEzRDtJQVFFLHVCQUNVLFdBQXdCLEVBQ3hCLGdCQUFrQyxFQUNsQyxhQUE0QixFQUNWLE9BQU87UUFIekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQUE7SUFDaEMsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLFdBQVc7YUFDYixlQUFlLEVBQUU7YUFDakIsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUMxQixVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLENBQUMsRUFBakMsQ0FBaUMsQ0FDN0MsQ0FBQztRQUNKLElBQUksQ0FBQyxnQkFBZ0I7YUFDbEIsb0JBQW9CLEVBQUU7YUFDdEIsU0FBUyxDQUNSLFVBQUEsU0FBUyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxFQUE1QixDQUE0QixFQUN6QyxVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksR0FBUSxPQUFPLENBQUMsRUFBbEMsQ0FBa0MsQ0FDOUMsQ0FBQztRQUNKLElBQUksQ0FBQyxhQUFhO2FBQ2YsaUJBQWlCLEVBQUU7YUFDbkIsU0FBUyxDQUNSLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUF0QixDQUFzQixFQUNoQyxVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsR0FBUSxPQUFPLENBQUMsRUFBbkMsQ0FBbUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFsQ1UsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQztRQWFHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUhHLDBCQUFXO1lBQ04sb0NBQWdCO1lBQ25CLDhCQUFhO09BWDNCLGFBQWEsQ0FtQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzaDogRGlzaDtcbiAgcHJvbW90aW9uOiBQcm9tb3Rpb247XG4gIGxlYWRlcjogTGVhZGVyO1xuICBkaXNoRXJyTWVzczogc3RyaW5nO1xuICBwcm9tb0Vyck1lc3M6IHN0cmluZztcbiAgbGVhZGVyRXJyTWVzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvbW90aW9uc2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxlYWRlcnNlcnZpY2U6IExlYWRlclNlcnZpY2UsXG4gICAgQEluamVjdCgnYmFzZVVSTCcpIHB1YmxpYyBiYXNlVVJMXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc2hzZXJ2aWNlXG4gICAgICAuZ2V0RmVhdHVyZWREaXNoKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRpc2ggPT4gKHRoaXMuZGlzaCA9IGRpc2gpLFxuICAgICAgICBlcnJtZXNzID0+ICh0aGlzLmRpc2hFcnJNZXNzID0gPGFueT5lcnJtZXNzKVxuICAgICAgKTtcbiAgICB0aGlzLnByb21vdGlvbnNlcnZpY2VcbiAgICAgIC5nZXRGZWF0dXJlZFByb21vdGlvbigpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBwcm9tb3Rpb24gPT4gKHRoaXMucHJvbW90aW9uID0gcHJvbW90aW9uKSxcbiAgICAgICAgZXJybWVzcyA9PiAodGhpcy5wcm9tb0Vyck1lc3MgPSA8YW55PmVycm1lc3MpXG4gICAgICApO1xuICAgIHRoaXMubGVhZGVyc2VydmljZVxuICAgICAgLmdldEZlYXR1cmVkTGVhZGVyKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGxlYWRlciA9PiAodGhpcy5sZWFkZXIgPSBsZWFkZXIpLFxuICAgICAgICBlcnJtZXNzID0+ICh0aGlzLmxlYWRlckVyck1lc3MgPSA8YW55PmVycm1lc3MpXG4gICAgICApO1xuICB9XG59XG4iXX0=