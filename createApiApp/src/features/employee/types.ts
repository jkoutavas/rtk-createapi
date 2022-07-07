export interface EmployeesResult {
  data: Employee[];
  message: string;
  status: string;
}

export interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}
