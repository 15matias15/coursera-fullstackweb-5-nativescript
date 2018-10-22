"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var camera = require("nativescript-camera");
var app = require("application");
var imagepicker = require("nativescript-imagepicker");
var UserAuthComponent = /** @class */ (function () {
    function UserAuthComponent(page, routerExtensions, formBuilder) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.formBuilder = formBuilder;
        this.tabSelectedIndex = 0;
        this.imageAssets = [];
        this.isSingleMode = true;
        this.thumbSize = 80;
        this.previewSize = 300;
        this.loginForm = this.formBuilder.group({
            userName: [application_settings_1.getString('userName', ''), forms_1.Validators.required],
            password: [application_settings_1.getString('password', ''), forms_1.Validators.required]
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            telnum: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
    }
    UserAuthComponent.prototype.ngOnInit = function () { };
    UserAuthComponent.prototype.takePicture = function () {
        var _this = this;
        var isAvailable = camera.isAvailable();
        if (isAvailable) {
            camera.requestPermissions();
            var options = {
                width: 100,
                height: 100,
                keepAspectRatio: false,
                saveToGallery: true
            };
            camera
                .takePicture(options)
                .then(function (imageAsset) {
                var image = _this.page.getViewById('myPicture');
                image.src = imageAsset;
            })
                .catch(function (err) { return console.log('Error -> ' + err.message); });
        }
    };
    UserAuthComponent.prototype.register = function () {
        this.tabSelectedIndex = 1;
    };
    UserAuthComponent.prototype.onLoginSubmit = function () {
        console.log(JSON.stringify(this.loginForm.value));
        application_settings_1.setString('userName', this.loginForm.get('userName').value);
        application_settings_1.setString('password', this.loginForm.get('password').value);
        this.routerExtensions.navigate(['/home'], { clearHistory: true });
    };
    UserAuthComponent.prototype.onRegisterSubmit = function () {
        console.log(JSON.stringify(this.registerForm.value));
        application_settings_1.setString('userName', this.registerForm.get('userName').value);
        application_settings_1.setString('password', this.registerForm.get('password').value);
        this.loginForm.patchValue({
            userName: this.registerForm.get('userName').value,
            password: this.registerForm.get('password').value
        });
        this.tabSelectedIndex = 0;
    };
    UserAuthComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    UserAuthComponent.prototype.getFromLibrary = function () {
        var _this = this;
        var context = imagepicker.create({
            mode: 'single'
        });
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            var image = _this.page.getViewById('myPicture');
            image.src = selection[0];
        })
            .catch(function (err) { return console.log('Error -> ' + err.message); });
    };
    UserAuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './userauth.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            forms_1.FormBuilder])
    ], UserAuthComponent);
    return UserAuthComponent;
}());
exports.UserAuthComponent = UserAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmF1dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmF1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQix3Q0FBb0U7QUFDcEUsNkRBQTREO0FBQzVELHNEQUErRDtBQUMvRCw0Q0FBOEM7QUFFOUMsaUNBQW1DO0FBRW5DLHNEQUF3RDtBQU14RDtJQVVFLDJCQUNVLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsV0FBd0I7UUFGeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFWbEMscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFPeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUMxRCxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUMzRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFB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a0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUFBLGlCQWVDO1FBZEMsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU87YUFDSixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUM7WUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDYixJQUFJLEtBQUssR0FBVSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBUSxXQUFXLENBQUMsQ0FBQztZQUM3RCxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBcEdVLGlCQUFpQjtRQUo3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDekMsQ0FBQzt5Q0FZZ0IsV0FBSTtZQUNRLHlCQUFnQjtZQUNyQixtQkFBVztPQWJ2QixpQkFBaUIsQ0FxRzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJHRCxJQXFHQztBQXJHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3VpL2ltYWdlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSAnbmF0aXZlc2NyaXB0LWltYWdlcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyYXV0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlckF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gIGltYWdlQXNzZXRzID0gW107XG4gIGltYWdlU3JjOiBhbnk7XG4gIGlzU2luZ2xlTW9kZTogYm9vbGVhbiA9IHRydWU7XG4gIHRodW1iU2l6ZTogbnVtYmVyID0gODA7XG4gIHByZXZpZXdTaXplOiBudW1iZXIgPSAzMDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuICApIHtcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdXNlck5hbWU6IFtnZXRTdHJpbmcoJ3VzZXJOYW1lJywgJycpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHBhc3N3b3JkOiBbZ2V0U3RyaW5nKCdwYXNzd29yZCcsICcnKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHVzZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB0ZWxudW06IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHRha2VQaWN0dXJlKCkge1xuICAgIGxldCBpc0F2YWlsYWJsZSA9IGNhbWVyYS5pc0F2YWlsYWJsZSgpO1xuICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgY2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICBrZWVwQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICBzYXZlVG9HYWxsZXJ5OiB0cnVlXG4gICAgICB9O1xuXG4gICAgICBjYW1lcmFcbiAgICAgICAgLnRha2VQaWN0dXJlKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKGltYWdlQXNzZXQgPT4ge1xuICAgICAgICAgIGxldCBpbWFnZSA9IDxJbWFnZT50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8SW1hZ2U+KCdteVBpY3R1cmUnKTtcbiAgICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZUFzc2V0O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciAtPiAnICsgZXJyLm1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xuICB9XG5cbiAgb25Mb2dpblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luRm9ybS52YWx1ZSkpO1xuXG4gICAgc2V0U3RyaW5nKCd1c2VyTmFtZScsIHRoaXMubG9naW5Gb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSk7XG4gICAgc2V0U3RyaW5nKCdwYXNzd29yZCcsIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSk7XG5cbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIG9uUmVnaXN0ZXJTdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZWdpc3RlckZvcm0udmFsdWUpKTtcblxuICAgIHNldFN0cmluZygndXNlck5hbWUnLCB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ3VzZXJOYW1lJykudmFsdWUpO1xuICAgIHNldFN0cmluZygncGFzc3dvcmQnLCB0aGlzLnJlZ2lzdGVyRm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUpO1xuXG4gICAgdGhpcy5sb2dpbkZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICB1c2VyTmFtZTogdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCd1c2VyTmFtZScpLnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMucmVnaXN0ZXJGb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIGdldEZyb21MaWJyYXJ5KCkge1xuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICAgIG1vZGU6ICdzaW5nbGUnXG4gICAgfSk7XG5cbiAgICBjb250ZXh0XG4gICAgICAuYXV0aG9yaXplKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNlbGVjdGlvbiA9PiB7XG4gICAgICAgIGxldCBpbWFnZSA9IDxJbWFnZT50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8SW1hZ2U+KCdteVBpY3R1cmUnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gc2VsZWN0aW9uWzBdO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIC0+ICcgKyBlcnIubWVzc2FnZSkpO1xuICB9XG59XG4iXX0=