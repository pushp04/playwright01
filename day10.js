// // Parent class
// class Bike {
//     constructor() {
//     this.gear = 5;
//      }
//     getGears() {
//         console.log("Instance of Bike Executed")
//     return this.gear;
//      }
//     }
//     // Child class
// class suzuki extends Bike {
//     constructor() {
//     super();
//     this.brand = "Yamaha"
//     }
//     getBrand() {
//     return this.brand;
//     }
//     }
//     const suz = new suzuki();
//     console.log(suz.getBrand());
//     console.log(suz.getGears());
    

// class Bike {
// constructor(gears) {
//     this.gears = gears;
//     }
//     }
//     // Child class
// class suzuki extends Bike {
// constructor(brand, gears) {
// super(gears);
//     this.brand = brand;
//     }
//     }
// const suzukiBike = new suzuki("Suzuki", 4);
//     console.log(suzukiBike.brand);
    // console.log(suzukiBike.gears);


    // Parent class
// class Bike {
//      constructor(gears) {
//     this.gears = gears;
//      }
//     }
    // Child class
    // class Honda extends Bike {
    //  constructor(brand, gears) 
    //  {
    // super(gears);
    // this.brand = brand;
    //  }
    // }
    // class Shine extends Honda {
    //  constructor(model, brand, gears) {
    // super(brand, gears);
    // this.model = model;
    //  }
    // }
    // const newBike = new Shine("Shine", "Honda", 5);
    // console.log(newBike.model)
    // console.log(newBike.brand)
    // console.log(newBike.gears)
    
    
    // Parent class

    // class Bike {
    //  constructor(gears) {
    // this.gears = gears;
    //  }
    // }
    // // Child class
    // class Honda extends Bike {
    // constructor(model, gears) {
    // super(gears);
    // this.model = model;
    //  }
    // }
    // // Child class
    // class Suzuki extends Bike {
    // constructor(model, color, gears) {
    // super(gears);
    // this.model = model;
    // this.color = color;
    //  }
    // }
    // const h_Bike = new Honda("Shine", 5);
    // const s_Bike = new Suzuki("Zx6", "Blue", 6);
    // console.table([h_Bike.model,h_Bike.gears,h_Bike.color])
    // console.table([s_Bike.model,s_Bike.gears,s_Bike.color])
    


    // String.prototype.toUpperCase = function() { 
    //     return this.toLowerCase();
    // }
    // let str1 = "HeLLo World";
        // console.log(str1.toUpperCase())
        
        // String.prototype.firstCase = function () {
         // First character in uppercase. Other characters in lowercase.
        //  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
        // }
        // let str = "heLLo WoRld";
        // console.log(str.firstCase());
        

        // class Math {
        //     mathOperations(a, b) {
        //     console.log("Addition: " + (a+b));
        //     console.log("Subtraction: " + (a-b));
        //      }
        //     }
        // class AdvanceMath extends Math {
        //      mathOperations(a, b) {
        //     super.mathOperations(a, b);
        //     console.log("Multiplication: " + (a*b));
        //     console.log("Division: " + (a/b));
        //      }
        //     }
        //     const A_math = new AdvanceMath();
        //     A_math.mathOperations(10, 5);
            
            
        // class Shape {
        //      area() {
        //     console.log("The area of each Geometry is different ");
        //      }
        //     }
        //     class Circle extends Shape {
        //      area(r) { // Overriding the method of the Shape class
        //      super.area();
        //     return "The area of Circle is " + (3.14 * r * r) ;
        //      }
        //     }
        //     class Rectangle extends Shape {
        //      area(l, b) { // Overriding the method of the Shape class
        //      super.area();
        //     return "The area of Rectangle is " + (l * b) ;
        //      }
        //     }
        //     const circle = new Circle();
        //     // Calling area() method of Circle class
        //     console.log(circle.area(5)); 
            
        //     const rectangle = new Rectangle();
        //     // Calling area() method of Rectangle class
        //     console.log(rectangle.area(5, 10));
            