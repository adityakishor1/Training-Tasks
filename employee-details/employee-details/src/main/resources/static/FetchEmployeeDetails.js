$(document).ready(function() {

    $('#employeeForm').submit(function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the value from the input field
        var employeeId = $('#employeeId').val().trim();
        var resultsDiv = $('#results');

        // Clear previous results
        resultsDiv.html('');

        if (employeeId === '') {
            resultsDiv.html('<p class="error">Please enter an Employee ID.</p>');
            return;
        }

        // Perform the AJAX request
        $.ajax({
            type: "GET",
            url: "/fetchEmployeeDetails/" + employeeId,
            success: function(response) {
                // This function is called when the backend returns a successful response (HTTP 200)

                // Build the HTML to display the results
                var employeeDetails = '<h3>Employee Found</h3>' +
                                      '<p><strong>ID:</strong> ' + response.employeeId + '</p>' +
                                      '<p><strong>Name:</strong> ' + response.name + '</p>' +
                                      '<p><strong>Department:</strong> ' + response.department + '</p>' +
                                      '<p><strong>Email:</strong> ' + response.email + '</p>' +
                                      '<p><strong>Phone:</strong> ' + response.phone + '</p>';

                // Display the results on the page
                resultsDiv.html(employeeDetails);
            },
            error: function(xhr, status, error) {
                // This function is called if the request fails (e.g., HTTP 404 Not Found)
                if(xhr.status == 404) {
                    resultsDiv.html('<p class="error">Employee with ID \'' + employeeId + '\' not found.</p>');
                } else {
                    resultsDiv.html('<p class="error">An error occurred while fetching data.</p>');
                }
            }
        });
    });

});