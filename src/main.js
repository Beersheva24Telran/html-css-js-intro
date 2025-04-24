//References to DOM
const tBodyElem = document.getElementById("tbody_id");
{
  /* <tr>
  <th>id</th>
  <th>Name</th>
  <th>Department</th>
  <th>Salary</th>
</tr> */
}
//Variable & constants
const employees = [
  { id: 123, name: "Vasya", department: "QA", salary: 10000 },
  { id: 124, name: "Sara", department: "Audit", salary: 15000 },
  { id: 125, name: "David", department: "Development", salary: 12000 },
];
//functions
function getTableData(employees) {
  const res = employees.map(getRecord);
  return res;
}
function getRecord(empl) {
  const res = `<tr>
                    <td>${empl.id}</td>
                    <td>${empl.name}</td>
                    <td>${empl.department}</td>
                    <td>${empl.salary}</td>
                 <tr>`;
  return res;
}
//actions
const tableData = getTableData(employees);
tBodyElem.innerHTML = tableData.join("");
