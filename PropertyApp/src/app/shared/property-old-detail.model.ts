export class Property {
    id:number;
    address:Address;
    financial: Financial;
    physical: Physical;
    grossYield: number;

    constructor(){
        this.grossYield = (this.financial.monthlyRent * 12)/this.financial.monthlyRent;
    }
}
export class Address {
    address1:string;
    address2:string;
    city:string;
    country:string;
    county:string;
    district:string;
    state:string;
    zip:string;
    zipPlus4:string;
}

export class Financial  {
    listPrice : number;
    monthlyRent: number;
}

export class Physical {
    yearBuilt:number;
}
