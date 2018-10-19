"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchbaseService = /** @class */ (function () {
    function CouchbaseService() {
        this.database = new nativescript_couchbase_1.Couchbase('confusion');
    }
    CouchbaseService.prototype.getDatabase = function () {
        return this.database;
    };
    CouchbaseService.prototype.getDocument = function (docId) {
        return this.database.getDocument(docId);
    };
    CouchbaseService.prototype.createDocument = function (data, docId) {
        return this.database.createDocument(data, docId);
    };
    CouchbaseService.prototype.updateDocument = function (docId, data) {
        return this.database.updateDocument(docId, data);
    };
    CouchbaseService.prototype.deleteDocument = function (docId) {
        return this.database.deleteDocument(docId);
    };
    CouchbaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseService);
    return CouchbaseService;
}());
exports.CouchbaseService = CouchbaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hiYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VjaGJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFHbkQ7SUFHRTtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxzQ0FBVyxHQUFsQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxzQ0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsSUFBUyxFQUFFLEtBQWE7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLElBQVM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQXpCVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTs7T0FDQSxnQkFBZ0IsQ0EwQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tICduYXRpdmVzY3JpcHQtY291Y2hiYXNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdWNoYmFzZVNlcnZpY2Uge1xuICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKCdjb25mdXNpb24nKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREb2N1bWVudChkb2NJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuZ2V0RG9jdW1lbnQoZG9jSWQpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZURvY3VtZW50KGRhdGE6IGFueSwgZG9jSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmNyZWF0ZURvY3VtZW50KGRhdGEsIGRvY0lkKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVEb2N1bWVudChkb2NJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS51cGRhdGVEb2N1bWVudChkb2NJZCwgZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlRG9jdW1lbnQoZG9jSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmRlbGV0ZURvY3VtZW50KGRvY0lkKTtcbiAgfVxufVxuIl19