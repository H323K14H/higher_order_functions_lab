const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.count = function(restaurants) {
    return restaurants.length;
}

module.exports = ScranAdvisor;