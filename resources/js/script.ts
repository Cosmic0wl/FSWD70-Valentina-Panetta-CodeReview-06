// Parent Class

class Place {
	image: string = "";
	name: string = "";
	city: string = "";
	address: string = ""
	zipCode: string = "";
	date: Date = new Date();
	
	constructor(image, name, city, address, zipCode, date) {
		this.image = image;
		this.name = name;
		this.city = city;
		this.address = address;
		this.zipCode = zipCode;
		this.date = date;
	}

	// Returns content
	getCard(): string {
		return `<div class="col-lg-3 col-md-6 col-sm-12 my-2">
				<div class="card">
  				<img class="card-img-top d-none d-sm-none d-md-block" src=${this.image} alt="location">
  				<div class="card-body">
    			<h5 class="card-title">${this.name}</h5>
    			<p class="card-text"><small><i class="fa fa-map-marker darkpink-text"></i> ${this.address} ${this.zipCode}, ${this.city}</small></p>
    			<small>Created: ${this.date.toDateString()}</small>
  				</div>
				</div>
				</div>`;
	}

	// Render function
	display(): void {
		document.getElementById("places").innerHTML += this.getCard();
	}
}

// Child Classes

class Restaurant extends Place {
	category: string;
	telephone: string;
	website: string;
	constructor(image, name, city, address, zipCode, date, category, telephone, website) {
		super(image, name, city, address, zipCode, date);
		this.category = category;
		this.telephone = telephone;
		this.website = website;
	}

	// Returns content
	getCard(): string {
		return `<div class="col-lg-3 col-md-6 col-sm-12 my-2">
		<div class="card">
  				<img class="card-img-top d-none d-sm-none d-md-block" src=${this.image} alt="location">
  				<div class="card-body">
    			<h5 class="card-title">${this.name}</h5>
    			<p class="card-text"><small><i class="fa fa-map-marker darkpink-text"></i> ${this.address} ${this.zipCode}, ${this.city}</small></p>
    			<p class="card-text"><i class="fa fa-star darkpink-text"></i> ${this.category}</p>
				<p class="card-text"><i class="fa fa-phone darkpink-text"></i> ${this.telephone}</p>
				<p class="card-text"><a href="${this.website}" target="_blank" class="card-link darkpink-text"><i class="fa fa-laptop darkpink-text"></i> Go to Website</a></p>
    			<small>Created: ${this.date.toDateString()}</small>
  				</div>
				</div>
				</div>`;
	}

	// Render function
	display(): void {
		document.getElementById("restaurants").innerHTML += this.getCard();	
	}
}

class Concert extends Place {
	venue: string;
	eventDate: string;
	eventTime: string;
	ticketPrice: string;
	constructor(image, name, city, address, zipCode, date, venue, eventDate, eventTime, ticketPrice) {
		super(image, name, city, address, zipCode, date);
		this.venue = venue;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}

	// Returns content
	getCard(): string {
		return `<div class="col-lg-3 col-md-6 col-sm-12 my-2">
		<div class="card">
  				<img class="card-img-top d-none d-sm-none d-md-block" src=${this.image} alt="location">
  				<div class="card-body">
    			<h5 class="card-title">${this.name}</h5>
    			<p class="card-text"><i class="fa fa-music darkpink-text"></i> ${this.venue}</p>
    			<p class="card-text"><small><i class="fa fa-map-marker darkpink-text"></i> ${this.address} ${this.zipCode}, ${this.city}</small></p>
    			<p class="card-text"><i class="fa fa-calendar darkpink-text"></i> ${this.eventDate}, ${this.eventTime}</p>
				<p class="card-text"><i class="fa fa-money darkpink-text"></i> ${this.ticketPrice}€</p>
    			<small>Created: ${this.date.toDateString()}</small>
  				</div>
				</div>
				</div>`;
	}

	// Render function
	display(): void {
		document.getElementById("events").innerHTML += this.getCard();
	}
}

// Instances

let locations: Array<Place> = [];

// Places
locations.push(new Place("resources/img/cliffs.jpg", "Cliffs of Moher", "County Clare", "Linnascor", "037111", new Date(2018, 11, 24)));
locations.push(new Place("resources/img/skeppsholmen.jpg", "Skeppsholmen Island", "Stockholm", "Skeppsholmen", "11149", new Date(2017, 11, 24)));
locations.push(new Place("resources/img/highgate.jpg", "Highgate Cemetery", "London", "Swain's Lane", "N66PJ", new Date(2019, 7, 12)));
locations.push(new Place("resources/img/holyrood.jpg", "Holyrood Abbey", "Edinburgh", "Canongate", "8DX", new Date(2018, 1, 24)));

// Restaurants
locations.push(new Restaurant("resources/img/peggyporschen.jpg", "Peggy Porschen", "London", "116 Ebury St", "SW1W", new Date(2019, 3, 25), "Bakery", " +44 20 7730 1316", "https://www.peggyporschen.com"));
locations.push(new Restaurant("resources/img/milkinsta.jpg", "Milk Train", "London", "12 Tavistock St", "WC2E", new Date(2019, 3, 4), "Ice Cream Parlor", "+44 20 7670 1316", "https://www.milktraincafe.com"));
locations.push(new Restaurant("resources/img/bao.jpeg", "BAO Soho", "London", "53 Lexington St", "W1F", new Date(2017, 3, 25), "Taiwanese", "+44 90 7870 5316", "https://baolondon.com/"));
locations.push(new Restaurant("resources/img/saint.jpg", "Saint Aymes", "London", "231 Ebury St", "SW1W", new Date(2017, 11, 14), "Coffee Shop", "+44 20 7262 1185", "https://www.instagram.com/saintaymes/?hl=en"));

// Events
locations.push(new Concert("resources/img/hozier.jpg", "Hozier", "Vienna", "Lothringerstraße 20", "1030", new Date(2019, 3, 17), "Wiener Konzerthaus", "10 Sep 2019", "8pm", "from 50"));
locations.push(new Concert("resources/img/mitski.jpg", "Mitski", "Vienna", "Augartenbrücke 1", "1010", new Date(2019, 8, 17), "Flex", "13 Aug 2019", "8pm", "from 30"));
locations.push(new Concert("resources/img/weyes.jpg", "Weyes Blood", "Berlin", "Schlesisches Tor", "10977", new Date(2016, 3, 17), "Bi Nuu", "26 Oct 2019", "8pm", "from 30"));
locations.push(new Concert("resources/img/florence.jpg", "Florence and the Machine", "London", "Hyde Park", "142ha", new Date(2017, 3, 17), "Hyde Park", "13 Jul 2019", "8pm", "from 50"));


// Sorts instances in ascending order in their category
function sortAscending() {
    locations.sort(function(post1: Place, post2: Place) {
        return post1.date.getTime() - post2.date.getTime();
    });
}

// Sorts instances in descending order in their category
function sortDescending() {
	locations.sort(function(post1: Place, post2: Place) {
		return post2.date.getTime() - post1.date.getTime();
	});
}

// Retrieves current window path and executes sortAscending or sortDescending based on the path

var currentPath = window.location.pathname;
var currentPage = currentPath.split("/").pop();

if (currentPage == "index_asc.html") {
	sortAscending();
} else if (currentPage == "index_desc.html") {
	sortDescending();
}

// Executes display() on every instance of the array

for(let iter in locations) {
	locations[iter].display();
}





