class User {
    public String name = "Raghu";
    private String password = "abc123";
    protected String email = "raghu@example.com";
    int age = 25;

    public String getPassword() {
        return password;
    }
}

class Admin extends User {
    void display() {
        System.out.println(name);     // public
        System.out.println(email);    // protected
        System.out.println(age);      // default
        // System.out.println(password); 
    }
}

public class AccessModifierDemo {
    public static void main(String[] args) {
        User u = new User();
        System.out.println(u.name);                // public
        System.out.println(u.getPassword());       // private via getter
        System.out.println(u.email);               // protected
        System.out.println(u.age);                 // default

        new Admin().display();
    }
}
