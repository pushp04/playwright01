// class Car {
//     constructor() {
//     this.brand = "BMW";
//     this.model = "X5";
//     this.year = 2019;
//     }
//     }
//     // instantiate myCar object
//     const myCar = new Car();
//     // display the properties
//     console.log(myCar.brand);
//     console.log(myCar.model);
//     console.log( myCar.year);
    
// class Car {
//      constructor(brand,model,year) {
//      this.brand =brand;
//      this.model =model;
//      this.year =year;
//      }
//     }
//      // instantiate myCar object
//     const myCar1 = new Car("BMW","X5", 2019);

//     const myCar = new Car("VW","Polo", 2022);
//      // display the properties
//     console.log(myCar.brand);
//     console.log(myCar.model);
//     console.log( myCar.year);

// class Car {
//     constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//  }
//     updateprice(newPrice) {
//  this.price = newPrice;
//  }
//     updatebrand(a) {
//     this.brand = a;
//  }
// }
    
// const myCar = new Car("BMW",9800000);

// console.log(myCar.brand)
// console.log(myCar.price)

// myCar.updateprice(8800000); // updating price
// myCar.updatebrand("Audi");
// console.log(myCar.brand)
// console.log(myCar.price)
    
// class Table { 
    
//     static getSize() { // Static method 
//     return 10 * 10; } 
//     } 

// console.log(Table.getSize()); // Static method invocation
// class car{
//   #str="Hello";
// }

// let obj=new car();

// console.log(obj.str)
    
// class Car {
//      #brand = "TATA"; // Private field
//      #name = "Nexon"; // Private field
//      #milage = 16; // Private field
    
//      getbrand(){
//         return this.#brand;
//      }

//      setbrand(val){
//         this.#brand=val;
//      }

//      getMilage() {
//      return this.#milage; // Accessing private field
//      }
    
//      setMilage(milage) {
//      this.#milage = milage; // Modifying private field
//      }
//     }
    
//     let carobj = new Car();
    
//     carobj.setbrand("B M W")
//     console.log(carobj.getbrand())

    //  console.log(carobj.getMilage());
    //  carobj.setMilage(20);
    //  console.log(carobj.getMilage());
    //  carobj.#milage);  will throw an error
    
    // class User {
    //      #username = "Bob";
    //      #password = "12345678";
    //      #isLoggedIn = false;
        
    //      get username() {
    //      return this.#username;
    //      }
    //      set username(user) {
    //      this.#username = user;
    //      }
    //     }
        
    //     const user = new User();
    //     // console.log(user.username);
    //     user.username = "Alice";
    //     console.log(user.username);
        