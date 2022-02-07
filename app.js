// object oriented programming encapsulation
// the best functions are those with no functions "uncle bob"
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
 employee.getWage();

//  normal classes
 class Fruits {
    constructor(name, type, location) {
      this.name = name;
      this.type =  type;
      this.location = location;
    }
    getDetails(){
        return (`The name of the fruit is ${this.name}.`)
    }
  }
  // Making object with the help of the constructor
  let fruit1 = new Fruits('Pineapple', 'category1', 'nairobi');
  let fruit2 = new Fruits('Banana', 'category2', '998cc');
   
  console.log(fruit1.name);    
  console.log(fruit2.type);   
  console.log(fruit1.getDetails());



//encapsulation example
class person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is: ${ this.name }, Address is: ${this.add}, this is my: ${this.id}`);
    }
}
 
let person1 = new person('My name', 21);
person1.add_Address('TnT');
person1.getDetails();