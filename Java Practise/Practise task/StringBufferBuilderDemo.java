// StringBuffer: A mutable, thread-safe class used to manipulate strings. Slower due to synchronization.

// StringBuilder: A mutable, non-thread-safe class. Faster than StringBuffer and preferred in single-threaded environments.

public class StringBufferBuilderDemo {
    public static void main(String[] args) {
        // Using StringBuffer (Thread-safe)
        StringBuffer sbf = new StringBuffer("Hello");
        sbf.append(" World");
        System.out.println("StringBuffer: " + sbf);

        // Using StringBuilder (Not thread-safe but faster)
        StringBuilder sbd = new StringBuilder("Java");
        sbd.append(" Programming");
        System.out.println("StringBuilder: " + sbd);
    }
}
