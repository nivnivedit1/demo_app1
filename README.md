# demo_app1
Dynamic Salary Assignment Viewer in ERPNext
# Dynamic Salary Assignment Viewer in ERPNext

## 🧾 Description

This project adds a custom feature to ERPNext that dynamically displays all salary structure assignments related to an employee inside the Employee form.

It includes both frontend (JavaScript) and backend (Python API) code to fetch and render salary data in a neatly formatted HTML table when the Employee form is opened or refreshed.

The purpose is to improve HR transparency and allow administrators to quickly view historical and current salary structure assignments of any employee.

---

## 🛠 Technologies Used

- **Frappe Framework**
- **ERPNext**
- **Python** (for backend API)
- **JavaScript** (for client-side script)
- **HTML** (for table rendering)

---

## ⚙️ Features

- API endpoint to fetch salary structure assignments for a given employee ID.
- Client script triggers on the `refresh` event of the Employee form.
- Dynamically generates and displays salary assignments in a custom HTML table.
- Table includes: Salary Assignment No, Salary Structure, From Date, Base, and Variable components.
- Displays a message if no assignments are found.

---

## 📁 Folder Structure
<pre><code>```bash demo_app1/ ├── demo_app1/ │ ├── api/ │ │ ├── __init__.py │ │ └── employee_salary.py │ ├── public/ │ ├── templates/ │ ├── hooks.py │ └── modules.txt ├── README.md ``` </code></pre>



