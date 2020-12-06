const faker = require('faker');
class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {};
        this.address["street"] = faker.address.streetName();
        this.address["city"] = faker.address.city();
        this.address["state"] = faker.address.state();
        this.address["zip_code"] = faker.address.zipCode();
        this.address["country"] = faker.address.country();
    }
}

module.exports = Company;