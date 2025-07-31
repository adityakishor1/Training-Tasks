// 13. Static Variable Impact – All Objects Share It

class Counter {
    static int count = 0;

    Counter() {
        count++;
        System.out.println("Object #" + count + " created");
    }
}

public class StatMet {
    public static void main(String[] args) {
        Counter a = new Counter();
        Counter b = new Counter();
        Counter c = new Counter();
    }
}
