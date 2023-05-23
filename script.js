function totalSalary() {
    var name = document.getElementById("employeeName").value;
    // validation for name
    if (name == "" || name == null) {
        alert("Name must be filled out");
    }
    var salary = document.getElementById("grossPay").value;
    // validation for salary
    if (salary == "" || salary == null) {
        alert("You must input salary to calculate the final salary");
    }

    // Raise in Salary

    var bonus = document.getElementById("bonus").value;

    // validation for bonus and allowance
    if (bonus == "" || bonus == null) {
        alert("bonus must be entered");
    }
    var allowance = document.getElementById("allowance").value;
    if (allowance == "" || allowance == null) {
        alert("allowance must be entered");
    }

    var raise = Number(bonus) + Number(allowance);

    // Deductions in Salary

    var incomeTax = document.getElementById("tax").value;
    // validation for income tax
    if (incomeTax == "" || incomeTax == null) {
        alert("income tax must be filled out");
    }
    var insurance = document.getElementById("ei").value;
    // validation for insurance field
    if (incomeTax == "" || incomeTax == null) {
        alert("allowance must be entered");
    }
    var cpp = document.getElementById("pensionPlan").value;
    // validatio for canada pension plan
    if (cpp == "" || cpp == null) {
        alert("Don't leave cpp field empty");
    }

    // Validation for gender

    var selectedGender = "";
    var genderRadio = document.getElementsByName("gender");
    var genderFound = 0;


    for (var i = 0; i < genderRadio.length; i++) {
        if (genderRadio[i].checked) {
            selectedGender = genderRadio[i].value;

            genderFound = 1; // setting the value to 1 if gender is selected
            break;
        }
    }
    if (genderFound == 0) {
        alert("Please Select your gender");
    }

    var gender = selectedGender;

    // Validations for dependents
    var selectedNumOfDependent = "";
    var dependentRadio = document.getElementsByName("dependent");
    var dependentFound = 0;

    for (var i = 0; i < dependentRadio.length; i++) {
        if (dependentRadio[i].checked) {
            selectedNumOfDependent = dependentRadio[i].value;

            dependentFound = 1; // setting the value to 1 if dependent is selected
            break;
        }
    }
    if (dependentFound == 0) {
        alert("Please Select Number of dependents");
    }

    var dependents = Number(selectedNumOfDependent);


    if (gender == "male") {
        switch (dependents) {
            case 2: // for 2 dependents there is no deduction of Income tax
                var deductions = ((salary * incomeTax / 100) + (salary * insurance / 100) + (salary * cpp / 100));
                var deductions = parseFloat(deductions.toFixed(2));
                var finalSalary = parseFloat((salary - deductions) + raise);
                finalOutput(name, salary, deductions, raise, finalSalary);
                break;

            case 3: // for 3 dependents , deduction of 2 % of income tax
                var deductions = ((salary * (incomeTax - 0.02) / 100) + (salary * insurance / 100) + (salary * cpp / 100));
                var deductions = parseFloat(deductions.toFixed(2));

                var finalSalary = parseFloat((salary - deductions) + raise);
                finalOutput(name, salary, deductions, raise, finalSalary);
                break;

            case 4: // for 4 dependents deduction of 4% of Income tax
                var deductions = ((salary * (incomeTax - 0.04) / 100) + (salary * insurance / 100) + (salary * cpp / 100));
                var deductions = parseFloat(deductions.toFixed(2));

                var finalSalary = parseFloat((salary - deductions) + raise);
                finalOutput(name, salary, deductions, raise, finalSalary);
                break;
        }
    }
    else if (gender == "female") { // for female deduction of 2 percent of income tax
        switch (dependents) {
            case 2: // for male there was no deduction for 2 dependents but for female , 2% of deduction is still there in income tax
                var deductions = ((salary * (incomeTax - 0.02) / 100) + (salary * insurance / 100) + (salary * cpp / 100));
                var deductions = parseFloat(deductions.toFixed(2));// rounding the value of number upto 2 decimal points

                var finalSalary = parseFloat((salary - deductions) + raise);
                finalOutput(name, salary, deductions, raise, finalSalary);
                break;

            case 3: // for 3 dependents , deduction of 2 % of income tax plus 2% extra deduction in income taxa since it is female , so deduction is 4%
                var deductions = ((salary * (incomeTax - 0.04) / 100) + (salary * insurance / 100) + (salary * cpp / 100));
                var deductions = parseFloat(deductions.toFixed(2));

                var finalSalary = parseFloat((salary - deductions) + raise);
                finalOutput(name, salary, deductions, raise, finalSalary);
                break;

            case 4: // for 4 dependents deduction of 4% of Income tax, plus 2% of extra deduction in income tax because of being female= 6% deduction
                var deductions = ((salary * (incomeTax - 0.06) / 100) + (salary * insurance / 100) + (salary * cpp / 100));
                var deductions = parseFloat(deductions.toFixed(2));

                var finalSalary = parseFloat((salary - deductions) + raise);
                finalOutput(name, salary, deductions, raise, finalSalary);
                break;
        }
    }

    function finalOutput(empName, income, decrease, raise, finalSalary) { // we are writing this function to avoid of repetion of these lines of code
        // in every case 
        document.getElementById("eName").innerHTML = "Employee Name: " + empName;
        document.getElementById("grossIncome").innerHTML = "Gross Income " + income;
        document.getElementById("deduct").innerHTML = "Deduction in Income: " + decrease;
        document.getElementById("increase").innerHTML = "Addition in Income: " + raise;
        document.getElementById("actualSalary").innerHTML = "Final Salary: " + finalSalary;

    }
}
function resetForm(){
    document.getElementById("calculator").reset();
}