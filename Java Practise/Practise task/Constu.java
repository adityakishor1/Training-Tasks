//7. Can Abstract Class Have a Constructor?
//Yes. It runs during object creation of subclass.

abstract class A {
    A() {
        System.out.println("Abstract class constructor");
    }
}
class B extends A {
    B() {
        System.out.println("Subclass constructor");
    }
}
public class Constu {
    public static void main(String[] args) {
        B obj = new B();
    }
}
