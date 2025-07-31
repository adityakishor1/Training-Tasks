class Car {
    void drive() {
        System.out.println("Car is driving");
    }
}

public class Mulobj {
    public static void main(String[] args) {
        Car car1 = new Car();
        Car car2 = new Car();
        car1.drive();
        car2.drive();
    }
}
