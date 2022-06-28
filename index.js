// Your code here
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(array => {
        createEmployeeRecord(array)
    })
}
function createTimeInEvent(employee, timeIn) {
    let [date, hour] = timeIn.split(" ")
    employee.timeInEvents.push({
        type: "TimeIn",
        'hour': parseInt(hour, 10),
        date,
    })
    return employee
}
function createTimeOutEvent(employee, timeOut) {
    let [date, hour] = timeOut.split(" ")
    employee.timeInEvents.push({
        type: "Timeout",
        'hour': parseInt(hour, 10),
        date,
    })
    return employee
}

function hoursWorkedOnDate(employee,date)
{
   let timeIn= employee.timeInEvents.find(event=>event.date===date)
   let timeOut= employee.timeOutEvents.find(event=>event.date===date)
   return (timeOut.hour-timeIn.hour)/100
}
function wagesEarnedOnDate(employee,date)
{
    let wages=hoursWorkedOnDate(employee,date)*employee.payPerHour
    return parseFloat(wages.toString())
}
function allWagesFor(employee)
{
    let dates=employee.timeInEvents.map(event=>event.date)
return dates.reduce(((accum,day)=>accum+wagesEarnedOnDate(employee,day)),0)   
}
function findEmployeeByFirstName(array,firstName)
{
    return array.find(employee=>employee.firstName===firstName)
}
function calculatePayroll(employeeRecords)
{
    return employeeRecords.reduce(((accum,record)=>accum+allWagesFor(record)),0)
}
