// Palindrome – Clean Method

class PalindromeChecker {
    boolean isPalindrome(String str) {
        int i = 0, j = str.length() - 1;
        while (i < j) {
            if (str.charAt(i) != str.charAt(j)) return false;
            i++; j--;
        }
        return true;
    }
}

public class Pelin {
    public static void main(String[] args) {
        PalindromeChecker pc = new PalindromeChecker();
        System.out.println(pc.isPalindrome("level")); // true
        System.out.println(pc.isPalindrome("java"));  // false
    }
}
