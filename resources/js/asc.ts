// import Module
// import * from as myModule "./script";

// Sorting function ascending
function sortAscending() {
	locations.sort(function(post1: Place, post2: Place) {
		return post1.date.getTime() - post2.date.getTime();
	});
}
