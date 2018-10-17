"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var PromotionService = /** @class */ (function () {
    function PromotionService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.http
            .get(baseurl_1.baseURL + 'promotions')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.http
            .get(baseurl_1.baseURL + 'promotions/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.http
            .get(baseurl_1.baseURL + 'promotions?featured=true')
            .pipe(operators_1.map(function (promotions) { return promotions[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyw0Q0FBaUQ7QUFDakQsNkNBQStEO0FBQy9ELDZDQUE0QztBQUM1QyxxRUFBa0U7QUFLbEU7SUFDRSwwQkFDVSxJQUFnQixFQUNoQixxQkFBNEM7UUFENUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ25ELENBQUM7SUFFSix3Q0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFjLGlCQUFPLEdBQUcsWUFBWSxDQUFDO2FBQ3hDLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsRUFBVTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVksaUJBQU8sR0FBRyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQzVDLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWMsaUJBQU8sR0FBRywwQkFBMEIsQ0FBQzthQUN0RCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF2QlUsZ0JBQWdCO1FBSDVCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdnQixpQkFBVTtZQUNPLCtDQUFxQjtPQUgzQyxnQkFBZ0IsQ0F3QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb21vdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBwcm9jZXNzSFRUUE1zZ1NlcnZpY2U6IFByb2Nlc3NIVFRQTXNnU2VydmljZVxuICApIHt9XG5cbiAgZ2V0UHJvbW90aW9ucygpOiBPYnNlcnZhYmxlPFByb21vdGlvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxQcm9tb3Rpb25bXT4oYmFzZVVSTCArICdwcm9tb3Rpb25zJylcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcbiAgfVxuXG4gIGdldFByb21vdGlvbihpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFByb21vdGlvbj4oYmFzZVVSTCArICdwcm9tb3Rpb25zLycgKyBpZClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcbiAgfVxuXG4gIGdldEZlYXR1cmVkUHJvbW90aW9uKCk6IE9ic2VydmFibGU8UHJvbW90aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxQcm9tb3Rpb25bXT4oYmFzZVVSTCArICdwcm9tb3Rpb25zP2ZlYXR1cmVkPXRydWUnKVxuICAgICAgLnBpcGUobWFwKHByb21vdGlvbnMgPT4gcHJvbW90aW9uc1swXSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XG4gIH1cbn1cbiJdfQ==