class Bangladesh{
    constructor(){
        this.place = "Bangladesh";
    }
}
class Villege extends Bangladesh{
    constructor(vName, vBeautiful){
        super();
        this.name = vName;
        this.beautiful = vBeautiful;

    }
    getProgrmming(){
        const arrayName = ['HTML','CSS','Bootstrup','JavaScript','ES6']; //this is a method or function

        return arrayName + ' '+ 'This is Array';      
    }
}
const coxbazar = new Villege('coxbazer','Its A nice place');
const sejik = new Villege('sejik','amazing');
console.log(coxbazar.getProgrmming(), sejik);
