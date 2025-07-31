class Invoice {
    double calculateTotal(double price, int quantity) {
        return price * quantity;
    }

    double calculateTotal(double price, int quantity, double discount) {
        double total = price * quantity;
        return total - (total * discount / 100);
    }
}

public class Over {
    public static void main(String[] args) {
        Invoice bill = new Invoice();
        System.out.println("Total without discount: " + bill.calculateTotal(200, 3));
        System.out.println("Total with discount: " + bill.calculateTotal(200, 3, 10));
    }
}
