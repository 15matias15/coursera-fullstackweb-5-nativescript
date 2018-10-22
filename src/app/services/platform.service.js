"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var connectivity = require("connectivity");
var rxjs_1 = require("rxjs");
var DeviceInfo = /** @class */ (function () {
    function DeviceInfo(model, deviceType, os, osVersion, sdkVersion, language, manufacturer, uuid) {
        this.model = model;
        this.deviceType = deviceType;
        this.os = os;
        this.osVersion = osVersion;
        this.sdkVersion = sdkVersion;
        this.language = language;
        this.manufacturer = manufacturer;
        this.uuid = uuid;
    }
    return DeviceInfo;
}());
var ScreenInfo = /** @class */ (function () {
    function ScreenInfo(heightDIPs, heightPixels, scale, widthDIPs, widthPixels) {
        this.heightDIPs = heightDIPs;
        this.heightPixels = heightPixels;
        this.scale = scale;
        this.widthDIPs = widthDIPs;
        this.widthPixels = widthPixels;
    }
    return ScreenInfo;
}());
var PlatformService = /** @class */ (function () {
    function PlatformService() {
        this.deviceInformation = new DeviceInfo(platform_1.device.model, platform_1.device.deviceType, platform_1.device.os, platform_1.device.osVersion, platform_1.device.sdkVersion, platform_1.device.language, platform_1.device.manufacturer, platform_1.device.uuid);
        this.screenInformation = new ScreenInfo(platform_1.screen.mainScreen.heightDIPs, platform_1.screen.mainScreen.heightPixels, platform_1.screen.mainScreen.scale, platform_1.screen.mainScreen.widthDIPs, platform_1.screen.mainScreen.widthPixels);
        var connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                this.connectionType = 'None';
                break;
            case connectivity.connectionType.wifi:
                this.connectionType = 'Wi-Fi';
                break;
            case connectivity.connectionType.mobile:
                this.connectionType = 'Mobile';
                break;
            default:
                break;
        }
    }
    PlatformService.prototype.isAndroid = function () {
        return platform_1.isAndroid;
    };
    PlatformService.prototype.isIOS = function () {
        return platform_1.isIOS;
    };
    PlatformService.prototype.screenWidthDIP = function () {
        return this.screenInformation.widthDIPs;
    };
    PlatformService.prototype.networkConnectionType = function () {
        return this.connectionType;
    };
    PlatformService.prototype.startMonitoringNetwork = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            connectivity.startMonitoring(function (newConnectionType) {
                switch (newConnectionType) {
                    case connectivity.connectionType.none:
                        _this.connectionType = 'None';
                        observer.next('Connection type changed to none.');
                        break;
                    case connectivity.connectionType.wifi:
                        _this.connectionType = 'Wi-Fi';
                        observer.next('Connection type changed to WiFi.');
                        break;
                    case connectivity.connectionType.mobile:
                        _this.connectionType = 'Mobile';
                        observer.next('Connection type changed to mobile.');
                        break;
                    default:
                        break;
                }
            });
        });
    };
    PlatformService.prototype.stopMonitoringNetwork = function () {
        connectivity.stopMonitoring();
    };
    PlatformService.prototype.printPlatformInfo = function () {
        console.log('This device model is ' + this.deviceInformation.model);
        console.log('This device OS is ' +
            this.deviceInformation.os +
            ' ' +
            this.deviceInformation.osVersion);
        console.log('This device type is ' + this.deviceInformation.deviceType);
        console.log('This device screen size is ' +
            this.screenInformation.widthPixels +
            ' X ' +
            this.screenInformation.heightPixels +
            ' pixels');
        console.log('This device is connected to ' + this.connectionType);
    };
    PlatformService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PlatformService);
    return PlatformService;
}());
exports.PlatformService = PlatformService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXRmb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQTREO0FBQzVELDJDQUE2QztBQUM3Qyw2QkFBa0M7QUFFbEM7SUFDRSxvQkFDUyxLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsRUFBVSxFQUNWLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLFFBQWdCLEVBQ2hCLFlBQW9CLEVBQ3BCLElBQVk7UUFQWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNsQixDQUFDO0lBQ04saUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQUVEO0lBQ0Usb0JBQ1MsVUFBa0IsRUFDbEIsWUFBb0IsRUFDcEIsS0FBYSxFQUNiLFNBQWlCLEVBQ2pCLFdBQW1CO1FBSm5CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDekIsQ0FBQztJQUNOLGlCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFHRDtJQUtFO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksVUFBVSxDQUNyQyxpQkFBTSxDQUFDLEtBQUssRUFDWixpQkFBTSxDQUFDLFVBQVUsRUFDakIsaUJBQU0sQ0FBQyxFQUFFLEVBQ1QsaUJBQU0sQ0FBQyxTQUFTLEVBQ2hCLGlC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O1lBQ3pCLEdBQUc7WUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUNuQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FDVCw2QkFBNkI7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVc7WUFDbEMsS0FBSztZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO1lBQ25DLFNBQVMsQ0FDWixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQXJHVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQXNHM0I7SUFBRCxzQkFBQztDQUFBLEFBdEdELElBc0dDO0FBdEdZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgZGV2aWNlLCBzY3JlZW4gfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSAnY29ubmVjdGl2aXR5JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuY2xhc3MgRGV2aWNlSW5mbyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtb2RlbDogc3RyaW5nLFxuICAgIHB1YmxpYyBkZXZpY2VUeXBlOiBzdHJpbmcsXG4gICAgcHVibGljIG9zOiBzdHJpbmcsXG4gICAgcHVibGljIG9zVmVyc2lvbjogc3RyaW5nLFxuICAgIHB1YmxpYyBzZGtWZXJzaW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcsXG4gICAgcHVibGljIG1hbnVmYWN0dXJlcjogc3RyaW5nLFxuICAgIHB1YmxpYyB1dWlkOiBzdHJpbmdcbiAgKSB7fVxufVxuXG5jbGFzcyBTY3JlZW5JbmZvIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhlaWdodERJUHM6IG51bWJlcixcbiAgICBwdWJsaWMgaGVpZ2h0UGl4ZWxzOiBudW1iZXIsXG4gICAgcHVibGljIHNjYWxlOiBudW1iZXIsXG4gICAgcHVibGljIHdpZHRoRElQczogbnVtYmVyLFxuICAgIHB1YmxpYyB3aWR0aFBpeGVsczogbnVtYmVyXG4gICkge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU2VydmljZSB7XG4gIHB1YmxpYyBkZXZpY2VJbmZvcm1hdGlvbjogRGV2aWNlSW5mbztcbiAgcHVibGljIHNjcmVlbkluZm9ybWF0aW9uOiBTY3JlZW5JbmZvO1xuICBwdWJsaWMgY29ubmVjdGlvblR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRldmljZUluZm9ybWF0aW9uID0gbmV3IERldmljZUluZm8oXG4gICAgICBkZXZpY2UubW9kZWwsXG4gICAgICBkZXZpY2UuZGV2aWNlVHlwZSxcbiAgICAgIGRldmljZS5vcyxcbiAgICAgIGRldmljZS5vc1ZlcnNpb24sXG4gICAgICBkZXZpY2Uuc2RrVmVyc2lvbixcbiAgICAgIGRldmljZS5sYW5ndWFnZSxcbiAgICAgIGRldmljZS5tYW51ZmFjdHVyZXIsXG4gICAgICBkZXZpY2UudXVpZFxuICAgICk7XG5cbiAgICB0aGlzLnNjcmVlbkluZm9ybWF0aW9uID0gbmV3IFNjcmVlbkluZm8oXG4gICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzLFxuICAgICAgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzLFxuICAgICAgc2NyZWVuLm1haW5TY3JlZW4uc2NhbGUsXG4gICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMsXG4gICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVsc1xuICAgICk7XG5cbiAgICBsZXQgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKTtcbiAgICBzd2l0Y2ggKGNvbm5lY3Rpb25UeXBlKSB7XG4gICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gJ05vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLndpZmk6XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSAnV2ktRmknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9ICdNb2JpbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0FuZHJvaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgfVxuXG4gIHB1YmxpYyBpc0lPUygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNJT1M7XG4gIH1cblxuICBwdWJsaWMgc2NyZWVuV2lkdGhESVAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zY3JlZW5JbmZvcm1hdGlvbi53aWR0aERJUHM7XG4gIH1cblxuICBwdWJsaWMgbmV0d29ya0Nvbm5lY3Rpb25UeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblR5cGU7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRNb25pdG9yaW5nTmV0d29yaygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKChuZXdDb25uZWN0aW9uVHlwZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9ICdOb25lJztcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoJ0Nvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIG5vbmUuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9ICdXaS1GaSc7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KCdDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBXaUZpLicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9ICdNb2JpbGUnO1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCgnQ29ubmVjdGlvbiB0eXBlIGNoYW5nZWQgdG8gbW9iaWxlLicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9wTW9uaXRvcmluZ05ldHdvcmsoKSB7XG4gICAgY29ubmVjdGl2aXR5LnN0b3BNb25pdG9yaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgcHJpbnRQbGF0Zm9ybUluZm8oKSB7XG4gICAgY29uc29sZS5sb2coJ1RoaXMgZGV2aWNlIG1vZGVsIGlzICcgKyB0aGlzLmRldmljZUluZm9ybWF0aW9uLm1vZGVsKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdUaGlzIGRldmljZSBPUyBpcyAnICtcbiAgICAgICAgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5vcyArXG4gICAgICAgICcgJyArXG4gICAgICAgIHRoaXMuZGV2aWNlSW5mb3JtYXRpb24ub3NWZXJzaW9uXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZygnVGhpcyBkZXZpY2UgdHlwZSBpcyAnICsgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5kZXZpY2VUeXBlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdUaGlzIGRldmljZSBzY3JlZW4gc2l6ZSBpcyAnICtcbiAgICAgICAgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbi53aWR0aFBpeGVscyArXG4gICAgICAgICcgWCAnICtcbiAgICAgICAgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbi5oZWlnaHRQaXhlbHMgK1xuICAgICAgICAnIHBpeGVscydcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKCdUaGlzIGRldmljZSBpcyBjb25uZWN0ZWQgdG8gJyArIHRoaXMuY29ubmVjdGlvblR5cGUpO1xuICB9XG59XG4iXX0=