package com.example.employee_details;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class EmployeeDetailsController {

    @Autowired
    private EmployeeDetailsService employeeDetailsService;

    // Endpoint for fetching by ID using a path variable (as per task spec)
    @GetMapping("/fetchEmployeeDetails/{id}")
    public ResponseEntity<EmployeeDto> fetchEmployeeById(@PathVariable("id") String employeeId) {
        EmployeeDto employeeDto = employeeDetailsService.getEmployeeDetails(employeeId);
        if (employeeDto != null) {
            return ResponseEntity.ok(employeeDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint for accepting form submissions (as per task spec)
    @PostMapping("/fetchEmployeeDetails")
    public ResponseEntity<EmployeeDto> fetchEmployeeByPost(@RequestBody Map<String, String> payload) {
        String employeeId = payload.get("employeeId");
        EmployeeDto employeeDto = employeeDetailsService.getEmployeeDetails(employeeId);
        if (employeeDto != null) {
            return ResponseEntity.ok(employeeDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}