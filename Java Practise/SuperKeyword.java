class Animal {
    String color = "White";
}

class Dog extends Animal {
    String color = "Black";

    void printColor() {
        System.out.println("Dog color: " + color);
        System.out.println("Animal color: " + super.color);
    }
}

public class SuperKeyword {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.printColor();
    }
}
