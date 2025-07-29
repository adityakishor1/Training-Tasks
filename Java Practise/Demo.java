public class Demo {
    void show(int a) {
        System.out.println("int");
    }

    void show(String s) {
        System.out.println("String");
    }

    public static void main(String[] args) {
        Demo obj = new Demo();

        obj.show(10);         // Will print "int"
        obj.show("Hello");    // Will print "String"
    }
}
