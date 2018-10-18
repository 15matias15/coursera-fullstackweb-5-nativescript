"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var angular_1 = require("nativescript-ui-listview/angular");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogs_1 = require("ui/dialogs");
var nativescript_toasty_1 = require("nativescript-toasty");
var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoriteservice, baseURL) {
        this.favoriteservice = favoriteservice;
        this.baseURL = baseURL;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice
            .getFavorites()
            .subscribe(function (favorites) { return (_this.favorites = new observable_array_1.ObservableArray(favorites)); }, function (errmess) { return (_this.errMess = errmess); });
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        console.log('delete', id);
        var options = {
            title: 'Confirm Delete',
            message: 'Do you want to delete Dish ' + id,
            okButtonText: 'Yes',
            cancelButtonText: 'No',
            neutralButtonText: 'Cancel'
        };
        dialogs_1.confirm(options).then(function (result) {
            if (result) {
                _this.favorites = null;
                _this.favoriteservice.deleteFavorite(id).subscribe(function (favorites) {
                    var toast = new nativescript_toasty_1.Toasty('Deleted Dish ' + id, 'short', 'bottom');
                    toast.show();
                    _this.favorites = new observable_array_1.ObservableArray(favorites);
                }, function (errmess) { return (_this.errMess = errmess); });
            }
            else {
                console.log('Delete cancelled');
            }
        });
    };
    FavoritesComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x > 200) {
        }
        else if (args.data.x < -200) {
        }
    };
    FavoritesComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FavoritesComponent.prototype.onSwipeCellFinished = function (args) { };
    FavoritesComponent.prototype.onLeftSwipeClick = function (args) {
        console.log('Left swipe click');
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    FavoritesComponent.prototype.onRightSwipeClick = function (args) {
        this.deleteFavorite(args.object.bindingContext.id);
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FavoritesComponent.prototype, "listViewComponent", void 0);
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'app-favorites',
            moduleId: module.id,
            templateUrl: './favorites.component.html',
            styleUrls: ['./favorites.component.css']
        }),
        __param(1, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService, Object])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUVBQStEO0FBRy9ELDREQUF3RTtBQUN4RSwyRUFBeUU7QUFFekUsc0NBQXFDO0FBQ3JDLDJEQUE2QztBQVE3QztJQU9FLDRCQUNVLGVBQWdDLEVBQ2QsT0FBTztRQUR6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQ2hDLENBQUM7SUFFSixxQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsZUFBZTthQUNqQixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQ1IsVUFBQSxTQUFTLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQWpELENBQWlELEVBQzlELFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUF4QixDQUF3QixDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQXpCLGlCQTJCQztRQTFCQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxQixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLDZCQUE2QixHQUFHLEVBQUU7WUFDM0MsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixpQkFBaUIsRUFBRSxRQUFRO1NBQzVCLENBQUM7UUFFRixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWU7WUFDcEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxL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UyxDQUFDLENBQUE7eUNBRE8sa0NBQWU7T0FSL0Isa0JBQWtCLENBa0Y5QjtJQUFELHlCQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUFsRlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcnO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gJ3VpL2RpYWxvZ3MnO1xuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mYXZvcml0ZXMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vZmF2b3JpdGVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmYXZvcml0ZXM6IE9ic2VydmFibGVBcnJheTxEaXNoPjtcbiAgZXJyTWVzczogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ215TGlzdFZpZXcnKVxuICBsaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSxcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHVibGljIGJhc2VVUkxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmF2b3JpdGVzZXJ2aWNlXG4gICAgICAuZ2V0RmF2b3JpdGVzKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGZhdm9yaXRlcyA9PiAodGhpcy5mYXZvcml0ZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGZhdm9yaXRlcykpLFxuICAgICAgICBlcnJtZXNzID0+ICh0aGlzLmVyck1lc3MgPSBlcnJtZXNzKVxuICAgICAgKTtcbiAgfVxuXG4gIGRlbGV0ZUZhdm9yaXRlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlJywgaWQpO1xuXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgIG1lc3NhZ2U6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgRGlzaCAnICsgaWQsXG4gICAgICBva0J1dHRvblRleHQ6ICdZZXMnLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vJyxcbiAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgIH07XG5cbiAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5mYXZvcml0ZXNlcnZpY2UuZGVsZXRlRmF2b3JpdGUoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICBmYXZvcml0ZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KCdEZWxldGVkIERpc2ggJyArIGlkLCAnc2hvcnQnLCAnYm90dG9tJyk7XG4gICAgICAgICAgICB0b2FzdC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoZmF2b3JpdGVzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm1lc3MgPT4gKHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlIGNhbmNlbGxlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQ2VsbFN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgdmFyIGN1cnJlbnRJdGVtVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIHZhciBjdXJyZW50VmlldztcblxuICAgIGlmIChhcmdzLmRhdGEueCA+IDIwMCkge1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICB2YXIgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG5cbiAgICB2YXIgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21hcmstdmlldycpO1xuICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2RlbGV0ZS12aWV3Jyk7XG4gICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcbiAgfVxuXG4gIHB1YmxpYyBvblN3aXBlQ2VsbEZpbmlzaGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7fVxuXG4gIHB1YmxpYyBvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0xlZnQgc3dpcGUgY2xpY2snKTtcbiAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIHRoaXMuZGVsZXRlRmF2b3JpdGUoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQuaWQpO1xuICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICB9XG59XG4iXX0=