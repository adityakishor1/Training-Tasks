package com.example.employee_details;

// Note: In a real app with a DB, this would be a @Entity
public class Employee {
    private String employeeId;
    private String name;
    private String department;
    private String email;
    private String phone;

    // Constructors
    public Employee() {
    }

    public Employee(String employeeId, String name, String department, String email, String phone) {
        this.employeeId = employeeId;
        this.name = name;
        this.department = department;
        this.email = email;
        this.phone = phone;
    }

    // Getters and Setters
    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
}