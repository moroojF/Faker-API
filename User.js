const faker = require('faker');
class User {
    constructor() {
        this._id = faker.random.uuid();
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone_number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password(min_length = 10, max_length = 20, mix_case = true, special_characters = true);
    }
}