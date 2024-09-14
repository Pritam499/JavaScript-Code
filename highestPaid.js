function highest_paid(employees) {
    return employees.reduce((highest, current) => {
        const { salary: highestSalary } = highest;
        const { salary: currentSalary } = current;
        return currentSalary > highestSalary ? current : highest;
    });
}


console.log(highest_paid(employees)); 

