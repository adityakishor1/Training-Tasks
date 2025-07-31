class StaticDemo {
    static int count = 0;

    StaticDemo() {
        count++;
        System.out.println("Object number: " + count);
    }

    static void showCount() {
        System.out.println("Total objects created: " + count);
    }

    public static void main(String[] args) {
        StaticDemo s1 = new StaticDemo();
        StaticDemo s2 = new StaticDemo();
        StaticDemo.showCount();
    }
}
