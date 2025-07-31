public class StringDemo {
    public static void main(String[] args) {
        String s = " Aditya ";

        System.out.println(s.trim());             // removes leading/trailing space
        System.out.println(s.toLowerCase());
        System.out.println(s.toUpperCase());
        System.out.println(s.startsWith(" "));
        System.out.println(s.endsWith("T "));
        System.out.println(s.replace(" ", "-"));
        System.out.println(s.substring(1, 5));
        System.out.println(s.indexOf("AI"));
        System.out.println(s.lastIndexOf("P"));
        System.out.println(s.equalsIgnoreCase(" openai gpt "));
    }
}
