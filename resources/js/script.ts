// Set Content function

// document.addEventListener("DOMContentLoaded")

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
locations.push(new Place("resources/img/highgate.jpg", "Highgate Cemetery", "London", "Swain's Lane", "N66PJ", new Date(2019, 11, 24)));
locations.push(new Place("resources/img/holyrood.jpg", "Holyrood Abbey", "Edinburgh", "Canongate 1", "8DX", new Date(2018, 1, 24)));

// restaurants
locations.push(new Restaurant("resources/img/lemonleaf.png", "Lemon Leaf", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 25), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/sixta.png", "Sixta", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 14), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/lemonleaf.png", "Lemon Leaf", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 25), "thai", "+43(1)5812308", "www.website.at"));
locations.push(new Restaurant("resources/img/sixta.png", "Sixta", "Vienna", "Kettenbrckengasse 18", "1050", new Date(2018, 11, 14), "thai", "+43(1)5812308", "www.website.at"));

//events




console.log(locations);
for(let iter in locations) {
	console.log(locations[iter]);
	locations[iter].display();
}
