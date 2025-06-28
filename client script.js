// This script runs on the 'Employee' Doctype
frappe.ui.form.on('Employee', {
    refresh: function(frm) {
        // Skip execution if the form is new and doesn't have a name (not saved yet)
        if (!frm.doc.name) return;

        // Make an API call to fetch salary structure assignments for this employee
        frappe.call({
            // Path to your backend Python method (must be whitelisted)
            method: 'demo_app1.api.employee_salary.get_salary_structures_for_employee', //  custom app method path
            args: {
                // Send the employee ID (doc.name like HR-EMP-00001) as argument
                employee_id: frm.doc.name
            },
            callback: function(res) {
                // Log the API response for debugging in browser console
                console.log("API Response:", res.message); 

                // If response contains data, build HTML table
                if (res.message && res.message.length > 0) {
                    // Loop over the returned salary structure records and build rows
                    let rows = res.message.map((row, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${row.name}</td>
                            <td>${row.salary_structure}</td>
                            <td>${frappe.format(row.from_date, { fieldtype: 'Date' })}</td>
                            <td>₹ ${row.base || 0}</td>
                            <td>₹ ${row.variable || 0}</td>
                        </tr>
                    `).join("");

                    // Render the final table inside the custom HTML field on the form
                    frm.fields_dict.custom_salary_structure_table.$wrapper.html(`
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Salary Structure Assignment No</th>
                                    <th>Salary Structure</th>
                                    <th>From Date</th>
                                    <th>Base</th>
                                    <th>Variable</th>
                                </tr>
                            </thead>
                            <tbody>${rows}</tbody>
                        </table>
                    `);
                } else {
                    // If no salary assignments found, show a message
                    frm.fields_dict.custom_salary_structure_table.$wrapper.html('<p>No salary structure assignments found.</p>');
                }
            }
        });
    }
});
