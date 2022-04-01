var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HotelRoom = /** @class */ (function () {
    function HotelRoom(HotelName, NumOfSqFeet, hasTv, hasWifi) {
        this.HotelName = HotelName;
        this.NumOfSqFeet = NumOfSqFeet;
        this.hasTv = hasTv;
        this.hasWifi = hasWifi;
    }
    HotelRoom.prototype.getHotelName = function () {
        return this.HotelName;
    };
    HotelRoom.prototype.getNumOfSqFeet = function () {
        return this.NumOfSqFeet;
    };
    HotelRoom.prototype.gethasTv = function () {
        return this.hasTv;
    };
    HotelRoom.prototype.gethasWifi = function () {
        return this.hasWifi;
    };
    HotelRoom.prototype.getRatePerSqFeet = function () {
        return 0;
    };
    HotelRoom.prototype.calculateTariff = function () {
        return (this.getRatePerSqFeet() * this.getNumOfSqFeet());
    };
    return HotelRoom;
}());
var DeluxeRoom = /** @class */ (function (_super) {
    __extends(DeluxeRoom, _super);
    function DeluxeRoom(HotelName, NumOfSqFeet, hasTv, hasWifi, RatePerSqFeet) {
        var _this = _super.call(this, HotelName, NumOfSqFeet, hasTv, hasWifi) || this;
        _this.RatePerSqFeet = 10;
        if (_this.hasWifi) {
            _this.RatePerSqFeet = _this.RatePerSqFeet + 2;
        }
        else {
            _this.RatePerSqFeet = _this.RatePerSqFeet;
        }
        return _this;
    }
    DeluxeRoom.prototype.getRatePerSqFeet = function () {
        return this.RatePerSqFeet;
    };
    return DeluxeRoom;
}(HotelRoom));
var DeluxeSeaViewRoom = /** @class */ (function (_super) {
    __extends(DeluxeSeaViewRoom, _super);
    function DeluxeSeaViewRoom(HotelName, NumOfSqFeet, hasTv, hasWifi) {
        return _super.call(this, HotelName, NumOfSqFeet, hasTv, hasWifi) || this;
    }
    return DeluxeSeaViewRoom;
}(HotelRoom));
var SuiteRoom = /** @class */ (function (_super) {
    __extends(SuiteRoom, _super);
    function SuiteRoom(HotelName, NumOfSqFeet, hasTv, hasWifi, RatePerSqFeet) {
        return _super.call(this, HotelName, NumOfSqFeet, hasTv, hasWifi) || this;
    }
    return SuiteRoom;
}(HotelRoom));
var d1 = new DeluxeRoom("Taj", 3200, true, true, 10);
console.log("Room Tariff per day is:" + d1.calculateTariff());
