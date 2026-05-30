function checkResult() {

    let studentName = document.getElementById("studentName").value;
    let studentMark = parseInt(document.getElementById("studentMark").value);

    let result = document.getElementById("result");
    let studentList = document.getElementById("studentList");

    // Validation
    if (studentName.trim() === "") {
        result.textContent = "Please enter a student name.";
        return;
    }

    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
        result.textContent = "Please enter a mark between 0 and 100.";
        return;
    }

    let grade = "";
    let status = "";

    if (studentMark >= 80) {
        grade = "Distinction";
        status = "PASS";
    }
    else if (studentMark >= 65) {
        grade = "Merit";
        status = "PASS";
    }
    else if (studentMark >= 50) {
        grade = "Pass";
        status = "PASS";
    }
    else {
        grade = "Fail";
        status = "FAIL";
    }

    result.textContent =
        studentName + " - " + status + " (" + grade + ")";

    let listItem = document.createElement("li");

    listItem.textContent =
        studentName + " | Mark: " +
        studentMark + " | " +
        status + " | " +
        grade;

    studentList.appendChild(listItem);

    document.getElementById("studentName").value = "";
    document.getElementById("studentMark").value = "";
}