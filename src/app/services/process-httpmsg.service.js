"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProcessHTTPMsgService = /** @class */ (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = error.status + " - " + (error.statusText || '') + " " + error.message;
        }
        return rxjs_1.throwError(errMsg);
    };
    ProcessHTTPMsgService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());
exports.ProcessHTTPMsgService = ProcessHTTPMsgService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9jZXNzLWh0dHBtc2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2QkFBa0M7QUFNbEM7SUFDRTtJQUFlLENBQUM7SUFFVCwyQ0FBVyxHQUFsQixVQUFtQixLQUE4QjtRQUMvQyxJQUFJLE1BQWMsQ0FBQztRQUVuQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQy9CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxZQUFNLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxVQUFJLEtBQUssQ0FBQyxPQUFTLENBQUM7UUFDMUUsQ0FBQztRQUVELE1BQU0sQ0FBQyxpQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFiVSxxQkFBcUI7UUFIakMsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1cscUJBQXFCLENBY2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSB8IGFueSkge1xuICAgIGxldCBlcnJNc2c6IHN0cmluZztcblxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgIGVyck1zZyA9IGVycm9yLmVycm9yLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH1cblxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVyck1zZyk7XG4gIH1cbn1cbiJdfQ==