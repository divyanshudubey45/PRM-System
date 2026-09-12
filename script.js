// ==============================
// ROLE SELECTION
// ==============================

function selectRole(role) {

    if (role === "patient") {
        window.location.href = "patient-login.html";
    }

    else if (role === "doctor") {
        window.location.href = "doctor-login.html";
    }

    else if (role === "admin") {
    window.location.href = "admin-login.html";
}

}


// ==============================
// PATIENT REGISTRATION
// ==============================

const registerForm =
    document.getElementById("patientRegisterForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("patientName").value;

        const age =
            document.getElementById("patientAge").value;

        const gender =
            document.getElementById("patientGender").value;

        const email =
            document.getElementById("patientEmailRegister").value;

        const phone =
            document.getElementById("patientPhone").value;

        const password =
            document.getElementById("patientPasswordRegister").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;
        }


        const patient = {

            name: name,
            age: age,
            gender: gender,
            email: email,
            phone: phone,
            password: password

        };


        localStorage.setItem(
            "patient",
            JSON.stringify(patient)
        );


        alert("Registration successful!");

        window.location.href =
            "patient-login.html";

    });

}


// ==============================
// PATIENT LOGIN
// ==============================

const patientLoginForm =
    document.getElementById("patientLoginForm");

if (patientLoginForm) {

    patientLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("patientEmail").value;

        const password =
            document.getElementById("patientPassword").value;


        const patientData =
            localStorage.getItem("patient");


        if (!patientData) {

            alert(
                "No patient account found. Please register first."
            );

            return;
        }


        const patient =
            JSON.parse(patientData);


        if (
            email === patient.email &&
            password === patient.password
        ) {

            alert("Login successful!");

            window.location.href =
                "patient-dashboard.html";

        }

        else {

            alert("Invalid email or password!");

        }

    });

}


// ==============================
// PATIENT DASHBOARD
// ==============================

const patientDashboardName =
    document.getElementById("dashboardName");

if (patientDashboardName) {

    const patientData =
        localStorage.getItem("patient");


    if (patientData) {

        const patient =
            JSON.parse(patientData);


        document.getElementById("dashboardName").textContent =
            patient.name;

        document.getElementById("profileName").textContent =
            patient.name;

        document.getElementById("profileAge").textContent =
            patient.age;

        document.getElementById("profileGender").textContent =
            patient.gender;

        document.getElementById("profileEmail").textContent =
            patient.email;

        document.getElementById("profilePhone").textContent =
            patient.phone;

        document.getElementById("patientId").textContent =
            "PAT-" +
            patient.email
                .substring(0, 4)
                .toUpperCase();

    }

}


// ==============================
// PATIENT LOGOUT
// ==============================

function logoutPatient() {

    window.location.href =
        "patient-login.html";

}


// ==============================
// DOCTOR REGISTRATION
// ==============================

const doctorRegisterForm =
    document.getElementById("doctorRegisterForm");

if (doctorRegisterForm) {

    doctorRegisterForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("doctorName").value;

        const specialization =
            document.getElementById("doctorSpecialization").value;

        const license =
            document.getElementById("doctorLicense").value;

        const email =
            document.getElementById("doctorEmailRegister").value;

        const phone =
            document.getElementById("doctorPhone").value;

        const password =
            document.getElementById("doctorPasswordRegister").value;

        const confirmPassword =
            document.getElementById("doctorConfirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;
        }


        const doctor = {

            name: name,
            specialization: specialization,
            license: license,
            email: email,
            phone: phone,
            password: password

        };


        localStorage.setItem(
            "doctor",
            JSON.stringify(doctor)
        );


        alert("Doctor registration successful!");

        window.location.href =
            "doctor-login.html";

    });

}


// ==============================
// DOCTOR LOGIN
// ==============================

const doctorLoginForm =
    document.getElementById("doctorLoginForm");

if (doctorLoginForm) {

    doctorLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("doctorEmail").value;

        const password =
            document.getElementById("doctorPassword").value;


        const doctorData =
            localStorage.getItem("doctor");


        if (!doctorData) {

            alert(
                "No doctor account found. Please register first."
            );

            return;
        }


        const doctor =
            JSON.parse(doctorData);


        if (
            email === doctor.email &&
            password === doctor.password
        ) {

            alert("Doctor login successful!");

            window.location.href =
                "doctor-dashboard.html";

        }

        else {

            alert("Invalid email or password!");

        }

    });

}


// ==============================
// DOCTOR DASHBOARD
// ==============================

const doctorDashboardName =
    document.getElementById("doctorName");

if (doctorDashboardName) {

    const doctorData =
        localStorage.getItem("doctor");


    if (doctorData) {

        const doctor =
            JSON.parse(doctorData);


        doctorDashboardName.textContent =
            doctor.name;

    }

}


// ==============================
// DOCTOR LOGOUT
// ==============================

function logoutDoctor() {

    window.location.href =
        "doctor-login.html";

}


// ==============================
// PATIENT LIST
// ==============================

const patientTable =
    document.getElementById("patientTable");

if (patientTable) {

    const patientData =
        localStorage.getItem("patient");


    if (patientData) {

        const patient =
            JSON.parse(patientData);


        const patientId =
            "PAT-" +
            patient.email
                .substring(0, 4)
                .toUpperCase();


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${patientId}</td>

            <td>${patient.name}</td>

            <td>${patient.age}</td>

            <td>${patient.gender}</td>

            <td>${patient.email}</td>

            <td>

                <button
                    class="view-button"
                    onclick="viewPatient()">

                    👁 View

                </button>

                <button
                    class="download-button"
                    onclick="createReport()">

                    📄 Report

                </button>

            </td>

        `;


        patientTable.appendChild(row);

    }

    else {

        patientTable.innerHTML = `

            <tr>

                <td colspan="6">
                    No patients registered yet.
                </td>

            </tr>

        `;

    }

}


// ==============================
// VIEW PATIENT
// ==============================

function viewPatient() {

    const patientData =
        localStorage.getItem("patient");


    if (!patientData) {

        alert("Patient not found.");

        return;
    }


    const patient =
        JSON.parse(patientData);


    alert(

        "Patient Name: " + patient.name +

        "\nAge: " + patient.age +

        "\nGender: " + patient.gender +

        "\nEmail: " + patient.email +

        "\nPhone: " + patient.phone

    );

}

// ==============================
// CREATE REPORT PAGE
// ==============================

const createReportForm =
    document.getElementById("createReportForm");

if (createReportForm) {

    const reportPatient =
        document.getElementById("reportPatient");

    const reportDoctor =
        document.getElementById("reportDoctor");

    const reportDate =
        document.getElementById("reportDate");

    const symptoms =
        document.getElementById("symptoms");

    const diagnosis =
        document.getElementById("diagnosis");

    const testName =
        document.getElementById("testName");

    const testResult =
        document.getElementById("testResult");

    const prescription =
        document.getElementById("prescription");

    const doctorAdvice =
        document.getElementById("doctorAdvice");

    const reportSubmitButton =
        document.getElementById("reportSubmitButton");


    // ==============================
    // LOAD DOCTOR
    // ==============================

    const doctorData =
        localStorage.getItem("doctor");

    let doctor = null;

    if (doctorData) {

        doctor = JSON.parse(doctorData);

        reportDoctor.value =
            doctor.name;
    }


    // ==============================
    // LOAD PATIENT
    // ==============================

    const patientData =
        localStorage.getItem("patient");

    let patient = null;

    if (patientData) {

        patient =
            JSON.parse(patientData);

        const option =
            document.createElement("option");

        option.value =
            patient.email;

        option.textContent =
            `${patient.name} (${patient.email})`;

        reportPatient.appendChild(option);
    }


    // ==============================
    // TODAY'S DATE
    // ==============================

    reportDate.value =
        new Date()
            .toISOString()
            .split("T")[0];


    // ==============================
    // CHECK EDIT MODE
    // ==============================

    const editingReportId =
        localStorage.getItem("editingReportId");

    let editingReport = null;

    if (editingReportId) {

        const reports =
            JSON.parse(
                localStorage.getItem("medicalReports")
            ) || [];

        editingReport =
            reports.find(
                report =>
                    String(report.id) ===
                    String(editingReportId)
            );


        if (editingReport) {

            // Change heading
            const heading =
                document.querySelector(
                    ".report-form-card h2"
                );

            if (heading) {

                heading.textContent =
                    "Edit Medical Report";
            }


            // Change button
            reportSubmitButton.textContent =
                "Update Medical Report";


            // Fill existing data
            reportPatient.value =
                editingReport.patientEmail;

            reportDoctor.value =
                editingReport.doctorName;

            reportDate.value =
                editingReport.date;

            symptoms.value =
                editingReport.symptoms;

            diagnosis.value =
                editingReport.diagnosis;

            testName.value =
                editingReport.testName;

            testResult.value =
                editingReport.testResult;

            prescription.value =
                editingReport.prescription;

            doctorAdvice.value =
                editingReport.doctorAdvice || "";
        }
    }


    // ==============================
    // SUBMIT REPORT
    // ==============================

    createReportForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (!patient) {

                alert(
                    "Patient not found."
                );

                return;
            }


            let reports =
                JSON.parse(
                    localStorage.getItem("medicalReports")
                ) || [];


            // ==============================
            // UPDATE EXISTING REPORT
            // ==============================

            if (editingReport) {

                const reportIndex =
                    reports.findIndex(
                        report =>
                            String(report.id) ===
                            String(editingReport.id)
                    );


                if (reportIndex !== -1) {

                    reports[reportIndex] = {

                        ...reports[reportIndex],

                        patientEmail:
                            patient.email,

                        patientName:
                            patient.name,

                        doctorName:
                            doctor
                                ? doctor.name
                                : editingReport.doctorName,

                        date:
                            reportDate.value,

                        symptoms:
                            symptoms.value,

                        diagnosis:
                            diagnosis.value,

                        testName:
                            testName.value,

                        testResult:
                            testResult.value,

                        prescription:
                            prescription.value,

                        doctorAdvice:
                            doctorAdvice.value
                    };


                    localStorage.setItem(
                        "medicalReports",
                        JSON.stringify(reports)
                    );


                    localStorage.removeItem(
                        "editingReportId"
                    );


                    alert(
                        "Medical report updated successfully!"
                    );


                    window.location.href =
                        "doctor-reports.html";

                    return;
                }
            }


            // ==============================
            // CREATE NEW REPORT
            // ==============================

            const newReport = {

                id: Date.now(),

                patientEmail:
                    patient.email,

                patientName:
                    patient.name,

                doctorName:
                    doctor
                        ? doctor.name
                        : "",

                date:
                    reportDate.value,

                symptoms:
                    symptoms.value,

                diagnosis:
                    diagnosis.value,

                testName:
                    testName.value,

                testResult:
                    testResult.value,

                prescription:
                    prescription.value,

                doctorAdvice:
                    doctorAdvice.value
            };


            reports.push(newReport);


            localStorage.setItem(
                "medicalReports",
                JSON.stringify(reports)
            );


            alert(
                "Medical report created successfully!"
            );


            window.location.href =
                "doctor-reports.html";
        }
    );
}



// ==============================
// PATIENT MY REPORTS
// ==============================

const reportsTable =
    document.getElementById("reportsTable");

if (reportsTable) {

    const patientData =
        localStorage.getItem("patient");


    const medicalReports =
        JSON.parse(
            localStorage.getItem("medicalReports")
        ) || [];


    if (!patientData) {

        reportsTable.innerHTML = `

            <tr>

                <td colspan="5">
                    Please login as a patient.
                </td>

            </tr>

        `;

    }

    else {

        const patient =
            JSON.parse(patientData);


        const patientReports =
            medicalReports.filter(function(report) {

                return (
                    report.patientEmail ===
                    patient.email
                );

            });


        window.currentPatientReports =
            patientReports;


        if (patientReports.length === 0) {

            reportsTable.innerHTML = `

                <tr>

                    <td colspan="5">
                        No medical reports available.
                    </td>

                </tr>

            `;

        }

        else {

            patientReports.forEach(
                function(report, index) {

                    const row =
                        document.createElement("tr");


                    row.innerHTML = `

                        <td>
                            ${report.testName}
                        </td>

                        <td>
                            ${report.doctorName}
                        </td>

                        <td>
                            ${report.date}
                        </td>

                        <td>
                            Completed
                        </td>

                        <td>

                            <button
                                class="view-button"
                                onclick="viewReport(${index})">

                                👁 View

                            </button>

                            <button
                                class="download-button"
                                onclick="downloadReport(${index})">

                                📥 Download

                            </button>

                        </td>

                    `;


                    reportsTable.appendChild(row);

                }
            );

        }

    }

}


// ==============================
// VIEW REPORT
// ==============================

let currentReportIndex = null;


function viewReport(index) {

    const report =
        window.currentPatientReports[index];


    currentReportIndex =
        index;


    let reportHTML = `

        <div
            class="report-document"
            id="pdfReport">

            <h2>
                Medical Report
            </h2>


            <div class="report-info">

                <div>

                    <strong>
                        Patient
                    </strong>

                    <p>
                        ${report.patientName}
                    </p>

                </div>


                <div>

                    <strong>
                        Doctor
                    </strong>

                    <p>
                        ${report.doctorName}
                    </p>

                </div>


                <div>

                    <strong>
                        Date
                    </strong>

                    <p>
                        ${report.date}
                    </p>

                </div>


                <div>

                    <strong>
                        Test
                    </strong>

                    <p>
                        ${report.testName}
                    </p>

                </div>

            </div>


            <h3>
                Symptoms
            </h3>

            <p>
                ${report.symptoms}
            </p>


            <h3>
                Diagnosis
            </h3>

            <p>
                ${report.diagnosis}
            </p>


            <h3>
                Test Result
            </h3>

            <p>
                ${report.testResult}
            </p>


            <h3>
                Prescription
            </h3>

            <p>
                ${report.prescription}
            </p>


            <h3>
                Doctor's Advice
            </h3>

            <p>
                ${report.doctorAdvice ||
                "No additional advice."}
            </p>

        </div>

    `;


    document.getElementById(
        "reportDetails"
    ).innerHTML = reportHTML;


    document.getElementById(
        "reportModal"
    ).style.display = "flex";

}


// ==============================
// CLOSE REPORT
// ==============================

function closeReport() {

    document.getElementById(
        "reportModal"
    ).style.display = "none";

}


// ==============================
// DOWNLOAD REPORT
// ==============================

function downloadReport(index) {

    const report =
        window.currentPatientReports[index];


    viewReport(index);


    setTimeout(function() {

        const element =
            document.getElementById("pdfReport");


        const options = {

            margin: 10,

            filename:
                report.testName +
                "-Report.pdf",

            image: {
                type: "jpeg",
                quality: 0.98
            },

            html2canvas: {
                scale: 2
            },

            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait"
            }

        };


        html2pdf()
            .set(options)
            .from(element)
            .save();


    }, 300);

}


// ==============================
// DOWNLOAD CURRENT REPORT
// ==============================

function downloadCurrentReport() {

    if (currentReportIndex !== null) {

        downloadReport(
            currentReportIndex
        );

    }

}



// ================= ADMIN LOGIN =================

const adminLoginForm = document.getElementById("adminLoginForm");

if (adminLoginForm) {

    adminLoginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = document.getElementById("adminEmail").value;
        const password = document.getElementById("adminPassword").value;

        if (email === "admin@gmail.com" && password === "admin123") {

            alert("Admin Login Successful!");

            window.location.href = "admin-dashboard.html";

        } else {

            alert("Invalid Admin Email or Password");

        }

    });

}

// ================= ADMIN DASHBOARD =================

if (document.getElementById("totalPatients")) {

    const patient = JSON.parse(localStorage.getItem("patient"));

    const doctor = JSON.parse(localStorage.getItem("doctor"));

    const reports = JSON.parse(
        localStorage.getItem("medicalReports")
    ) || [];


    document.getElementById("totalPatients").textContent =
        patient ? "1" : "0";

    document.getElementById("totalDoctors").textContent =
        doctor ? "1" : "0";

    document.getElementById("totalReports").textContent =
        reports.length;
}


// ================= ADMIN LOGOUT =================

function logoutAdmin() {

    window.location.href = "admin-login.html";

}

// ================= ADMIN - DOCTOR LIST =================

if (document.getElementById("doctorTable")) {

    const doctorTable = document.getElementById("doctorTable");

    const doctor = JSON.parse(localStorage.getItem("doctor"));

    if (!doctor) {

        doctorTable.innerHTML = `
            <tr>
                <td colspan="7">No doctors registered.</td>
            </tr>
        `;

    } else {

        const doctorId =
            "DOC-" + doctor.email.substring(0, 4).toUpperCase();

        doctorTable.innerHTML = `
            <tr>

                <td>${doctorId}</td>

                <td>${doctor.name}</td>

                <td>${doctor.specialization}</td>

                <td>${doctor.license}</td>

                <td>${doctor.email}</td>

                <td>${doctor.phone}</td>

                <td>
                    <button
                        class="view-button"
                        onclick="viewDoctor()">
                        View
                    </button>
                </td>

            </tr>
        `;
    }
}


// ================= VIEW DOCTOR =================

function viewDoctor() {

    const doctor = JSON.parse(localStorage.getItem("doctor"));

    if (!doctor) {
        alert("Doctor not found.");
        return;
    }

    alert(
        "Doctor Details\n\n" +
        "Name: " + doctor.name + "\n" +
        "Specialization: " + doctor.specialization + "\n" +
        "License: " + doctor.license + "\n" +
        "Email: " + doctor.email + "\n" +
        "Phone: " + doctor.phone
    );
}


// ================= ADMIN - ALL REPORTS =================

if (document.getElementById("adminReportsTable")) {

    const adminReportsTable =
        document.getElementById("adminReportsTable");

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];


    if (reports.length === 0) {

        adminReportsTable.innerHTML = `
            <tr>
                <td colspan="7">
                    No reports available.
                </td>
            </tr>
        `;

    } else {

        adminReportsTable.innerHTML = "";

        reports.forEach((report, index) => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>REP-${report.id}</td>

                <td>${report.patientName}</td>

                <td>${report.doctorName}</td>

                <td>${report.testName}</td>

                <td>${report.date}</td>

                <td>Completed</td>

                <td>
                    <button
                        class="view-button"
                        onclick="viewAdminReport(${index})">
                        View
                    </button>
                </td>
            `;

            adminReportsTable.appendChild(row);

        });
    }
}


// ================= VIEW ADMIN REPORT =================

function viewAdminReport(index) {

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    const report = reports[index];

    if (!report) {
        alert("Report not found.");
        return;
    }

    alert(
        "Medical Report\n\n" +

        "Patient: " + report.patientName + "\n" +

        "Doctor: " + report.doctorName + "\n" +

        "Date: " + report.date + "\n" +

        "Test: " + report.testName + "\n" +

        "Test Result: " + report.testResult + "\n\n" +

        "Diagnosis: " + report.diagnosis + "\n\n" +

        "Prescription: " + report.prescription
    );
}


// ================= ADMIN - PATIENT LIST =================

if (document.getElementById("adminPatientTable")) {

    const adminPatientTable =
        document.getElementById("adminPatientTable");

    const patient =
        JSON.parse(localStorage.getItem("patient"));

    if (!patient) {

        adminPatientTable.innerHTML = `
            <tr>
                <td colspan="7">
                    No patients registered.
                </td>
            </tr>
        `;

    } else {

        const patientId =
            "PAT-" + patient.email.substring(0, 4).toUpperCase();

        adminPatientTable.innerHTML = `
            <tr>

                <td>${patientId}</td>

                <td>${patient.name}</td>

                <td>${patient.age}</td>

                <td>${patient.gender}</td>

                <td>${patient.email}</td>

                <td>${patient.phone}</td>

                <td>
                    <button
                        class="view-button"
                        onclick="viewAdminPatient()">
                        View
                    </button>
                </td>

            </tr>
        `;
    }
}


// ================= VIEW ADMIN PATIENT =================

function viewAdminPatient() {

    const patient =
        JSON.parse(localStorage.getItem("patient"));

    if (!patient) {
        return;
    }

    const patientId =
        "PAT-" + patient.email.substring(0, 4).toUpperCase();

    document.getElementById("patientModalDetails").innerHTML = `

        <div class="modal-detail">
            <strong>Patient ID</strong>
            <span>${patientId}</span>
        </div>

        <div class="modal-detail">
            <strong>Name</strong>
            <span>${patient.name}</span>
        </div>

        <div class="modal-detail">
            <strong>Age</strong>
            <span>${patient.age}</span>
        </div>

        <div class="modal-detail">
            <strong>Gender</strong>
            <span>${patient.gender}</span>
        </div>

        <div class="modal-detail">
            <strong>Email</strong>
            <span>${patient.email}</span>
        </div>

        <div class="modal-detail">
            <strong>Phone</strong>
            <span>${patient.phone}</span>
        </div>
    `;

    document.getElementById("patientModal")
        .classList.add("show");
}


function closeAdminModal() {

    document.getElementById("patientModal")
        .classList.remove("show");

}

// ================= STYLISH ALERT SYSTEM =================

(function () {

    const originalAlert = window.alert;

    function createAlertBox() {

        if (document.getElementById("appAlertOverlay")) {
            return;
        }

        const alertHTML = `
            <div id="appAlertOverlay" class="app-alert-overlay">

                <div class="app-alert-box">

                    <div class="app-alert-icon">
                        🔔
                    </div>

                    <div class="app-alert-title">
                        Notification
                    </div>

                    <div id="appAlertMessage" class="app-alert-message">
                    </div>

                    <button
                        id="appAlertButton"
                        class="app-alert-button">
                        OK
                    </button>

                </div>

            </div>
        `;

        document.body.insertAdjacentHTML("beforeend", alertHTML);

        document
            .getElementById("appAlertButton")
            .addEventListener("click", closeAppAlert);

        document
            .getElementById("appAlertOverlay")
            .addEventListener("click", function (e) {

                if (e.target === this) {
                    closeAppAlert();
                }

            });
    }


    function closeAppAlert() {

        const overlay =
            document.getElementById("appAlertOverlay");

        if (overlay) {
            overlay.classList.remove("show");
        }
    }


    window.alert = function (message) {

        createAlertBox();

        document.getElementById("appAlertMessage")
            .textContent = message;

        document.getElementById("appAlertOverlay")
            .classList.add("show");

    };


})();

// ================= PRESCRIPTIONS =================

if (document.getElementById("prescriptionsContainer")) {

    const container =
        document.getElementById("prescriptionsContainer");

    const patient =
        JSON.parse(localStorage.getItem("patient"));

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];


    if (!patient) {

        container.innerHTML = `
            <div class="no-prescription">
                <h2>⚠️ Please Login</h2>
                <p>Please login as a patient to view prescriptions.</p>
            </div>
        `;

    } else {

        const patientReports = reports.filter(
            report => report.patientEmail === patient.email
        );


        const prescriptions = patientReports.filter(
            report =>
                report.prescription &&
                report.prescription.trim() !== ""
        );


        if (prescriptions.length === 0) {

            container.innerHTML = `
                <div class="no-prescription">

                    <h2>💊 No Prescriptions</h2>

                    <p>
                        You don't have any prescriptions yet.
                    </p>

                </div>
            `;

        } else {

            container.innerHTML = "";

            prescriptions.reverse().forEach(report => {

                const card =
                    document.createElement("div");

                card.className = "prescription-card";

                card.innerHTML = `

                    <div class="prescription-header">

                        <h2>💊 Prescription</h2>

                        <span class="prescription-date">
                            ${report.date}
                        </span>

                    </div>


                    <div class="prescription-info">

                        <p>
                            <strong>👨‍⚕️ Doctor:</strong>
                            ${report.doctorName}
                        </p>

                        <p>
                            <strong>🧪 Test:</strong>
                            ${report.testName}
                        </p>

                        <p>
                            <strong>🩺 Diagnosis:</strong>
                            ${report.diagnosis}
                        </p>

                    </div>


                    <div class="prescription-medicine">

                        <h3>💊 Medicines / Prescription</h3>

                        <p>
                            ${report.prescription}
                        </p>

                    </div>


                    ${
                        report.doctorAdvice
                        ?
                        `
                        <div class="prescription-advice">

                            <strong>📌 Doctor's Advice</strong>

                            <p>
                                ${report.doctorAdvice}
                            </p>

                        </div>
                        `
                        : ""
                    }

                `;

                container.appendChild(card);

            });

        }
    }
}

// ================= DOCTOR - MY REPORTS =================

let doctorReportsData = [];


if (document.getElementById("doctorReportsTable")) {

    const doctorReportsTable =
        document.getElementById("doctorReportsTable");

    const doctor =
        JSON.parse(localStorage.getItem("doctor"));

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];


    if (!doctor) {

        doctorReportsTable.innerHTML = `
            <tr>
                <td colspan="7">
                    Please login as a doctor.
                </td>
            </tr>
        `;

    } else {

        // Reports created by this doctor

        doctorReportsData = reports.filter(
            report => report.doctorName === doctor.name
        );

        displayDoctorReports(doctorReportsData);


        // Search

        const searchInput =
            document.getElementById("doctorReportSearch");

        searchInput.addEventListener("input", function () {

            const searchValue =
                this.value.toLowerCase().trim();

            const filteredReports =
                doctorReportsData.filter(report =>

                    report.patientName
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    report.testName
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    report.diagnosis
                        .toLowerCase()
                        .includes(searchValue)

                );

            displayDoctorReports(filteredReports);

        });

    }
}


// ================= DISPLAY DOCTOR REPORTS =================

function displayDoctorReports(reports) {

    const table =
        document.getElementById("doctorReportsTable");

    if (!table) {
        return;
    }


    if (reports.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="7" class="no-doctor-reports">
                    📄 No reports found.
                </td>
            </tr>
        `;

        return;
    }


    table.innerHTML = "";


    reports.forEach((report) => {

        const originalIndex =
            doctorReportsData.indexOf(report);

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                REP-${report.id}
            </td>

            <td>
                ${report.patientName}
            </td>

            <td>
                ${report.testName}
            </td>

            <td>
                ${report.diagnosis}
            </td>

            <td>
                ${report.date}
            </td>

            <td>
                Completed
            </td>

            <td>

    <div class="report-actions">

        <button
            class="view-button"
            onclick="viewDoctorReport(${originalIndex})">
            View
        </button>

        <button
            class="edit-button"
            onclick="editDoctorReport(${originalIndex})">
            Edit
        </button>

        <button
            class="delete-button"
            onclick="deleteDoctorReport(${originalIndex})">
            Delete
        </button>

    </div>

</td>

        `;


        table.appendChild(row);

    });
}


// ================= VIEW DOCTOR REPORT =================

function viewDoctorReport(index) {

    const report =
        doctorReportsData[index];


    if (!report) {
        return;
    }


    const details =
        document.getElementById("doctorReportDetails");


    details.innerHTML = `

        <div class="modal-detail">
            <strong>Report ID</strong>
            <span>REP-${report.id}</span>
        </div>

        <div class="modal-detail">
            <strong>Patient</strong>
            <span>${report.patientName}</span>
        </div>

        <div class="modal-detail">
            <strong>Doctor</strong>
            <span>${report.doctorName}</span>
        </div>

        <div class="modal-detail">
            <strong>Date</strong>
            <span>${report.date}</span>
        </div>


        <div class="doctor-report-section">

            <h3>🩺 Symptoms</h3>

            <p>
                ${report.symptoms || "Not provided"}
            </p>

        </div>


        <div class="doctor-report-section">

            <h3>🔬 Diagnosis</h3>

            <p>
                ${report.diagnosis || "Not provided"}
            </p>

        </div>


        <div class="doctor-report-section">

            <h3>🧪 Test</h3>

            <p>
                <strong>${report.testName || "Not provided"}</strong>
            </p>

            <p>
                ${report.testResult || "No result provided"}
            </p>

        </div>


        <div class="doctor-report-section">

            <h3>💊 Prescription</h3>

            <p>
                ${report.prescription || "No prescription"}
            </p>

        </div>


        <div class="doctor-report-section">

            <h3>📌 Doctor's Advice</h3>

            <p>
                ${report.doctorAdvice || "No advice provided"}
            </p>

        </div>

    `;


    document
        .getElementById("doctorReportModal")
        .classList.add("show");
}


// ================= CLOSE DOCTOR REPORT =================

function closeDoctorReport() {

    document
        .getElementById("doctorReportModal")
        .classList.remove("show");

}

// ================= EDIT DOCTOR REPORT =================

function editDoctorReport(index) {

    const report = doctorReportsData[index];

    if (!report) {
        return;
    }

    localStorage.setItem(
        "editingReportId",
        report.id
    );

    window.location.href = "create-report.html";
}


// ================= DELETE DOCTOR REPORT =================

function deleteDoctorReport(index) {

    const report = doctorReportsData[index];

    if (!report) {
        return;
    }

    if (!confirm(
        "Are you sure you want to delete this report?"
    )) {
        return;
    }

    let reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    reports = reports.filter(
        item => item.id !== report.id
    );

    localStorage.setItem(
        "medicalReports",
        JSON.stringify(reports)
    );

    alert("Report deleted successfully!");

    doctorReportsData = reports.filter(
        item => {

            const doctor =
                JSON.parse(localStorage.getItem("doctor"));

            return doctor &&
                item.doctorName === doctor.name;
        }
    );

    displayDoctorReports(doctorReportsData);
}