"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var ReservationModalComponent = /** @class */ (function () {
    function ReservationModalComponent(params, page) {
        this.params = params;
        this.page = page;
        this.guestArray = [1, 2, 3, 4, 5, 6];
        this.isDateTime = false;
        if (params.context === 'guest') {
            this.isDateTime = false;
        }
        else if (params.context === 'date-time') {
            this.isDateTime = true;
        }
    }
    ReservationModalComponent.prototype.ngOnInit = function () {
        if (this.isDateTime) {
            var datePicker = (this.datePickerElement.nativeElement);
            console.log(datePicker);
            var currentdate = new Date();
            datePicker.year = currentdate.getFullYear();
            datePicker.month = currentdate.getMonth() + 1;
            datePicker.day = currentdate.getDate() + 1;
            datePicker.minDate = currentdate;
            datePicker.maxDate = new Date(2045, 4, 12);
            var timePicker = (this.timePickerElement.nativeElement);
            timePicker.hour = currentdate.getHours();
            timePicker.minute = currentdate.getMinutes();
        }
    };
    ReservationModalComponent.prototype.submit = function () {
        if (this.isDateTime) {
            var datePicker = (this.datePickerElement.nativeElement);
            var selectedDate = datePicker.date;
            var timePicker = (this.timePickerElement.nativeElement);
            var selectedTime = timePicker.time;
            var reserveTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes());
            this.params.closeCallback(reserveTime.toISOString());
        }
        else {
            var picker = this.guestPickerElement.nativeElement;
            this.params.closeCallback(this.guestArray[picker.selectedIndex]);
        }
    };
    __decorate([
        core_1.ViewChild('datePicker'),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "datePickerElement", void 0);
    __decorate([
        core_1.ViewChild('timePicker'),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "timePickerElement", void 0);
    __decorate([
        core_1.ViewChild('guestPicker'),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "guestPickerElement", void 0);
    ReservationModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './reservationmodal.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], ReservationModalComponent);
    return ReservationModalComponent;
}());
exports.ReservationModalComponent = ReservationModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFJdEUsZ0NBQStCO0FBTS9CO0lBV0UsbUNBQW9CLE1BQXlCLEVBQVUsSUFBVTtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFWakUsZUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBUzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLFVBQVUsR0FBMkIsQ0FDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FDckMsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEIsSUFBSSxXQUFXLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxVQUFVLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUzQyxJQUFJLFVBQVUsR0FBMkIsQ0FDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FDckMsQ0FBQztZQUNGLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRU0sMENBQU0sR0FBYjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksVUFBVSxHQUEyQixDQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUNyQyxDQUFDO1lBQ0YsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLFVBQVUsR0FBMkIsQ0FDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FDckMsQ0FBQztZQUNGLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQ3hCLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFDMUIsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUN2QixZQUFZLENBQUMsT0FBTyxFQUFFLEVBQ3RCLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFDdkIsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUMxQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7SUFDSCxDQUFDO0lBM0REO1FBREMsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQ0wsaUJBQVU7d0VBQUM7SUFFOUI7UUFEQyxnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FDTCxpQkFBVTt3RUFBQztJQUU5QjtRQURDLGdCQUFTLENBQUMsYUFBYSxDQUFDO2tDQUNMLGlCQUFVO3lFQUFDO0lBVHBCLHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7U0FDakQsQ0FBQzt5Q0FZNEIsZ0NBQWlCLEVBQWdCLFdBQUk7T0FYdEQseUJBQXlCLENBaUVyQztJQUFELGdDQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3VpL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICd1aS90aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSAndWkvbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBndWVzdEFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xuICBndWVzdHM6IG51bWJlcjtcbiAgaXNEYXRlVGltZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdkYXRlUGlja2VyJylcbiAgZGF0ZVBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RpbWVQaWNrZXInKVxuICB0aW1lUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZ3Vlc3RQaWNrZXInKVxuICBndWVzdFBpY2tlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICBpZiAocGFyYW1zLmNvbnRleHQgPT09ICdndWVzdCcpIHtcbiAgICAgIHRoaXMuaXNEYXRlVGltZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmNvbnRleHQgPT09ICdkYXRlLXRpbWUnKSB7XG4gICAgICB0aGlzLmlzRGF0ZVRpbWUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzRGF0ZVRpbWUpIHtcbiAgICAgIGxldCBkYXRlUGlja2VyOiBEYXRlUGlja2VyID0gPERhdGVQaWNrZXI+KFxuICAgICAgICB0aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGVQaWNrZXIpO1xuXG4gICAgICBsZXQgY3VycmVudGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgZGF0ZVBpY2tlci55ZWFyID0gY3VycmVudGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGRhdGVQaWNrZXIubW9udGggPSBjdXJyZW50ZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgIGRhdGVQaWNrZXIuZGF5ID0gY3VycmVudGRhdGUuZ2V0RGF0ZSgpICsgMTtcbiAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IGN1cnJlbnRkYXRlO1xuICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xuXG4gICAgICBsZXQgdGltZVBpY2tlcjogVGltZVBpY2tlciA9IDxUaW1lUGlja2VyPihcbiAgICAgICAgdGhpcy50aW1lUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgICApO1xuICAgICAgdGltZVBpY2tlci5ob3VyID0gY3VycmVudGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgIHRpbWVQaWNrZXIubWludXRlID0gY3VycmVudGRhdGUuZ2V0TWludXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNEYXRlVGltZSkge1xuICAgICAgbGV0IGRhdGVQaWNrZXI6IERhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj4oXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgKTtcbiAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBkYXRlUGlja2VyLmRhdGU7XG4gICAgICBsZXQgdGltZVBpY2tlcjogVGltZVBpY2tlciA9IDxUaW1lUGlja2VyPihcbiAgICAgICAgdGhpcy50aW1lUGlja2VyRWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgICApO1xuICAgICAgbGV0IHNlbGVjdGVkVGltZSA9IHRpbWVQaWNrZXIudGltZTtcbiAgICAgIGxldCByZXNlcnZlVGltZSA9IG5ldyBEYXRlKFxuICAgICAgICBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgc2VsZWN0ZWREYXRlLmdldE1vbnRoKCksXG4gICAgICAgIHNlbGVjdGVkRGF0ZS5nZXREYXRlKCksXG4gICAgICAgIHNlbGVjdGVkVGltZS5nZXRIb3VycygpLFxuICAgICAgICBzZWxlY3RlZFRpbWUuZ2V0TWludXRlcygpXG4gICAgICApO1xuICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXNlcnZlVGltZS50b0lTT1N0cmluZygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPnRoaXMuZ3Vlc3RQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMuZ3Vlc3RBcnJheVtwaWNrZXIuc2VsZWN0ZWRJbmRleF0pO1xuICAgIH1cbiAgfVxufVxuIl19