export class PropertyDetail {
    id:number;
    address1:string;
    address2:string;
    city:string;
    country:string;
    county:string;
    district:string;
    state:string;
    zip:string;
    zipPlus4:string;
    yearBuilt:number;
    listPrice: number;
    monthlyRent:number;
    grossYield:number;

    constructor(){
        this.id=0;
        this.address1='';
        this.address2='';
        this.city='';
        this.country='';
        this.county='';
        this.district='';
        this.state='';
        this.zip='';
        this.zipPlus4='';
        this.yearBuilt=0;
        this.listPrice=0;
        this.monthlyRent=0;
        this.grossYield=0;
        
    }
}