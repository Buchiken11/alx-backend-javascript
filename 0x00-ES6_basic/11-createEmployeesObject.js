export function createEmployeesObject(departmentName, employees) {
  const objname = {
    [departmentName]: employees,
  }
  return objname;
}
console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

