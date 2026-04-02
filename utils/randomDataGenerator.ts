import { faker } from "@faker-js/faker";

export class RandomDataGeneratorUtils {

    static generateRandomFirstName(): string {
        return faker.person.firstName();
    }
    static generateRandomLastName(): string {
        return faker.person.lastName();
    }
    static generateRandomEmail(): string {
        return faker.internet.email();
    }
    static generateRandomTelephone(length: number): string {
        return faker.phone.number().slice(10, length);
    }
}