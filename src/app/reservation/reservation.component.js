"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var enums = require("ui/enums");
var page_1 = require("ui/page");
var couchbase_service_1 = require("../services/couchbase.service");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var app = require("application");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(formBuilder, modalService, page, couchbaseService, vcRef) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.page = page;
        this.couchbaseService = couchbaseService;
        this.vcRef = vcRef;
        this.showSubmission = false;
        this.docId = 'reservations';
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
        this.reservationSubmission = {
            guests: 3,
            smoking: 'No',
            dateTime: ''
        };
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
        this.reservationSubmission = this.reservation.value;
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ reservations: [this.reservationSubmission] }, this.docId);
        }
        else {
            this.reservations = doc.reservations;
            this.reservations.push(this.reservationSubmission);
            this.couchbaseService.updateDocument(this.docId, {
                reservations: this.reservations
            });
        }
        if (this.reservationSubmission.smoking) {
            this.reservationSubmission.smoking = 'Yes';
        }
        else {
            this.reservationSubmission.smoking = 'No';
        }
        this.animateForm();
    };
    ReservationComponent.prototype.animateForm = function () {
        this.formView = this.page.getViewById('formView');
        this.formView.animate({
            target: this.formView,
            scale: { x: 0, y: 0 },
            translate: { x: 0, y: -2000 },
            opacity: 1,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        });
        this.submissionView = this.page.getViewById('submissionView');
        this.submissionView.animate({
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 2500,
            curve: enums.AnimationCurve.easeIn
        });
        this.showSubmission = true;
    };
    ReservationComponent.prototype.createModalView = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };
        this.modalService
            .showModal(reservationmodal_component_1.ReservationModalComponent, options)
            .then(function (result) {
            if (args === 'guest') {
                _this.reservation.patchValue({ guests: result });
            }
            else if (args === 'date-time') {
                _this.reservation.patchValue({ dateTime: result });
            }
        });
    };
    ReservationComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html',
            styleUrls: ['./reservation.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            modal_dialog_1.ModalDialogService,
            page_1.Page,
            couchbase_service_1.CouchbaseService,
            core_1.ViewContainerRef])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBTXVCO0FBQ3ZCLHdDQUFvRTtBQUNwRSxrRUFHMkM7QUFHM0MsZ0NBQWtDO0FBRWxDLGdDQUErQjtBQUMvQixtRUFBaUU7QUFDakUsNkZBQTJGO0FBRzNGLGlDQUFtQztBQVFuQztJQVNFLDhCQUNVLFdBQXdCLEVBQ3hCLFlBQWdDLEVBQ2hDLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsS0FBdUI7UUFKdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBWmpDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBS2hDLFVBQUssR0FBVyxjQUFjLENBQUM7UUFTN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsR0FBRztZQUMzQixNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0osQ0FBQztJQUVELHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsK0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxhQUFhLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFD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QUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQWpIVSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzt5Q0FXdUIsbUJBQVc7WUFDVixpQ0FBa0I7WUFDMUIsV0FBSTtZQUNRLG9DQUFnQjtZQUMzQix1QkFBZ0I7T0FkdEIsb0JBQW9CLENBa0hoQztJQUFELDJCQUFDO0NBQUEsQUFsSEQsSUFrSEM7QUFsSFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICBNb2RhbERpYWxvZ09wdGlvbnNcbn0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3VpL2VudW1zJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgQ291Y2hiYXNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvdWNoYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZXNlcnZhdGlvbm1vZGFsL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2VydmF0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL3Jlc2VydmF0aW9uJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZXNlcnZhdGlvbicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNlcnZhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlc2VydmF0aW9uOiBGb3JtR3JvdXA7XG4gIHNob3dTdWJtaXNzaW9uOiBib29sZWFuID0gZmFsc2U7XG4gIGZvcm1WaWV3OiBWaWV3O1xuICBzdWJtaXNzaW9uVmlldzogVmlldztcbiAgcmVzZXJ2YXRpb25TdWJtaXNzaW9uOiBhbnk7XG4gIHJlc2VydmF0aW9uczogUmVzZXJ2YXRpb25bXTtcbiAgZG9jSWQ6IHN0cmluZyA9ICdyZXNlcnZhdGlvbnMnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgY291Y2hiYXNlU2VydmljZTogQ291Y2hiYXNlU2VydmljZSxcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIHRoaXMucmVzZXJ2YXRpb24gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGd1ZXN0czogMyxcbiAgICAgIHNtb2tpbmc6IGZhbHNlLFxuICAgICAgZGF0ZVRpbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLnJlc2VydmF0aW9uU3VibWlzc2lvbiA9IHtcbiAgICAgIGd1ZXN0czogMyxcbiAgICAgIHNtb2tpbmc6ICdObycsXG4gICAgICBkYXRlVGltZTogJydcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uU21va2luZ0NoZWNrZWQoYXJncykge1xuICAgIGxldCBzbW9raW5nU3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcbiAgICBpZiAoc21va2luZ1N3aXRjaC5jaGVja2VkKSB7XG4gICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvbkd1ZXN0Q2hhbmdlKGFyZ3MpIHtcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcbiAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBndWVzdHM6IHRleHRGaWVsZC50ZXh0IH0pO1xuICB9XG5cbiAgb25EYXRlVGltZUNoYW5nZShhcmdzKSB7XG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4gICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZGF0ZVRpbWU6IHRleHRGaWVsZC50ZXh0IH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5yZXNlcnZhdGlvblN1Ym1pc3Npb24gPSB0aGlzLnJlc2VydmF0aW9uLnZhbHVlO1xuICAgIGxldCBkb2MgPSB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuZ2V0RG9jdW1lbnQodGhpcy5kb2NJZCk7XG4gICAgaWYgKGRvYyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuY3JlYXRlRG9jdW1lbnQoXG4gICAgICAgIHsgcmVzZXJ2YXRpb25zOiBbdGhpcy5yZXNlcnZhdGlvblN1Ym1pc3Npb25dIH0sXG4gICAgICAgIHRoaXMuZG9jSWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzZXJ2YXRpb25zID0gZG9jLnJlc2VydmF0aW9ucztcbiAgICAgIHRoaXMucmVzZXJ2YXRpb25zLnB1c2godGhpcy5yZXNlcnZhdGlvblN1Ym1pc3Npb24pO1xuICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcbiAgICAgICAgcmVzZXJ2YXRpb25zOiB0aGlzLnJlc2VydmF0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2VydmF0aW9uU3VibWlzc2lvbi5zbW9raW5nKSB7XG4gICAgICB0aGlzLnJlc2VydmF0aW9uU3VibWlzc2lvbi5zbW9raW5nID0gJ1llcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzZXJ2YXRpb25TdWJtaXNzaW9uLnNtb2tpbmcgPSAnTm8nO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGVGb3JtKCk7XG4gIH1cblxuICBhbmltYXRlRm9ybSgpIHtcbiAgICB0aGlzLmZvcm1WaWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KCdmb3JtVmlldycpO1xuICAgIHRoaXMuZm9ybVZpZXcuYW5pbWF0ZSh7XG4gICAgICB0YXJnZXQ6IHRoaXMuZm9ybVZpZXcsXG4gICAgICBzY2FsZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTIwMDAgfSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgIH0pO1xuICAgIHRoaXMuc3VibWlzc2lvblZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ3N1Ym1pc3Npb25WaWV3Jyk7XG4gICAgdGhpcy5zdWJtaXNzaW9uVmlldy5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDI1MDAsXG4gICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfSk7XG4gICAgdGhpcy5zaG93U3VibWlzc2lvbiA9IHRydWU7XG4gIH1cblxuICBjcmVhdGVNb2RhbFZpZXcoYXJncykge1xuICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgY29udGV4dDogYXJncyxcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLm1vZGFsU2VydmljZVxuICAgICAgLnNob3dNb2RhbChSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChhcmdzID09PSAnZ3Vlc3QnKSB7XG4gICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZ3Vlc3RzOiByZXN1bHQgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncyA9PT0gJ2RhdGUtdGltZScpIHtcbiAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBkYXRlVGltZTogcmVzdWx0IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxufVxuIl19