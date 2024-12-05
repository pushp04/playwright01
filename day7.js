let val= new String("Hello");
                    
let s1= "this is java script";
let s2="     Java     "
// console.log(typeof val)
// console.log(val[0])
// console.log(typeof (s1.concat(val)))

let b= s1.endsWith("pt");
// console.log(s1.endsWith("pt"))
// let c=!b;
// console.log(s1.includes(s2))
// console.log(s1.toLowerCase())

// function Car(brand) { // Constructor function
// 	this.brand = brand; // property initialization
// }
// const carObj = new Car("Audi");
// console.log(carObj)

// class Car {
//     constructor() {
//         this.brand = "BMW";
//         this.model = "X5";
//         this.year = 2019;
//     }
// }
// // instantiate myCar object
// 	const myCar = new Car();
// // display the properties
// console.log(myCar.brand);
// console.log(myCar.model);
// console.log( myCar.year);

// class Car {
//     constructor(brand,model,year) {
//     this.brand =brand;
//     this.model =model;
//     this.year =year;
//      }
//     }
//     // instantiate myCar object
//     const myCar1 = new Car("BMW","X5", 2019);
//     const myCar = new Car("VW","Polo", 2022);
//     // display the properties
//     console.log(myCar.brand);
//     console.log(myCar.model);
//     console.log( myCar.year);


    class Car {
        constructor(brand, price) {
            this.brand = brand;
            this.price = price;
        }

        updateprice(newPrice) {
        this.price = newPrice;
        }
    }
    

    const myCar = new Car("BMW",9800000);
		
	myCar.updateprice(8800000); // updating price
    