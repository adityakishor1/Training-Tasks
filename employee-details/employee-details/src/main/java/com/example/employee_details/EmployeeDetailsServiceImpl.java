package com.example.employee_details;

import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Service
public class EmployeeDetailsServiceImpl implements EmployeeDetailsService {

    private static final Map<String, Employee> employeeData = new HashMap<>();

    // @PostConstruct ensures this block runs once the bean is created
    @PostConstruct
    private void init() {
        // Hardcoded dummy employee records
        employeeData.put("E101", new Employee("E101", "Arun Kumar", "Technology", "arun.k@example.com", "9876543210"));
        employeeData.put("E102", new Employee("E102", "Priya Sharma", "Human Resources", "priya.s@example.com", "9876543211"));
        employeeData.put("E103", new Employee("E103", "Vijay Singh", "Finance", "vijay.s@example.com", "9876543212"));
    }

    @Override
    public EmployeeDto getEmployeeDetails(String employeeId) {
        Employee employee = employeeData.get(employeeId);
        if (employee == null) {
            return null; // Return null if employee not found
        }

        // Convert Entity to DTO before sending it out
        return new EmployeeDto(
                employee.getEmployeeId(),
                employee.getName(),
                employee.getDepartment(),
                employee.getEmail(),
                employee.getPhone()
        );
    }
}