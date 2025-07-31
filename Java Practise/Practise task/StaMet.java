//Static class and method

class MathUtils {
    static double PI = 3.14159;

    static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }
}

public class StaMet {
    public static void main(String[] args) {
        double area = MathUtils.calculateCircleArea(5);
        System.out.println("Circle Area: " + area);
    }
}
