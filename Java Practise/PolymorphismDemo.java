class PolymorphismDemo {
    // Compile-time polymorphism (Method Overloading)
    void show(int a) {
        System.out.println("int: " + a);
    }

    void show(String a) {
        System.out.println("String: " + a);
    }

    public static void main(String[] args) {
        PolymorphismDemo obj = new PolymorphismDemo();
        obj.show(100);     
        obj.show("Hello"); 

    
        Animal a = new Dog();
        a.sound();
    }
}

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
