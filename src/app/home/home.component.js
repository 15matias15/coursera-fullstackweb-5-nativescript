"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var page_1 = require("ui/page");
var gestures_1 = require("ui/gestures");
var enums = require("ui/enums");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice, baseURL, page, fonticon) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.baseURL = baseURL;
        this.page = page;
        this.fonticon = fonticon;
        this.showLeftCard = true;
        this.showMiddleCard = false;
        this.showRightCard = false;
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
    HomeComponent.prototype.onSwipe = function (args) {
        if (args.direction === gestures_1.SwipeDirection.left) {
            this.animateLeft();
        }
        else if (args.direction === gestures_1.SwipeDirection.right) {
            this.animateRight();
        }
    };
    HomeComponent.prototype.animateLeft = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById('leftCard');
            this.middleCard = this.page.getViewById('middleCard');
            this.rightCard = this.page.getViewById('rightCard');
            if (this.showLeftCard) {
                this.rightCard
                    .animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.leftCard
                        .animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.leftCard
                    .animate({
                    translate: { x: 2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.middleCard
                        .animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.middleCard
                    .animate({
                    translate: { x: 2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.rightCard
                        .animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500
                        });
                    });
                });
            }
        }
    };
    HomeComponent.prototype.animateRight = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById('leftCard');
            this.middleCard = this.page.getViewById('middleCard');
            this.rightCard = this.page.getViewById('rightCard');
            if (this.showLeftCard) {
                this.middleCard
                    .animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.leftCard
                        .animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.rightCard
                    .animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.middleCard
                        .animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.leftCard
                    .animate({
                    translate: { x: -2000, y: 0 },
                    duration: 500
                })
                    .then(function () {
                    _this.rightCard
                        .animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500
                        });
                    });
                });
            }
        }
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
            leader_service_1.LeaderService, Object, page_1.Page,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCx1RUFBK0Q7QUFDL0QsZ0NBQStCO0FBRS9CLHdDQUFvRTtBQUNwRSxnQ0FBa0M7QUFRbEM7SUFjRSx1QkFDVSxXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsYUFBNEIsRUFDVixPQUFPLEVBQ3pCLElBQVUsRUFDVixRQUE0QjtRQUw1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFidEMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFZNUIsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLFdBQVc7YUFDYixlQUFlLEVBQUU7YUFDakIsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUMxQixVQUFBLE9BQU8sSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLENBQUMsRUFBakMsQ0FBaUMsQ0FDN0MsQ0FBQztRQUNKLElBQUksQ0FBQyxnQkFBZ0I7YUFDbEIsb0JBQW9CLEVBQUU7YUFDdEIsU0FBUyxDQUNSLFVBQUEsU0FBUyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxFQUE1QixD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YUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQztRQW1CRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FIRywwQkFBVztZQUNOLG9DQUFnQjtZQUNuQiw4QkFBYSxVQUV0QixXQUFJO1lBQ0EsOENBQWtCO09BcEIzQixhQUFhLENBOE16QjtJQUFELG9CQUFDO0NBQUEsQUE5TUQsSUE4TUM7QUE5TVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3Byb21vdGlvbic7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XG5pbXBvcnQgeyBMZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgU3dpcGVEaXJlY3Rpb24gfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzaDogRGlzaDtcbiAgcHJvbW90aW9uOiBQcm9tb3Rpb247XG4gIGxlYWRlcjogTGVhZGVyO1xuICBkaXNoRXJyTWVzczogc3RyaW5nO1xuICBwcm9tb0Vyck1lc3M6IHN0cmluZztcbiAgbGVhZGVyRXJyTWVzczogc3RyaW5nO1xuICBzaG93TGVmdENhcmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBzaG93TWlkZGxlQ2FyZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93UmlnaHRDYXJkOiBib29sZWFuID0gZmFsc2U7XG4gIGxlZnRDYXJkOiBWaWV3O1xuICBtaWRkbGVDYXJkOiBWaWV3O1xuICByaWdodENhcmQ6IFZpZXc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcm9tb3Rpb25zZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGVhZGVyc2VydmljZTogTGVhZGVyU2VydmljZSxcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHVibGljIGJhc2VVUkwsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kaXNoc2VydmljZVxuICAgICAgLmdldEZlYXR1cmVkRGlzaCgpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkaXNoID0+ICh0aGlzLmRpc2ggPSBkaXNoKSxcbiAgICAgICAgZXJybWVzcyA9PiAodGhpcy5kaXNoRXJyTWVzcyA9IDxhbnk+ZXJybWVzcylcbiAgICAgICk7XG4gICAgdGhpcy5wcm9tb3Rpb25zZXJ2aWNlXG4gICAgICAuZ2V0RmVhdHVyZWRQcm9tb3Rpb24oKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcHJvbW90aW9uID0+ICh0aGlzLnByb21vdGlvbiA9IHByb21vdGlvbiksXG4gICAgICAgIGVycm1lc3MgPT4gKHRoaXMucHJvbW9FcnJNZXNzID0gPGFueT5lcnJtZXNzKVxuICAgICAgKTtcbiAgICB0aGlzLmxlYWRlcnNlcnZpY2VcbiAgICAgIC5nZXRGZWF0dXJlZExlYWRlcigpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBsZWFkZXIgPT4gKHRoaXMubGVhZGVyID0gbGVhZGVyKSxcbiAgICAgICAgZXJybWVzcyA9PiAodGhpcy5sZWFkZXJFcnJNZXNzID0gPGFueT5lcnJtZXNzKVxuICAgICAgKTtcbiAgfVxuXG4gIG9uU3dpcGUoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5sZWZ0KSB7XG4gICAgICB0aGlzLmFuaW1hdGVMZWZ0KCk7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24ucmlnaHQpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZVJpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMuZGlzaCAmJiB0aGlzLnByb21vdGlvbiAmJiB0aGlzLmxlYWRlcikge1xuICAgICAgdGhpcy5sZWZ0Q2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignbGVmdENhcmQnKTtcbiAgICAgIHRoaXMubWlkZGxlQ2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignbWlkZGxlQ2FyZCcpO1xuICAgICAgdGhpcy5yaWdodENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ3JpZ2h0Q2FyZCcpO1xuXG4gICAgICBpZiAodGhpcy5zaG93TGVmdENhcmQpIHtcbiAgICAgICAgdGhpcy5yaWdodENhcmRcbiAgICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRDYXJkXG4gICAgICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5taWRkbGVDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dNaWRkbGVDYXJkKSB7XG4gICAgICAgIHRoaXMubGVmdENhcmRcbiAgICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5taWRkbGVDYXJkXG4gICAgICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01pZGRsZUNhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dSaWdodENhcmQpIHtcbiAgICAgICAgdGhpcy5taWRkbGVDYXJkXG4gICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRDYXJkXG4gICAgICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRDYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLmRpc2ggJiYgdGhpcy5wcm9tb3Rpb24gJiYgdGhpcy5sZWFkZXIpIHtcbiAgICAgIHRoaXMubGVmdENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2xlZnRDYXJkJyk7XG4gICAgICB0aGlzLm1pZGRsZUNhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21pZGRsZUNhcmQnKTtcbiAgICAgIHRoaXMucmlnaHRDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KCdyaWdodENhcmQnKTtcblxuICAgICAgaWYgKHRoaXMuc2hvd0xlZnRDYXJkKSB7XG4gICAgICAgIHRoaXMubWlkZGxlQ2FyZFxuICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0Q2FyZFxuICAgICAgICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmlnaHRDYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93TWlkZGxlQ2FyZCkge1xuICAgICAgICB0aGlzLnJpZ2h0Q2FyZFxuICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5taWRkbGVDYXJkXG4gICAgICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRDYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dSaWdodENhcmQpIHtcbiAgICAgICAgdGhpcy5sZWZ0Q2FyZFxuICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaWdodENhcmRcbiAgICAgICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNaWRkbGVDYXJkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==