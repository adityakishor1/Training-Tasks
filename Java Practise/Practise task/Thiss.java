// 14. this Keyword – For Constructor Chaining

class Product {
    String name;
    double price;

    Product(String name) {
        this(name, 100); // default price
    }

    Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    void show() {
        System.out.println("Name: " + name + ", Price: ₹" + price);
    }
}

public class Thiss {
    public static void main(String[] args) {
        Product p1 = new Product("T-Shirt");
        Product p2 = new Product("Laptop", 45000);
        p1.show();
        p2.show();
    }
}
