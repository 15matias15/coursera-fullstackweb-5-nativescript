"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var couchbase_service_1 = require("./couchbase.service");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
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
            nativescript_local_notifications_1.LocalNotifications.schedule([
                {
                    id: id,
                    title: 'ConFusion Favorites',
                    body: 'Dish ' + id + ' added successfully'
                }
            ]).then(function () { return console.log('Notification scheduled'); }, function (error) { return console.log('Error showing nofication ' + error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFDckMseURBQXVEO0FBQ3ZELHFGQUFzRTtBQUd0RTtJQUlFLHlCQUNVLFdBQXdCLEVBQ3hCLGdCQUFrQztRQURsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSjVDLFVBQUssR0FBVyxXQUFXLENBQUM7UUFNMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDL0MsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztZQUNILHFEQUFrQixDQUFDLFFBQVEsQ0FBQztnQkFDMUI7b0JBQ0UsRUFBRSxFQUFFLEVBQUU7b0JBQ04sS0FBSyxFQUFFLHFCQUFxQjtvQkFDNUIsSUFBSSxFQUFFLE9BQU8sR0FBRyxFQUFFLEdBQUcscUJBQXFCO2lCQUMzQzthQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBckMsQ0FBcUMsRUFDM0MsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQyxFQUFoRCxDQUFnRCxDQUMxRCxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUFBLGlCQVVDO1FBVEMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO2FBQ3BCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1IsT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtnQkFDaEIsT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUF6QixDQUF5QixDQUFDO1lBQXBELENBQW9ELENBQ3JEO1FBRkQsQ0FFQyxDQUNGLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsRUFBVTtRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQy9DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUFqRVUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU1ZLDBCQUFXO1lBQ04sb0NBQWdCO09BTmpDLGVBQWUsQ0FrRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9jb3VjaGJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlU2VydmljZSB7XG4gIGZhdm9yaXRlczogQXJyYXk8c3RyaW5nPjtcbiAgZG9jSWQ6IHN0cmluZyA9ICdmYXZvcml0ZXMnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgY291Y2hiYXNlU2VydmljZTogQ291Y2hiYXNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmZhdm9yaXRlcyA9IFtdO1xuICAgIGxldCBkb2MgPSB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuZ2V0RG9jdW1lbnQodGhpcy5kb2NJZCk7XG4gICAgaWYgKGRvYyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuY3JlYXRlRG9jdW1lbnQoeyBmYXZvcml0ZXM6IFtdIH0sIHRoaXMuZG9jSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZhdm9yaXRlcyA9IGRvYy5mYXZvcml0ZXM7XG4gICAgfVxuICB9XG5cbiAgaXNGYXZvcml0ZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IGlkLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgYWRkRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZXMucHVzaChpZC50b1N0cmluZygpKTtcbiAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7XG4gICAgICAgIGZhdm9yaXRlczogdGhpcy5mYXZvcml0ZXNcbiAgICAgIH0pO1xuICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB0aXRsZTogJ0NvbkZ1c2lvbiBGYXZvcml0ZXMnLFxuICAgICAgICAgIGJvZHk6ICdEaXNoICcgKyBpZCArICcgYWRkZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICAgICB9XG4gICAgICBdKS50aGVuKFxuICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnTm90aWZpY2F0aW9uIHNjaGVkdWxlZCcpLFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2hvd2luZyBub2ZpY2F0aW9uICcgKyBlcnJvcilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRGYXZvcml0ZXMoKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNoc2VydmljZVxuICAgICAgLmdldERpc2hlcygpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGRpc2hlcyA9PlxuICAgICAgICAgIGRpc2hlcy5maWx0ZXIoZGlzaCA9PlxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gZGlzaC5pZC50b1N0cmluZygpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIGRlbGV0ZUZhdm9yaXRlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZmF2b3JpdGVzLmluZGV4T2YoaWQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcbiAgICAgICAgZmF2b3JpdGVzOiB0aGlzLmZhdm9yaXRlc1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ0RlbGV0aW5nIG5vbi1leGlzdGFudCBmYXZvcml0ZScpO1xuICAgIH1cbiAgfVxufVxuIl19