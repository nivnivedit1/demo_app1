import frappe

@frappe.whitelist()
def get_salary_structures_for_employee(employee_id):
    return frappe.get_list(
        "Salary Structure Assignment",
        filters={"employee": employee_id},
        fields=["name", "salary_structure", "from_date", "base", "variable"],
        order_by="salary_structure asc"
    )
