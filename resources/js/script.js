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
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\">" + this.address + " " + this.zipCode + "</p>\n    \t\t\t<p class=\"card-text\">" + this.city + "</p>\n    \t\t\t<small>Created: " + this.date.toDateString() + "</small>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
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
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\">" + this.address + " " + this.zipCode + "</p>\n    \t\t\t<p class=\"card-text\">" + this.city + "</p>\n    \t\t\t<p class=\"card-text\">" + this.category + "</p>\n\t\t\t\t<p class=\"card-text\">" + this.telephone + "</p>\n\t\t\t\t<p class=\"card-text\"><a href=\"" + this.website + "\" target=\"_blank\" class=\"card-link\">Go to Website</a></p>\n    \t\t\t<small>Created: " + this.date.toDateString() + "</small>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
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
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t<div class=\"card\">\n  \t\t\t\t<img class=\"card-img-top\" src=" + this.image + " alt=\"location\">\n  \t\t\t\t<div class=\"card-body\">\n    \t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n    \t\t\t<p class=\"card-text\">" + this.address + " " + this.zipCode + "</p>\n    \t\t\t<p class=\"card-text\">" + this.city + "</p>\n    \t\t\t<p class=\"card-text\">" + this.eventDate + ", " + this.eventTime + "</p>\n\t\t\t\t<p class=\"card-text\">" + this.ticketPrice + "\u20AC</p>\n    \t\t\t<small>Created: " + this.date.toDateString() + "</small>\n  \t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
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
locations.push(new Place("resources/img/skeppsholmen.jpg", "Skeppsholmen", "Stockholm", "Djurgårdsslätten 51", "11521", new Date(2017, 11, 24)));
locations.push(new Place("resources/img/highgate.jpg", "Highgate Cemetery", "London", "Swain's Lane", "N66PJ", new Date(2019, 7, 12)));
locations.push(new Place("resources/img/holyrood.jpg", "Holyrood Abbey", "Edinburgh", "Canongate", "8DX", new Date(2018, 1, 24)));
// restaurants
locations.push(new Restaurant("resources/img/peggyporschen.jpg", "Peggy Porschen", "London", "116 Ebury St", "SW1W", new Date(2019, 3, 25), "Bakery", "+43(1)5812308", "https://www.peggyporschen.com"));
locations.push(new Restaurant("resources/img/milkinsta.jpg", "Milk Train", "London", "12 Tavistock St", "WC2E", new Date(2019, 3, 4), "Ice Cream Parlor", "+43(1)5812308", "https://www.milktraincafe.com"));
locations.push(new Restaurant("resources/img/bao.jpeg", "BAO Soho", "London", "53 Lexington St", "W1F", new Date(2017, 3, 25), "Taiwanese", "+43(1)5812308", "https://baolondon.com/"));
locations.push(new Restaurant("resources/img/saint.jpg", "Saint Aymes", "London", "231 Ebury St", "SW1W", new Date(2017, 11, 14), "Coffee Shop", "+43(1)5812308", "https://www.instagram.com/saintaymes/?hl=en"));
// events
locations.push(new Concert("resources/img/hozier.jpg", "Hozier", "Vienna", "Wiener Konzerthaus", "1030", new Date(2019, 3, 17), "10 Sep 2019", "8pm", "from 50"));
locations.push(new Concert("resources/img/mitski.jpg", "Mitski", "Vienna", "Flex", "1010", new Date(2019, 8, 17), "13 Aug 2019", "8pm", "from 30"));
locations.push(new Concert("resources/img/weyes.jpg", "Weyes Blood", "Berlin", "Bi Nuu", "10977", new Date(2016, 3, 17), "26 Oct 2019", "8pm", "from 30"));
locations.push(new Concert("resources/img/florence.jpg", "Florence and the Machine", "London", "Hyde Park", "142ha", new Date(2017, 3, 17), "13 Jul 2019", "8pm", "from 50"));
// Sorting function ascending
function sortAscending() {
    locations.sort(function (post1, post2) {
        return post1.date.getTime() - post2.date.getTime();
    });
}
// Sorting function descending
function sortDescending() {
    locations.sort(function (post1, post2) {
        return post2.date.getTime() - post1.date.getTime();
    });
}
var currentPath = window.location.pathname;
var currentPage = currentPath.split("/").pop();
if (currentPage == "index_asc.html") {
    sortAscending();
}
else if (currentPage == "index_desc.html") {
    sortDescending();
}
// renders in html
for (var iter in locations) {
    locations[iter].display();
}
