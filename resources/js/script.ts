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

	//get card function
	getCard(): string {
		return `<div class="col-lg-3 col-md-6 col-sm-12">
				<div class="card">
  				<img class="card-img-top" src=${this.image} alt="location">
  				<div class="card-body">
    			<h5 class="card-title">${this.name}</h5>
    			<p class="card-text">${this.address} ${this.zipCode}</p>
    			<p class="card-text">${this.city}</p>
    			<p>${this.date.toDateString()}</p>
  				</div>
				</div>
				</div>`;
	}

	// render function
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

	//get card function
	getCard(): string {
		return `<div class="col-lg-3 col-md-6 col-sm-12">
		<div class="card">
  				<img class="card-img-top" src=${this.image} alt="location">
  				<div class="card-body">
    			<h5 class="card-title">${this.name}</h5>
    			<p class="card-text">${this.address} ${this.zipCode}</p>
    			<p class="card-text">${this.city}</p>
    			<p class="card-text">${this.category}</p>
				<p class="card-text">${this.telephone}</p>
				<p class="card-text">${this.website}</p>
    			<p class="card-text">${this.date.toDateString()}</p>
  				</div>
				</div>
				</div>`;
	}

	//render function
	display(): void {
		document.getElementById("restaurants").innerHTML += this.getCard();
		
	}
}

class Concert extends Place {
	eventDate: string;
	eventTime: string;
	ticketPrice: string;
	constructor(image, name, city, address, zipCode, date, eventDate, eventTime, ticketPrice) {
		super(image, name, city, address, zipCode, date);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}

	//get card function
	getCard(): string {
		return `<div class="col-lg-3 col-md-6 col-sm-12">
		<div class="card">
  				<img class="card-img-top" src=${this.image} alt="location">
  				<div class="card-body">
    			<h5 class="card-title">${this.name}</h5>
    			<p class="card-text">${this.address} ${this.zipCode}</p>
    			<p class="card-text">${this.city}</p>
    			<p class="card-text">${this.eventDate}, ${this.eventTime}</p>
				<p class="card-text">${this.ticketPrice}</p>
    			<p class="card-text">${this.date.toDateString()}</p>
  				</div>
				</div>
				</div>`;
	}

	// render function
	display(): void {
		document.getElementById("events").innerHTML += this.getCard();
	}
}

// Instances

let locations: Array<Place> = [];

// places
locations.push(new Place("resources/img/cliffs.jpg", "Cliffs of Moher", "Linnascor", "County Clare", "037111", new Date(2018, 11, 24)));
locations.push(new Place("resources/img/skansen.jpg", "Skansen", "Stockholm", "Djurgårdsslätten 51", "11521", new Date(2017, 11, 24)));
locations.push(new Place("resources/img/highgate.jpg", "Highgate Cemetery", "London", "Swain's Lane", "N66PJ", new Date(2019, 7, 12)));
locations.push(new Place("resources/img/holyrood.jpg", "Holyrood Abbey", "Edinburgh", "Canongate", "8DX", new Date(2018, 1, 24)));

// restaurants
locations.push(new Restaurant("resources/img/peggy.jpg", "Peggy Porschen", "London", "116 Ebury St", "SW1W", new Date(2019, 3, 25), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/milktrain.jpg", "Milk Train", "London", "12 Tavistock St", "WC2E", new Date(2019, 3, 4), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/bao.jpeg", "BAO Soho", "London", "53 Lexington St", "W1F", new Date(2017, 3, 25), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/poule.jpg", "La Poule au Pot", "London", "231 Ebury St", "SW1W", new Date(2017, 11, 14), "thai", "+43(1)5812308", "www.website.at"));

// events
locations.push(new Concert("resources/img/hozier.jpg", "Hozier", "Vienna", "Wiener Konzerthaus", "1030", new Date(2019, 3, 17), "22 febbraio 2019", "8pm", "from 50 euro"));
locations.push(new Concert("resources/img/mitski.jpg", "Mitski", "Vienna", "Flex", "1010", new Date(2019, 8, 17), "22 febbraio 2019", "8pm", "from 50 euro"));
locations.push(new Concert("resources/img/weyes.jpg", "Weyes Blood", "Vienna", "Flex", "1010", new Date(2016, 3, 17), "22 febbraio 2019", "8pm", "from 50 euro"));
locations.push(new Concert("resources/img/florence.jpg", "Florence and the Machine", "Vienna", "Flex", "1010", new Date(2017, 3, 17), "22 febbraio 2019", "8pm", "from 50 euro"));


// Sorting function ascending
function sortAscending() {
    locations.sort(function(post1: Place, post2: Place) {
        return post1.date.getTime() - post2.date.getTime();
    });
}

// Sorting function descending
function sortDescending() {
	locations.sort(function(post1: Place, post2: Place) {
		return post2.date.getTime() - post1.date.getTime();
	});
}

var currentPath = window.location.pathname;
var currentPage = currentPath.split("/").pop();

if (currentPage == "index_asc.html") {
	sortAscending();
} else if (currentPage == "index_desc.html") {
	sortDescending();
}

// renders in html

for(let iter in locations) {
	locations[iter].display();
}





