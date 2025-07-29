public class Overriding {
    void show(int a) {
        System.out.println("int");
    }

    void show(String s) {
        System.out.println("String");
    }

    public static void main(String[] args) {
        Overriding obj = new Overriding();
        obj.show(5);           // prints "int"
        obj.show("world");     // prints "String"
    }
}
