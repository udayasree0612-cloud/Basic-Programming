 function displayCar(){
    console.log("This is Car");
 }
function displayTruck(){
    console.log("This is truck");

}
function displayBike()
{
    console.log("This is Bike" );
}
 function vehicleInfo(vehicleCategory, callbackFn)
{
    callbackFn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
