/*Validations Section for Forms*/
//correct or wrong symbols for validations
var correct = "&#10004";
var wrong = "&#128473";

//validation for trainers form
const trainersValidation = function() {
    var trainersFirstName = document.getElementById("tfirstname").value;
    var trainersLastName = document.getElementById("tlastname").value;
    
    //trainers first name input validation
    if (trainersFirstName == 0 || isNaN(trainersFirstName) == false || /[^A-Za-z\d]/.test(trainersFirstName)) {
        tcheck1.style.color = "red";
        tfirstname.style.border = "1px solid red";
        document.getElementById("tcheck1").innerHTML = wrong;
    }else {
        tcheck1.style.color = "green";
        tfirstname.style.border = "1px solid green";
        document.getElementById("tcheck1").innerHTML = correct;
    }
    //trainers last name input validation
    if (trainersLastName == 0 || isNaN(trainersLastName) == false || /[^A-Za-z\d]/.test(trainersLastName)) {
        tcheck2.style.color = "red";
        tlastname.style.border = "1px solid red";
        document.getElementById("tcheck2").innerHTML = wrong;
    }else {
        tcheck2.style.color = "green";
        tlastname.style.border = "1px solid green";
        document.getElementById("tcheck2").innerHTML = correct;
    }
        
    
};

//validation for students form
const studentsValidation = function() {
    var studentsFirstName = document.getElementById("sfirstname").value;
    var studentsLastName = document.getElementById("slastname").value;
    var studentsDateOfBirth = new Date(document.getElementById("birth").value);
    var studentsDateOfBirth = studentsDateOfBirth.getFullYear();
    var today = new Date();
    var today = today.getFullYear();
    var studentsAge = (today - studentsDateOfBirth);
    var studentsFees = document.getElementById("fees").value;

    //students first name input validation
    if (studentsFirstName == 0 || isNaN(studentsFirstName) == false || /[^A-Za-z\d]/.test(studentsFirstName)) {
        scheck1.style.color = "red";
        sfirstname.style.border = "1px solid red";
        document.getElementById("scheck1").innerHTML = wrong;
    }else {
        scheck1.style.color = "green";
        sfirstname.style.border = "1px solid green";
        document.getElementById("scheck1").innerHTML = correct;
    }
    //students last name input validation
    if (studentsLastName == 0 || isNaN(studentsLastName) == false || /[^A-Za-z\d]/.test(studentsLastName)) {
        scheck2.style.color = "red";
        slastname.style.border = "1px solid red";
        document.getElementById("scheck2").innerHTML = wrong;
    }else {
        scheck2.style.color = "green";
        slastname.style.border = "1px solid green";
        document.getElementById("scheck2").innerHTML = correct;
    }
    //students age input validation
    if (studentsAge < 18 || !Date.parse(studentsDateOfBirth)) {
        scheck3.style.color = "red";
        birth.style.border = "1px solid red";
        document.getElementById("scheck3").innerHTML = wrong;
    }else {
        scheck3.style.color = "green";
        birth.style.border = "1px solid green";
        document.getElementById("scheck3").innerHTML = correct;
    }
    //students fees input validation
    if (studentsFees < 1000 || studentsFees > 2500 || isNaN(studentsFees) == true || /[^A-Za-z\d]/.test(studentsFees)) {
        scheck4.style.color = "red";
        fees.style.border = "1px solid red";
        document.getElementById("scheck4").innerHTML = wrong;
    }else {
        scheck4.style.color = "green";
        fees.style.border = "1px solid green";
        document.getElementById("scheck4").innerHTML = correct;
    }
};

//validation for courses form
const coursesValidation = function() {
var coursesTitle = document.getElementById("coursetitle").value;
var coursesStartDate = new Date(document.getElementById("startdate").value);
var coursesEndDate = new Date(document.getElementById("enddate").value);

    //courses title input validation
    if (coursesTitle == 0 || isNaN(coursesTitle) == false || coursesTitle.length < 5 || coursesTitle.length > 40) {
        ccheck1.style.color = "red";
        coursetitle.style.border = "1px solid red";
        document.getElementById("ccheck1").innerHTML = wrong;
    }else {
        ccheck1.style.color = "green";
        coursetitle.style.border = "1px solid green";
        document.getElementById("ccheck1").innerHTML = correct;
    }
    //courses start and end date input validation
    if (coursesStartDate >= coursesEndDate || !Date.parse(coursesStartDate)) {
        ccheck4.style.color = "red";
        startdate.style.border = "1px solid red";
        document.getElementById("ccheck4").innerHTML = wrong;
    }else {
        ccheck4.style.color = "green";
        startdate.style.border = "1px solid green";
        document.getElementById("ccheck4").innerHTML = correct;
    }
    if (coursesEndDate <= coursesStartDate || !Date.parse(coursesEndDate)) {
        ccheck5.style.color = "red";
        enddate.style.border = "1px solid red";
        document.getElementById("ccheck5").innerHTML = wrong;
    }else {
        ccheck5.style.color = "green";
        enddate.style.border = "1px solid green";
        document.getElementById("ccheck5").innerHTML = correct;
    }
};

//validation for assignments form
const assignmentValidation = function() {
    var assignmentTitle = document.getElementById("assigntitle").value;
    var subDate = new Date (document.getElementById("subdate").value);
    var currentDate = new Date();
    var usersOralMark = document.getElementById("omark").value;
    var oralMark = usersOralMark * 0.2;
    var usersTotalMark = document.getElementById("tmark").value;
    var totalMark = (usersTotalMark * 0.8) + oralMark;
    
    //assignments title input validation
    if (assignmentTitle == 0 || isNaN(assignmentTitle) == false || assignmentTitle.length < 5 || assignmentTitle.length > 40) {
        acheck1.style.color = "red";
        assigntitle.style.border = "1px solid red";
        document.getElementById("acheck1").innerHTML = wrong;
    }else {
        acheck1.style.color = "green";
        assigntitle.style.border = "1px solid green";
        document.getElementById("acheck1").innerHTML = correct;
    }
    //assignments sub date input validation
    if (subDate > currentDate || !Date.parse(subDate)) {
        acheck2.style.color = "red";
        subdate.style.border = "1px solid red";
        document.getElementById("acheck2").innerHTML = wrong;
    }else {
        acheck2.style.color = "green";
        subdate.style.border = "1px solid green";
        document.getElementById("acheck2").innerHTML = correct;
    }
    //assignments oral mark input validation
    if (usersOralMark < 0 || usersOralMark > 100 || usersOralMark == "" || isNaN(usersOralMark) == true || /[^A-Za-z\d]/.test(usersOralMark)) {
        acheck3.style.color = "red";
        omark.style.border = "1px solid red";
        document.getElementById("acheck3").innerHTML = wrong;
    }else {
        acheck3.style.color = "green";
        omark.style.border = "1px solid green";
        document.getElementById("acheck3").innerHTML = correct;
    }
    //assignments total mark input validation
    if (usersTotalMark < 0 || usersTotalMark > 100 || usersTotalMark == "" || isNaN(usersTotalMark) == true || /[^A-Za-z\d]/.test(usersTotalMark)) {
        acheck4.style.color = "red";
        tmark.style.border = "1px solid red";
        document.getElementById("acheck4").innerHTML = wrong;
    }else {
        acheck4.style.color = "green";
        tmark.style.border = "1px solid green";
        document.getElementById("acheck4").innerHTML = correct;
    }
};
/*End of Validations Section for Forms*/


/* Functions on-click to submit and edit the trainers */
//submit trainer infos localy
var trainersList = [];
var addTrainers =  () => {
    var trainersObject = {
        firstName: document.getElementById("tfirstname").value,
        lastName: document.getElementById("tlastname").value,
        subject: document.getElementById("choosesubject").value
    }
    trainersList.push(trainersObject);
}

//add trainers as options for edditing
var addTrainersOption = function() {
var trainersChoose = document.getElementById("chooseTedit");
var option = document.createElement("option");
for (let i = 0; i < trainersList.length; i++) {
    option.text = `${i+1}: ${trainersList[i].lastName}`;
    trainersChoose.add(option);
}
}

//choose registerd trainers to edit
var chooseTrainerToEdit = function() {
    var trainersChoose = document.getElementById("chooseTedit");
    index = trainersChoose.selectedIndex-1;
    var trainersObject = trainersList[index];
    document.getElementById("tfirstname").value = trainersObject.firstName;
    document.getElementById("tlastname").value = trainersObject.lastName;
    document.getElementById("choosesubject").value = trainersObject.subject;
}

//update trainers
var updateTrainers = function() {
    var trainersChoose = document.getElementById("chooseTedit");
    index = trainersChoose.selectedIndex-1;
    for (let i = 0; i < trainersList.length; i++){
        trainersList[index].firstName = document.getElementById("tfirstname").value;
        trainersList[index].lastName = document.getElementById("tlastname").value;
        trainersList[index].subject = document.getElementById("choosesubject").value;
    }
}


//submit students infos localy
var studentsList = [];
var addStudent = () => {
    var studentsObject = {
        firstName: document.getElementById("sfirstname").value,
        lastName: document.getElementById("slastname").value,
        dateofbirth: document.getElementById("birth").value,
        fees: document.getElementById("fees").value
    }
    studentsList.push(studentsObject);
}

//add students as options for edditing
var addStudentsOption = function() {
var studentsChoose = document.getElementById("chooseSedit");
var option = document.createElement("option");
for (let i = 0; i < studentsList.length; i++) {
    option.text = `${i+1}: ${studentsList[i].lastName}`;
    studentsChoose.add(option);
}
}

//choose registerd student to edit
var chooseStudentToEdit = function() {
var studentsChoose = document.getElementById("chooseSedit");
index = studentsChoose.selectedIndex-1;
var studentsObject = studentsList[index];
document.getElementById("sfirstname").value = studentsObject.firstName;
document.getElementById("slastname").value = studentsObject.lastName;
document.getElementById("birth").value = studentsObject.dateofbirth;
document.getElementById("fees").value = studentsObject.fees;
}

//update students
var updateStudents = function() {
    var studentsChoose = document.getElementById("chooseSedit");
    index = studentsChoose.selectedIndex-1;
    for (let i = 0; i < studentsList.length; i++){
        studentsList[index].firstName = document.getElementById("sfirstname").value;
        studentsList[index].lastName = document.getElementById("slastname").value;
        studentsList[index].dateofbirth = document.getElementById("birth").value;
        studentsList[index].fees = document.getElementById("fees").value;
    }
}


//submit courses infos localy
var coursesList = [];
var addCourse = () => {
    var coursesObject = {
        courseTitle: document.getElementById("coursetitle").value,
        stream: document.getElementById("coursestream").value,
        type: document.getElementById("coursetype").value,
        courseStartDate: document.getElementById("startdate").value,
        courseEndDate: document.getElementById("enddate").value
    }
    coursesList.push(coursesObject);
}

//add courses as options for edditing
var addCoursesOption = function() {
var coursesChoose = document.getElementById("chooseCedit");
var option = document.createElement("option");
for (let i = 0; i < coursesList.length; i++) {
    option.text = `${i+1}: ${coursesList[i].courseTitle}`;
    coursesChoose.add(option);
}
}

/*choose registerd courses to edit*/
var chooseCourseToEdit = function() {
var coursesChoose = document.getElementById("chooseCedit");
index = coursesChoose.selectedIndex-1;
var coursesObject = coursesList[index];
document.getElementById("coursetitle").value = coursesObject.courseTitle;
document.getElementById("coursestream").value = coursesObject.stream;
document.getElementById("coursetype").value = coursesObject.type;
document.getElementById("startdate").value = coursesObject.courseStartDate;
document.getElementById("enddate").value = coursesObject.courseEndDate;
}

//update courses
var updateCourses = function() {
    var coursesChoose = document.getElementById("chooseCedit");
    index = coursesChoose.selectedIndex-1;
    for (let i = 0; i < coursesList.length; i++){
        coursesList[index].courseTitle = document.getElementById("coursetitle").value;
        coursesList[index].stream = document.getElementById("coursestream").value;
        coursesList[index].type = document.getElementById("coursetype").value;
        coursesList[index].courseStartDate = document.getElementById("startdate").value;
        coursesList[index].courseEndDate = document.getElementById("enddate").value;
    }
}


//submit assignments infos localy
var assignmentsList = [];
var addAssignment = () => {
    var assignmentsObject = {
        assignmentTitle: document.getElementById("assigntitle").value,
        assignmentsSubDate: document.getElementById("subdate").value,
        assignmentsOralMark: document.getElementById("omark").value,
        assignmentsTotalMark: document.getElementById("tmark").value
    }
    assignmentsList.push(assignmentsObject);
}

//add assignments as options for edditing
var addAssignmentsOption = function() {
var assignmentsChoose = document.getElementById("chooseAedit");
var option = document.createElement("option");
for (let i = 0; i < assignmentsList.length; i++) {
    option.text = `${i+1}: ${assignmentsList[i].assignmentTitle}`;
    assignmentsChoose.add(option);
}
}

//choose registerd assignments to edit
var chooseAssignmentToEdit = function() {
var assignmentsChoose = document.getElementById("chooseAedit");
index = assignmentsChoose.selectedIndex-1;
var assignmentsObject = assignmentsList[index];
document.getElementById("assigntitle").value = assignmentsObject.assignmentTitle;
document.getElementById("subdate").value = assignmentsObject.assignmentsSubDate;
document.getElementById("omark").value = assignmentsObject.assignmentsOralMark;
document.getElementById("tmark").value = assignmentsObject.assignmentsTotalMark;
}

//update assignment
var updateAssignments = function() {
    var assignmentsChoose = document.getElementById("chooseAedit");
    index = assignmentsChoose.selectedIndex-1;
    for (let i = 0; i < assignmentsList.length; i++){
        assignmentsList[index].assignmentTitle = document.getElementById("assigntitle").value;
        assignmentsList[index].assignmentsSubDate = document.getElementById("subdate").value;
        assignmentsList[index].assignmentsOralMark = document.getElementById("omark").value;
        assignmentsList[index].assignmentsTotalMark = document.getElementById("tmark").value;
    }
}

//prevent submit
function cancelSubmit() {
    return false;
};

