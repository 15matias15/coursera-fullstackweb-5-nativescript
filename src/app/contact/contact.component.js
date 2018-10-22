"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
var TNSPhone = require("nativescript-phone");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fonticon) {
        this.fonticon = fonticon;
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.sendEmail = function () {
        Email.available().then(function (avail) {
            if (avail) {
                Email.compose({
                    to: ['confusion@food.net'],
                    subject: '[ConFusion]: Query',
                    body: 'Dear Sir/Madam:'
                });
            }
            else
                console.log('No Email Configured');
        });
    };
    ContactComponent.prototype.callRestaurant = function () {
        TNSPhone.requestCallPermission()
            .then(function () { return TNSPhone.dial('+56985964901', false); })
            .catch(function () { return TNSPhone.dial('+56985964901', true); });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1RUFBK0Q7QUFDL0QsMENBQTRDO0FBQzVDLDZDQUErQztBQVEvQztJQUNFLDBCQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtJQUFHLENBQUM7SUFFcEQsbUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYixvQ0FBUyxHQUFUO1FBQ0UsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWM7WUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixJQUFJLEVBQUUsaUJBQWlCO2lCQUN4QixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSTtnQkFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTthQUM3QixJQUFJLENBQUMsY0FBTSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUFDO2FBQ2hELEtBQUssQ0FBQyxjQUFNLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBckJVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FFOEIsOENBQWtCO09BRHJDLGdCQUFnQixDQXNCNUI7SUFBRCx1QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCAqIGFzIEVtYWlsIGZyb20gJ25hdGl2ZXNjcmlwdC1lbWFpbCc7XG5pbXBvcnQgKiBhcyBUTlNQaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29udGFjdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgc2VuZEVtYWlsKCkge1xuICAgIEVtYWlsLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoYXZhaWwpIHtcbiAgICAgICAgRW1haWwuY29tcG9zZSh7XG4gICAgICAgICAgdG86IFsnY29uZnVzaW9uQGZvb2QubmV0J10sXG4gICAgICAgICAgc3ViamVjdDogJ1tDb25GdXNpb25dOiBRdWVyeScsXG4gICAgICAgICAgYm9keTogJ0RlYXIgU2lyL01hZGFtOidcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgY29uc29sZS5sb2coJ05vIEVtYWlsIENvbmZpZ3VyZWQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGxSZXN0YXVyYW50KCkge1xuICAgIFROU1Bob25lLnJlcXVlc3RDYWxsUGVybWlzc2lvbigpXG4gICAgICAudGhlbigoKSA9PiBUTlNQaG9uZS5kaWFsKCcrNTY5ODU5NjQ5MDEnLCBmYWxzZSkpXG4gICAgICAuY2F0Y2goKCkgPT4gVE5TUGhvbmUuZGlhbCgnKzU2OTg1OTY0OTAxJywgdHJ1ZSkpO1xuICB9XG59XG4iXX0=