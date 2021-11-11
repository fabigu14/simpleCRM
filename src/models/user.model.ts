export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    address: string;
    city: string;
    postalCode: number;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.address = obj ? obj.address : '';
        this.city = obj ? obj.city : '';
        this.postalCode = obj ? obj.postalCode : '';
    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            address: this.address,
            city: this.city,
            postalCode: this.postalCode
        };
    }
}