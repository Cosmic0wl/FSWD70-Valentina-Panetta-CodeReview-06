// Set Content function
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
// document.addEventListener("DOMContentLoaded")
// Parent Class
var Place = /** @class */ (function () {
    function Place(image, name, city, address, zipCode, date) {
        this.image = "";
        this.name = "";
        this.city = "";
        this.address = "";
        this.zipCode = "";
        this.date = new Date();
        this.image = image;
        this.name = name;
        this.city = city;
        this.address = address;
        this.zipCode = zipCode;
        this.date = date;
    }
    //get card function
    Place.prototype.getCard = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t\t\n\t\t\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\">" + this.address + " " + this.zipCode + "</p>\n    \t\t\t<p class=\"card-text\">" + this.city + "</p>\n    \t\t\t<p>" + this.date.toDateString() + "</p>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    // render function
    Place.prototype.display = function () {
        document.getElementById("places").innerHTML += this.getCard();
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
    //get card function
    Restaurant.prototype.getCard = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\">" + this.address + " " + this.zipCode + "</p>\n    \t\t\t<p class=\"card-text\">" + this.city + "</p>\n    \t\t\t<p class=\"card-text\">" + this.category + "</p>\n\t\t\t\t<p class=\"card-text\">" + this.telephone + "</p>\n\t\t\t\t<p class=\"card-text\">" + this.website + "</p>\n    \t\t\t<p class=\"card-text\">" + this.date.toDateString() + "</p>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    //render function
    Restaurant.prototype.display = function () {
        document.getElementById("restaurants").innerHTML += this.getCard();
    };
    return Restaurant;
}(Place));
var Concert = /** @class */ (function (_super) {
    __extends(Concert, _super);
    function Concert(image, name, city, address, zipCode, date, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, image, name, city, address, zipCode, date) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    //get card function
    Concert.prototype.getCard = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\">" + this.address + " " + this.zipCode + "</p>\n    \t\t\t<p class=\"card-text\">" + this.city + "</p>\n    \t\t\t<p class=\"card-text\">" + this.eventDate + ", " + this.eventTime + "</p>\n\t\t\t\t<p class=\"card-text\">" + this.ticketPrice + "</p>\n    \t\t\t<p class=\"card-text\">" + this.date.toDateString() + "</p>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    // render function
    Concert.prototype.display = function () {
        document.getElementById("events").innerHTML += this.getCard();
    };
    return Concert;
}(Place));
// Instances
var locations = [];
// places
locations.push(new Place("resources/img/cliffs.jpg", "Cliffs of Moher", "Linnascor", "County Clare", "037111", new Date(2018, 11, 24)));
locations.push(new Place("resources/img/skansen.jpg", "Skansen", "Stockholm", "Djurgårdsslätten 51", "11521", new Date(2017, 11, 24)));
locations.push(new Place("resources/img/highgate.jpg", "Highgate Cemetery", "London", "Swain's Lane", "N66PJ", new Date(2019, 11, 24)));
locations.push(new Place("resources/img/holyrood.jpg", "Holyrood Abbey", "Edinburgh", "Canongate 1", "8DX", new Date(2018, 1, 24)));
// restaurants
locations.push(new Restaurant("resources/img/lemonleaf.png", "Lemon Leaf", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 25), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/sixta.png", "Sixta", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 14), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/lemonleaf.png", "Lemon Leaf", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 25), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/sixta.png", "Sixta", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 14), "thai", "+43(1)5812308", "www.website.at"));
//events
console.log(locations);
for (var iter in locations) {
    console.log(locations[iter]);
    locations[iter].display();
}
