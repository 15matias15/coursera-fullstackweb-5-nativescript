"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var forms_1 = require("@angular/forms");
var page_1 = require("ui/page");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(params, page, formBuilder) {
        this.params = params;
        this.page = page;
        this.formBuilder = formBuilder;
        this.commentForm = this.formBuilder.group({
            author: ['', forms_1.Validators.required],
            comment: ['', forms_1.Validators.required],
            rating: [5, forms_1.Validators.required]
        });
    }
    CommentComponent.prototype.ngOnInit = function () { };
    CommentComponent.prototype.onAuthorChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ author: textField.text });
    };
    CommentComponent.prototype.onCommentChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ comment: textField.text });
    };
    CommentComponent.prototype.onRatingChange = function (args) {
        var slider = args.object;
        this.commentForm.patchValue({ rating: slider.value });
    };
    CommentComponent.prototype.onSubmit = function () {
        this.comment = this.commentForm.value;
        this.comment.date = new Date().toISOString();
        console.log(this.comment);
        this.params.closeCallback(this.comment);
    };
    CommentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './Comment.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page,
            forms_1.FormBuilder])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFDdEUsd0NBQW9FO0FBQ3BFLGdDQUErQjtBQVMvQjtJQUlFLDBCQUNVLE1BQXlCLEVBQ3pCLElBQVUsRUFDVixXQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYix5Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNqQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDbEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDakIsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXRDVSxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7eUNBTWtCLGdDQUFpQjtZQUNuQixXQUFJO1lBQ0csbUJBQVc7T0FQdkIsZ0JBQWdCLENBdUM1QjtJQUFELHVCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ3VpL3NsaWRlcic7XG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL0NvbW1lbnQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb21tZW50Rm9ybTogRm9ybUdyb3VwO1xuICBjb21tZW50OiBDb21tZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJcbiAgKSB7XG4gICAgdGhpcy5jb21tZW50Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgYXV0aG9yOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29tbWVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHJhdGluZzogWzUsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgb25BdXRob3JDaGFuZ2UoYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IGF1dGhvcjogdGV4dEZpZWxkLnRleHQgfSk7XG4gIH1cblxuICBvbkNvbW1lbnRDaGFuZ2UoYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IGNvbW1lbnQ6IHRleHRGaWVsZC50ZXh0IH0pO1xuICB9XG5cbiAgb25SYXRpbmdDaGFuZ2UoYXJncykge1xuICAgIGxldCBzbGlkZXIgPSA8U2xpZGVyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IHJhdGluZzogc2xpZGVyLnZhbHVlIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5jb21tZW50ID0gdGhpcy5jb21tZW50Rm9ybS52YWx1ZTtcbiAgICB0aGlzLmNvbW1lbnQuZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnQpO1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5jb21tZW50KTtcbiAgfVxufVxuIl19