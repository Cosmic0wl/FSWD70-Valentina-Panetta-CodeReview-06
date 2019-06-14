// Parent Class

class Place {
	image = "";
	name = "";
	city = "";
	address = ""
	zipCode = "";
	date = "";
	
	constructor(image, name, city, address, zipCode, date) {
		this.image = image;
		this.name = name;
		this.city = city;
		this.address = address;
		this.zipCode = zipCode;
		this.date = date;
	}

	// render function
	display() {
		return document.getElementById("places").innerHTML += 
				`<div class="col-lg-3 col-md-6 col-sd-12">
				<div class="card">
  				<img class="card-img-top" src=${this.image} alt="location">
  				<div class="card-body">
    			<h5 class="card-title">${this.name}</h5>
    			<p class="card-text"> ${this.address} ${this.zipCode} ${this.city}</p>
    			<p>${this.date}</p>
  				</div>
				</div>
				</div>`;
	}
}

// Child Classes

class Restaurant extends Place {
	category;
	telephone;
	website;
	constructor(image, name, city, address, zipCode, date, category, telephone, website) {
		super(image, name, city, address, zipCode, date);
		this.category = category;
		this.telephone = telephone;
		this.website = website;
	}

	// render function
	display() {
		return `<p></p>`;
	}
}

class Events extends Place {
	eventDate;
	eventTime;
	ticketPrice;
	constructor(image, name, city, address, zipCode, date, eventDate, eventTime, ticketPrice) {
		super(image, name, city, address, zipCode, date);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}

	// render function
	display() {
		return `<p></p>`;
	}
}

// Instances


var locations = [];
locations.push(new Place("resources/img/karlsplatz.jpg", "Karlsplatz", "Vienna", "Karlsplatz 1", "1010", "26 Feb 2019"));
locations.push(new Place("resources/img/tiergarten.jpg", "Tiergarten", "Vienna", "Maxingstraße 13b", "1130", "29 Feb 2019"));
locations.push(new Place("resources/img/karlsplatz.jpg", "Karlsplatz", "Vienna", "Karlsplatz 1", "1010", "26 Feb 2019"));
locations.push(new Place("resources/img/tiergarten.jpg", "Tiergarten", "Vienna", "Maxingstraße 13b", "1130", "29 Feb 2019"));

for(var iter in locations) {
	locations[iter].display();
}
