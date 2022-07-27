// import { ValuesController } from "./Controllers/ValuesController.js";
// draw cars in the carscontroller, describe what each car will be made from in the car model, store actual car descriptions in appstate. use service to change info in the appstate make sure to export and import 

// when making a submit form button you need to run a window.event.preventDefault() to stop a forced page refresh

// window.event.target is the html that triggered the event. let form = window.event.target give the form div an id and a name, then you can target the id more specifically form.id.value returns the actual input!

// export class vs export const name = new name

// take the form data and create a new object which has all the form data.

import { CarsController } from "./Controllers/CarsController.js";

// the "import" is automatically populated (-the .js), whenever you place a new controller in the 
// when you push a newobject into the ProxyState.objects.push() push it as a (new Class(newobject)) but that means that you will need to have your constructor have ({object data}) and the controller will need to have some more explicit instructions when building new objects let newobject = { name: form.name.value...}
// 
// }

// ProxyState.on('cars'), _drawCars"don't invoke here") this creates a listener for changes to ProxyState.cars
// .push does not trigger the listener tho, so we can push by pushing like this ProxyState.cars = [...ProxyState.cars, new Car(newCar)]

// ... is the "spread" operator and destroys arrays, so by doing it inside of a new bracket, you can disassemble and then reconstruct the array [...array, new array item]

class App {
  // valuesController = new ValuesController();
  
  carsController = new CarsController
}

window["app"] = new App();
