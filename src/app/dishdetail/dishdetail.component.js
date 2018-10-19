"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_toasty_1 = require("nativescript-toasty");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var Comment_component_1 = require("../Comment/Comment.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var gestures_1 = require("ui/gestures");
var color_1 = require("color");
var enums = require("ui/enums");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, route, routerExtensions, favoriteservice, fonticon, modalService, vcRef, baseURL, page) {
        this.dishservice = dishservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.baseURL = baseURL;
        this.page = page;
        this.favorite = false;
        this.showComments = false;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(operators_1.switchMap(function (params) { return _this.dishservice.getDish(params['id']); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.favorite = _this.favoriteservice.isFavorite(_this.dish.id);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return (total += comment.rating); });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) {
            _this.dish = null;
            _this.errMess = errmess;
        });
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
            var toast = new nativescript_toasty_1.Toasty('Added Dish ' + this.dish.id, 'short', 'bottom');
            toast.show();
        }
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent.prototype.openActionDialog = function () {
        var _this = this;
        var options = {
            title: 'Actions',
            cancelButtonText: 'Cancel',
            actions: ['Add to Favorites', 'Add Comment']
        };
        dialogs_1.action(options).then(function (result) {
            if (result === 'Add to Favorites') {
                _this.addToFavorites();
            }
            else {
                _this.createModalView();
            }
        });
    };
    DishdetailComponent.prototype.createModalView = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService
            .showModal(Comment_component_1.CommentComponent, options)
            .then(function (comment) {
            _this.dish.comments.push(comment);
        });
    };
    DishdetailComponent.prototype.onSwipe = function (args) {
        if (this.dish) {
            this.cardImage = this.page.getViewById('cardImage');
            this.cardLayout = this.page.getViewById('cardLayout');
            this.commentList = this.page.getViewById('commentList');
            if (args.direction === gestures_1.SwipeDirection.up && !this.showComments) {
                this.animateUp();
            }
            else if (args.direction === gestures_1.SwipeDirection.down && this.showComments) {
                this.showComments = false;
                this.animateDown();
            }
        }
    };
    DishdetailComponent.prototype.showAndHideComments = function () {
        this.cardImage = this.page.getViewById('cardImage');
        this.cardLayout = this.page.getViewById('cardLayout');
        this.commentList = this.page.getViewById('commentList');
        if (!this.showComments) {
            this.animateUp();
        }
        else if (this.showComments) {
            this.showComments = false;
            this.animateDown();
        }
    };
    DishdetailComponent.prototype.animateUp = function () {
        var _this = this;
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 0 },
            translate: { x: 0, y: -200 },
            opacity: 0,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color('#ffc107'),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet
            .play()
            .then(function () {
            _this.showComments = true;
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent.prototype.animateDown = function () {
        var definitions = new Array();
        var a1 = {
            target: this.cardImage,
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            opacity: 1,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a1);
        var a2 = {
            target: this.cardLayout,
            backgroundColor: new color_1.Color('#ffffff'),
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet
            .play()
            .then(function () { })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html',
            styleUrls: ['./dishdetail.component.css']
        }),
        __param(7, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef, Object, page_1.Page])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUc1RSx5REFBdUQ7QUFDdkQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCw0Q0FBMkM7QUFDM0MsaUVBQStEO0FBQy9ELHVFQUErRDtBQUMvRCwyREFBNkM7QUFDN0MsdURBQXFEO0FBQ3JELGtFQUcyQztBQUMzQyxrRUFBZ0U7QUFDaEUsZ0NBQStCO0FBQy9CLDBDQUE4RDtBQUU5RCx3Q0FBb0U7QUFDcEUsK0JBQThCO0FBQzlCLGdDQUFrQztBQVFsQztJQVlFLDZCQUNVLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxRQUE0QixFQUM1QixZQUFnQyxFQUNoQyxLQUF1QixFQUNMLE9BQU8sRUFDekIsSUFBVTtRQVJWLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNMLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWZwQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBZTNCLENBQUM7SUFFSixzQ0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNkLElBQUksQ0FDSCxxQkFBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxD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QW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7UUFxQkcsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBUEcsMEJBQVc7WUFDakIsdUJBQWM7WUFDSCx5QkFBZ0I7WUFDakIsa0NBQWU7WUFDdEIsOENBQWtCO1lBQ2QsaUNBQWtCO1lBQ3pCLHVCQUFnQixVQUVqQixXQUFJO09BckJULG1CQUFtQixDQTJLL0I7SUFBRCwwQkFBQztDQUFBLEFBM0tELElBMktDO0FBM0tZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncyc7XG5pbXBvcnQge1xuICBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gIE1vZGFsRGlhbG9nT3B0aW9uc1xufSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgQ29tbWVudENvbXBvbmVudCB9IGZyb20gJy4uL0NvbW1lbnQvQ29tbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSAndWkvYW5pbWF0aW9uJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAndWkvZW51bXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGlzaGRldGFpbCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlzaGRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc2g6IERpc2g7XG4gIGNvbW1lbnQ6IENvbW1lbnQ7XG4gIGVyck1lc3M6IHN0cmluZztcbiAgYXZnc3RhcnM6IHN0cmluZztcbiAgbnVtY29tbWVudHM6IG51bWJlcjtcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd0NvbW1lbnRzOiBib29sZWFuID0gZmFsc2U7XG4gIGNhcmRJbWFnZTogVmlldztcbiAgY29tbWVudExpc3Q6IFZpZXc7XG4gIGNhcmRMYXlvdXQ6IFZpZXc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgZmF2b3JpdGVzZXJ2aWNlOiBGYXZvcml0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHVibGljIGJhc2VVUkwsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaChwYXJhbXNbJ2lkJ10pKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGlzaCA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNoID0gZGlzaDtcbiAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuaXNGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xuICAgICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+ICh0b3RhbCArPSBjb21tZW50LnJhdGluZykpO1xuICAgICAgICAgIHRoaXMuYXZnc3RhcnMgPSAodG90YWwgLyB0aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJtZXNzID0+IHtcbiAgICAgICAgICB0aGlzLmRpc2ggPSBudWxsO1xuICAgICAgICAgIHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzcztcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZFRvRmF2b3JpdGVzKCkge1xuICAgIGlmICghdGhpcy5mYXZvcml0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ0FkZGluZyB0byBGYXZvcml0ZXMnLCB0aGlzLmRpc2guaWQpO1xuICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmFkZEZhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoJ0FkZGVkIERpc2ggJyArIHRoaXMuZGlzaC5pZCwgJ3Nob3J0JywgJ2JvdHRvbScpO1xuICAgICAgdG9hc3Quc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGdvQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG5cbiAgb3BlbkFjdGlvbkRpYWxvZygpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiAnQWN0aW9ucycsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgIGFjdGlvbnM6IFsnQWRkIHRvIEZhdm9yaXRlcycsICdBZGQgQ29tbWVudCddXG4gICAgfTtcblxuICAgIGFjdGlvbihvcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09PSAnQWRkIHRvIEZhdm9yaXRlcycpIHtcbiAgICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jcmVhdGVNb2RhbFZpZXcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1vZGFsVmlldygpIHtcbiAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMubW9kYWxTZXJ2aWNlXG4gICAgICAuc2hvd01vZGFsKENvbW1lbnRDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbigoY29tbWVudDogQ29tbWVudCkgPT4ge1xuICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaChjb21tZW50KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcbiAgICBpZiAodGhpcy5kaXNoKSB7XG4gICAgICB0aGlzLmNhcmRJbWFnZSA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PignY2FyZEltYWdlJyk7XG4gICAgICB0aGlzLmNhcmRMYXlvdXQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2NhcmRMYXlvdXQnKTtcbiAgICAgIHRoaXMuY29tbWVudExpc3QgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2NvbW1lbnRMaXN0Jyk7XG5cbiAgICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24udXAgJiYgIXRoaXMuc2hvd0NvbW1lbnRzKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5kb3duICYmIHRoaXMuc2hvd0NvbW1lbnRzKSB7XG4gICAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURvd24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93QW5kSGlkZUNvbW1lbnRzKCkge1xuICAgIHRoaXMuY2FyZEltYWdlID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KCdjYXJkSW1hZ2UnKTtcbiAgICB0aGlzLmNhcmRMYXlvdXQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2NhcmRMYXlvdXQnKTtcbiAgICB0aGlzLmNvbW1lbnRMaXN0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KCdjb21tZW50TGlzdCcpO1xuICAgIGlmICghdGhpcy5zaG93Q29tbWVudHMpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZVVwKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dDb21tZW50cykge1xuICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSBmYWxzZTtcbiAgICAgIHRoaXMuYW5pbWF0ZURvd24oKTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlVXAoKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcbiAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDAgfSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMjAwIH0sXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuXG4gICAgbGV0IGEyOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcignI2ZmYzEwNycpLFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTIpO1xuICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcbiAgICBhbmltYXRpb25TZXRcbiAgICAgIC5wbGF5KClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZURvd24oKSB7XG4gICAgbGV0IGRlZmluaXRpb25zID0gbmV3IEFycmF5PEFuaW1hdGlvbkRlZmluaXRpb24+KCk7XG4gICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xuICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRJbWFnZSxcbiAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICB9O1xuICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xuICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICAgIHRhcmdldDogdGhpcy5jYXJkTGF5b3V0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoJyNmZmZmZmYnKSxcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgfTtcbiAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcbiAgICBsZXQgYW5pbWF0aW9uU2V0ID0gbmV3IEFuaW1hdGlvbihkZWZpbml0aW9ucyk7XG4gICAgYW5pbWF0aW9uU2V0XG4gICAgICAucGxheSgpXG4gICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=