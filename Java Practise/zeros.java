import java.util.Arrays;

public class zeros {
    public static void main(String[] args) {
        int[] arr = {0, 1, 2, 0};
        zeros(arr);
        System.out.println(Arrays.toString(arr)); 
    }

    public static void zeros(int[] arr) {
        int n = arr.length;
        int index = n - 1;
        for (int i = n - 1; i >= 0; i--) {
            if (arr[i] != 0) {
                arr[index--] = arr[i];
            }
        }
        
        while (index >= 0) {
            arr[index--] = 0;
        }
    }
}
