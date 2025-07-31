// Default & Parameterized Constructor – Combined Logic

class Product {
    String name;
    double price;
    int quantity;

    // Default constructor
    Product() {
        this("Unknown", 100.0, 1); // calling parameterized constructor
    }

    // Constructor with 1 parameter
    Product(String name) {
        this(name, 200.0, 1); // default price & quantity
    }

    // Constructor with 2 parameters
    Product(String name, double price) {
        this(name, price, 1); // default quantity
    }

    // Constructor with 3 parameters
    Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    void display() {
        System.out.println("Product: " + name);
        System.out.println("Price: ₹" + price);
        System.out.println("Quantity: " + quantity);
        System.out.println("Total Cost: ₹" + (price * quantity));
        System.out.println("--------------------");
    }
}

public class DefPara {
    public static void main(String[] args) {
        Product p1 = new Product();                         // uses default
        Product p2 = new Product("Pen");                    // uses 1-param
        Product p3 = new Product("Notebook", 50.0);         // uses 2-param
        Product p4 = new Product("Laptop", 45000.0, 2);     // uses 3-param

        p1.display();
        p2.display();
        p3.display();
        p4.display();
    }
}
