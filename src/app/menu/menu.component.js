"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService, baseURL) {
        this.dishService = dishService;
        this.baseURL = baseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService
            .getDishes()
            .subscribe(function (dishes) { return (_this.dishes = dishes); }, function (errmess) { return (_this.errMess = errmess); });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, Object])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFRdkQ7SUFJRSx1QkFDVSxXQUF3QixFQUNOLE9BQU87UUFEekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDTixZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQ2hDLENBQUM7SUFFSixnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVzthQUNiLFNBQVMsRUFBRTthQUNYLFNBQVMsQ0FDUixVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBdEIsQ0FBc0IsRUFDaEMsVUFBQSxPQUFPLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxDQUFDLEVBQTdCLENBQTZCLENBQ3pDLENBQUM7SUFDTixDQUFDO0lBaEJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7UUFPRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FERywwQkFBVztPQUx2QixhQUFhLENBaUJ6QjtJQUFELG9CQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVudScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc2hlczogRGlzaFtdO1xuICBlcnJNZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNoU2VydmljZTogRGlzaFNlcnZpY2UsXG4gICAgQEluamVjdCgnYmFzZVVSTCcpIHB1YmxpYyBiYXNlVVJMXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc2hTZXJ2aWNlXG4gICAgICAuZ2V0RGlzaGVzKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRpc2hlcyA9PiAodGhpcy5kaXNoZXMgPSBkaXNoZXMpLFxuICAgICAgICBlcnJtZXNzID0+ICh0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3MpXG4gICAgICApO1xuICB9XG59XG4iXX0=