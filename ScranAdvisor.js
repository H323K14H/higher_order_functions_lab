const ScranAdvisor = function (restaurants) {
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.count = function (restaurants) {
    return restaurants.length;
}

ScranAdvisor.prototype.getByName = function (name) {
    let targetRestaurant = null;
    this.restaurants.forEach((restaurant) => {
        if (restaurant.name === name) {
            targetRestaurant = restaurant;
        }
    });
    return targetRestaurant;
}


module.exports = ScranAdvisor;