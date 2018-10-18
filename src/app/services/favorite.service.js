"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice) {
        this.dishservice = dishservice;
        this.favorites = [];
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id.toString(); });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id.toString());
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice
            .getDishes()
            .pipe(operators_1.map(function (dishes) {
            return dishes.filter(function (dish) {
                return _this.favorites.some(function (el) { return el === dish.id.toString(); });
            });
        }));
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id.toString());
        if (index >= 0) {
            this.favorites.splice(index, 1);
            return this.getFavorites();
        }
        else {
            return rxjs_1.throwError('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFHckM7SUFHRSx5QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBVUM7UUFUQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7YUFDcEIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUNILGVBQUcsQ0FBQyxVQUFBLE1BQU07WUFDUixPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJO2dCQUNoQixPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQXpCLENBQXlCLENBQUM7WUFBcEQsQ0FBb0QsQ0FDckQ7UUFGRCxDQUVDLENBQ0YsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLGlCQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsQ0FBQztJQXRDVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSXNCLDBCQUFXO09BSGpDLGVBQWUsQ0F1QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVNlcnZpY2Uge1xuICBmYXZvcml0ZXM6IEFycmF5PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UpIHtcbiAgICB0aGlzLmZhdm9yaXRlcyA9IFtdO1xuICB9XG5cbiAgaXNGYXZvcml0ZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IGlkLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgYWRkRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZXMucHVzaChpZC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRGYXZvcml0ZXMoKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNoc2VydmljZVxuICAgICAgLmdldERpc2hlcygpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGRpc2hlcyA9PlxuICAgICAgICAgIGRpc2hlcy5maWx0ZXIoZGlzaCA9PlxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gZGlzaC5pZC50b1N0cmluZygpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIGRlbGV0ZUZhdm9yaXRlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZmF2b3JpdGVzLmluZGV4T2YoaWQudG9TdHJpbmcoKSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ0RlbGV0aW5nIG5vbi1leGlzdGFudCBmYXZvcml0ZScpO1xuICAgIH1cbiAgfVxufVxuIl19