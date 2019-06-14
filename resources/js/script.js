// Parent Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(image, name, city, address, zipCode, date) {
        this.image = "";
        this.name = "";
        this.city = "";
        this.address = "";
        this.zipCode = "";
        this.date = "";
        this.image = image;
        this.name = name;
        this.city = city;
        this.address = address;
        this.zipCode = zipCode;
        this.date = date;
    }
    // render function
    Place.prototype.display = function () {
        return document.getElementById("places").innerHTML +=
            "<div class=\"col-lg-3 col-md-6 col-sd-12\">\n\t\t\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\"> " + this.address + " " + this.zipCode + " " + this.city + "</p>\n    \t\t\t<p>" + this.date + "</p>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Place;
}());
// Child Classes
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(image, name, city, address, zipCode, date, category, telephone, website) {
        var _this = _super.call(this, image, name, city, address, zipCode, date) || this;
        _this.category = category;
        _this.telephone = telephone;
        _this.website = website;
        return _this;
    }
    // render function
    Restaurant.prototype.display = function () {
        return "<p></p>";
    };
    return Restaurant;
}(Place));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, name, city, address, zipCode, date, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, image, name, city, address, zipCode, date) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    // render function
    Events.prototype.display = function () {
        return "<p></p>";
    };
    return Events;
}(Place));
// Instances
var locations = [];
locations.push(new Place("resources/img/karlsplatz.jpg", "Karlsplatz", "Vienna", "Karlsplatz 1", "1010", "26 Feb 2019"));
locations.push(new Place("resources/img/tiergarten.jpg", "Tiergarten", "Vienna", "Maxingstraße 13b", "1130", "29 Feb 2019"));
locations.push(new Place("resources/img/karlsplatz.jpg", "Karlsplatz", "Vienna", "Karlsplatz 1", "1010", "26 Feb 2019"));
locations.push(new Place("resources/img/tiergarten.jpg", "Tiergarten", "Vienna", "Maxingstraße 13b", "1130", "29 Feb 2019"));
for (var iter in locations) {
    locations[iter].display();
}
