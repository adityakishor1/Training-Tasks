class Employee {
    String name = "Unnamed";
    int salary = 30000;

    void work() {
        System.out.println(name + " is working.");
    }

    void showSalary() {
        System.out.println("Salary: ₹" + salary);
    }
}

class Manager extends Employee {
    int teamSize = 5;

    @Override
    void work() {
        super.work();  // call Employee's work method
        System.out.println(name + " is managing a team of " + teamSize + " people.");
    }

    void conductMeeting() {
        System.out.println(name + " is conducting a meeting.");
    }
}

class SeniorManager extends Manager {
    String department = "Technology";

    @Override
    void work() {
        super.work();  // call Manager's work method
        System.out.println(name + " is overseeing the " + department + " department.");
    }

    void approveBudget() {
        System.out.println(name + " approved the department budget.");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        SeniorManager sm = new SeniorManager();
        sm.name = "Dr. Raghu";
        sm.salary = 95000;
        sm.teamSize = 15;
        sm.department = "Data Science";

        sm.work();            // overridden method
        sm.showSalary();      // inherited from Employee
        sm.conductMeeting();  // from Manager
        sm.approveBudget();   // from SeniorManager
    }
}
