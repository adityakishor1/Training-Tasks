class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class ClassCasting {
    public static void main(String[] args) {
        Animal a = new Dog();  // Upcasting (implicit)
        a.sound();

        Dog d = (Dog) a;       // Downcasting (explicit)
        d.bark();
    }
}
