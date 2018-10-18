"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
    }
    ReservationComponent.prototype.ngOnInit = function () { };
    ReservationComponent.prototype.onSmokingChecked = function (args) {
        var smokingSwitch = args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    };
    ReservationComponent.prototype.onGuestChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ guests: textField.text });
    };
    ReservationComponent.prototype.onDateTimeChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ dateTime: textField.text });
    };
    ReservationComponent.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.reservation.value));
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html',
            styleUrls: ['./reservation.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBR3JFLHdDQUFvRTtBQVFwRTtJQUdFLDhCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsK0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxhQUFhLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBbENVLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDO3lDQUlpQyxtQkFBVztPQUhqQyxvQkFBb0IsQ0FtQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZXNlcnZhdGlvbicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNlcnZhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlc2VydmF0aW9uOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLnJlc2VydmF0aW9uID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBndWVzdHM6IDMsXG4gICAgICBzbW9raW5nOiBmYWxzZSxcbiAgICAgIGRhdGVUaW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgb25TbW9raW5nQ2hlY2tlZChhcmdzKSB7XG4gICAgbGV0IHNtb2tpbmdTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xuICAgIGlmIChzbW9raW5nU3dpdGNoLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uR3Vlc3RDaGFuZ2UoYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGd1ZXN0czogdGV4dEZpZWxkLnRleHQgfSk7XG4gIH1cblxuICBvbkRhdGVUaW1lQ2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcbiAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBkYXRlVGltZTogdGV4dEZpZWxkLnRleHQgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlc2VydmF0aW9uLnZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==