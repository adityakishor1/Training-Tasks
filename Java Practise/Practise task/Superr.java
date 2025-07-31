// 12. Super Keyword – With Constructor and Method

class Employee {
    String name;
    Employee(String name) {
        this.name = name;
    }

    void display() {
        System.out.println("Employee Name: " + name);
    }
}

class Manager extends Employee {
    String department;

    Manager(String name, String department) {
        super(name);
        this.department = department;
    }

    void display() {
        super.display();
        System.out.println("Department: " + department);
    }
}

public class Superr {
    public static void main(String[] args) {
        Manager m = new Manager("Dr. Raghu", "Data Science");
        m.display();
    }
}
