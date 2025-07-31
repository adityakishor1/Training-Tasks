abstract class Vehicle {
    abstract void start();

    void fuelType() {
        System.out.println("Fuel type: Petrol/Diesel");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starts with key");
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        Vehicle v = new Car();  // Upcasting
        v.start();
        v.fuelType();
    }
}
