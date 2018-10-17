"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var DishService = /** @class */ (function () {
    function DishService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishService.prototype.getDishes = function () {
        return this.http
            .get(baseurl_1.baseURL + 'dishes')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getDish = function (id) {
        return this.http
            .get(baseurl_1.baseURL + 'dishes/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.http
            .get(baseurl_1.baseURL + 'dishes?featured=true')
            .pipe(operators_1.map(function (dishes) { return dishes[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLDRDQUFpRDtBQUNqRCw2Q0FBK0Q7QUFDL0QsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQUtsRTtJQUNFLHFCQUNVLElBQWdCLEVBQ2hCLHFCQUE0QztRQUQ1QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDbkQsQ0FBQztJQUVKLCtCQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVMsaUJBQU8sR0FBRyxRQUFRLENBQUM7YUFDL0IsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBTyxpQkFBTyxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDbkMsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVMsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQzthQUM3QyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsQ0FBQyxDQUFDO2FBQzlCLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF2QlUsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHZ0IsaUJBQVU7WUFDTywrQ0FBcUI7T0FIM0MsV0FBVyxDQXdCdkI7SUFBRCxrQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpc2hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldERpc2hlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8RGlzaFtdPihiYXNlVVJMICsgJ2Rpc2hlcycpXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XG4gIH1cblxuICBnZXREaXNoKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpc2g+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PERpc2g+KGJhc2VVUkwgKyAnZGlzaGVzLycgKyBpZClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcbiAgfVxuXG4gIGdldEZlYXR1cmVkRGlzaCgpOiBPYnNlcnZhYmxlPERpc2g+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PERpc2hbXT4oYmFzZVVSTCArICdkaXNoZXM/ZmVhdHVyZWQ9dHJ1ZScpXG4gICAgICAucGlwZShtYXAoZGlzaGVzID0+IGRpc2hlc1swXSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XG4gIH1cbn1cbiJdfQ==