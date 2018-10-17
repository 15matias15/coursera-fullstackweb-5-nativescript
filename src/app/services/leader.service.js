"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var LeaderService = /** @class */ (function () {
    function LeaderService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.http
            .get(baseurl_1.baseURL + 'leaders')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.http
            .get(baseurl_1.baseURL + 'leaders/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.http
            .get(baseurl_1.baseURL + 'leaders?featured=true')
            .pipe(operators_1.map(function (leaders) { return leaders[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyw0Q0FBaUQ7QUFDakQsNkNBQStEO0FBQy9ELDZDQUE0QztBQUM1QyxxRUFBa0U7QUFLbEU7SUFDRSx1QkFDVSxJQUFnQixFQUNoQixxQkFBNEM7UUFENUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ25ELENBQUM7SUFFSixrQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFXLGlCQUFPLEdBQUcsU0FBUyxDQUFDO2FBQ2xDLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsRUFBVTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVMsaUJBQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO2FBQ3RDLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQVcsaUJBQU8sR0FBRyx1QkFBdUIsQ0FBQzthQUNoRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF2QlUsYUFBYTtRQUh6QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHZ0IsaUJBQVU7WUFDTywrQ0FBcUI7T0FIM0MsYUFBYSxDQXdCekI7SUFBRCxvQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGVhZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlXG4gICkge31cblxuICBnZXRMZWFkZXJzKCk6IE9ic2VydmFibGU8TGVhZGVyW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PExlYWRlcltdPihiYXNlVVJMICsgJ2xlYWRlcnMnKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xuICB9XG5cbiAgZ2V0TGVhZGVyKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPExlYWRlcj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8TGVhZGVyPihiYXNlVVJMICsgJ2xlYWRlcnMvJyArIGlkKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xuICB9XG5cbiAgZ2V0RmVhdHVyZWRMZWFkZXIoKTogT2JzZXJ2YWJsZTxMZWFkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PExlYWRlcltdPihiYXNlVVJMICsgJ2xlYWRlcnM/ZmVhdHVyZWQ9dHJ1ZScpXG4gICAgICAucGlwZShtYXAobGVhZGVycyA9PiBsZWFkZXJzWzBdKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcbiAgfVxufVxuIl19