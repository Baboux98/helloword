"use strict";
exports.__esModule = true;
var MaDate = /** @class */ (function () {
    function MaDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    MaDate.prototype.getyear = function () {
        return this.year;
    };
    MaDate.prototype.setyear = function (year) {
        this.year = year;
    };
    MaDate.prototype.getmonth = function () {
        return this.month;
    };
    MaDate.prototype.setmonth = function (month) {
        this.month = month;
    };
    MaDate.prototype.getday = function () {
        return this.day;
    };
    MaDate.prototype.setday = function (day) {
        this.day = day;
    };
    MaDate.prototype.tostring = function () {
        return this.year + "-" + this.month + "-" + this.day;
    };
    MaDate.prototype.create = function (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        return this.year + "-" + this.month + "-" + this.day;
    };
    MaDate.prototype.setDate = function (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        return this.year + "-" + this.month + "-" + this.day;
    };
    MaDate.prototype.yesterday = function () {
        this.day = this.day - 1;
        return this.year + "-" + this.month + "-" + this.day;
    };
    MaDate.prototype.tomorrow = function () {
        this.day = this.day + 1;
        return this.year + "-" + this.month + "-" + (this.day + 1);
    };
    MaDate.prototype.addDay = function (nbrDay) {
        if (!nbrDay) {
            nbrDay = 1;
        }
        return this.year + "-" + this.month + "-" + (this.day + nbrDay);
    };
    MaDate.prototype.subDay = function (nbrDay) {
        if (!nbrDay) {
            nbrDay = 1;
        }
        return this.year + "-" + this.month + "-" + (this.day - nbrDay);
    };
    MaDate.prototype.addmonth = function (nbrmonth) {
        if (!nbrmonth) {
            nbrmonth = 1;
        }
        return this.year + "-" + (this.month + nbrmonth) + "-" + this.day;
    };
    MaDate.prototype.submonth = function (nbrmonth) {
        if (!nbrmonth) {
            nbrmonth = 1;
        }
        return this.year + "-" + (this.month - nbrmonth) + "-" + this.day;
    };
    MaDate.prototype.addyear = function (nbryear) {
        if (!nbryear) {
            nbryear = 1;
        }
        return (this.year + nbryear) + "-" + this.month + "-" + this.day;
    };
    MaDate.prototype.subyear = function (nbryear) {
        if (!nbryear) {
            nbryear = 1;
        }
        return (this.year - nbryear) + "-" + this.month + "-" + this.day;
    };
    return MaDate;
}());
exports.MaDate = MaDate;
