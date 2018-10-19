"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var couchbase_service_1 = require("./couchbase.service");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = 'favorites';
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ favorites: [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id.toString(); });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id.toString());
            this.couchbaseService.updateDocument(this.docId, {
                favorites: this.favorites
            });
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
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseService.updateDocument(this.docId, {
                favorites: this.favorites
            });
            return this.getFavorites();
        }
        else {
            return rxjs_1.throwError('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFDckMseURBQXVEO0FBR3ZEO0lBSUUseUJBQ1UsV0FBd0IsRUFDeEIsZ0JBQWtDO1FBRGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKNUMsVUFBSyxHQUFXLFdBQVcsQ0FBQztRQU0xQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMvQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQVVDO1FBVEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO2FBQ3BCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1IsT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtnQkFDaEIsT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUF6QixDQUF5QixDQUFDO1lBQXBELENBQW9ELENBQ3JEO1FBRkQsQ0FFQyxDQUNGLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsRUFBVTtRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQy9DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUF2RFUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU1ZLDBCQUFXO1lBQ04sb0NBQWdCO09BTmpDLGVBQWUsQ0F3RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9jb3VjaGJhc2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVNlcnZpY2Uge1xuICBmYXZvcml0ZXM6IEFycmF5PHN0cmluZz47XG4gIGRvY0lkOiBzdHJpbmcgPSAnZmF2b3JpdGVzJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSxcbiAgICBwcml2YXRlIGNvdWNoYmFzZVNlcnZpY2U6IENvdWNoYmFzZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5mYXZvcml0ZXMgPSBbXTtcbiAgICBsZXQgZG9jID0gdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmdldERvY3VtZW50KHRoaXMuZG9jSWQpO1xuICAgIGlmIChkb2MgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHsgZmF2b3JpdGVzOiBbXSB9LCB0aGlzLmRvY0lkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mYXZvcml0ZXMgPSBkb2MuZmF2b3JpdGVzO1xuICAgIH1cbiAgfVxuXG4gIGlzRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBpZC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGFkZEZhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaXNGYXZvcml0ZShpZCkpIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVzLnB1c2goaWQudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2NJZCwge1xuICAgICAgICBmYXZvcml0ZXM6IHRoaXMuZmF2b3JpdGVzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgIHJldHVybiB0aGlzLmRpc2hzZXJ2aWNlXG4gICAgICAuZ2V0RGlzaGVzKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoZGlzaGVzID0+XG4gICAgICAgICAgZGlzaGVzLmZpbHRlcihkaXNoID0+XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlRmF2b3JpdGUoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGlzaFtdPiB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpZCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2NJZCwge1xuICAgICAgICBmYXZvcml0ZXM6IHRoaXMuZmF2b3JpdGVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmdldEZhdm9yaXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcignRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=