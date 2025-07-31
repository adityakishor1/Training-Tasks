interface A {
    void show();
}

interface B {
    void display();
}

class C implements A, B {
    public void show() {
        System.out.println("From A");
    }
    public void display() {
        System.out.println("From B");
    }
}

public class Multi {
    public static void main(String[] args) {
        C obj = new C();
        obj.show();
        obj.display();
    }
}
