// import Module

// Sorting function descending
function sortDescending() {
	locations.sort(function(post1: Place, post2: Place) {
		return post2.date.getTime() - post1.date.getTime();
	});
}

document.getElementById("descending").addEventListener("click", sortDescending, false);