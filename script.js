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

    const patient =
        JSON.parse(localStorage.getItem("patient"));

    const doctor =
        JSON.parse(localStorage.getItem("doctor"));

    const reports =
        JSON.parse(
            localStorage.getItem("medicalReports")
        ) || [];


    // Total Patients
    document.getElementById("totalPatients").textContent =
        patient ? "1" : "0";


    // Total Doctors
    document.getElementById("totalDoctors").textContent =
        doctor ? "1" : "0";


    // Total Reports
    document.getElementById("totalReports").textContent =
        reports.length;


    // Today's Reports
    const today =
        new Date()
            .toISOString()
            .split("T")[0];

    const todayReports =
        reports.filter(
            report => report.date === today
        );

    document.getElementById("todayReports").textContent =
        todayReports.length;


    // Total Prescriptions
    const prescriptions =
        reports.filter(
            report =>
                report.prescription &&
                report.prescription.trim() !== ""
        );

    document.getElementById("totalPrescriptions").textContent =
        prescriptions.length;

    // ================= RECENT REPORTS =================

const recentReportsTable =
    document.getElementById("recentReportsTable");

if (recentReportsTable) {

    const recentReports =
        [...reports]
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            )
            .slice(0, 5);


    if (recentReports.length === 0) {

        recentReportsTable.innerHTML = `
            <tr>
                <td colspan="5">
                    No reports available.
                </td>
            </tr>
        `;

    } else {

        recentReportsTable.innerHTML = "";

        recentReports.forEach(report => {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>REP-${report.id}</td>
                <td>${report.patientName}</td>
                <td>${report.doctorName}</td>
                <td>${report.testName}</td>
                <td>${report.date}</td>
            `;

            recentReportsTable.appendChild(row);

        });
    }
}
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
    <div class="doctor-actions">

        <button
            class="view-button"
            onclick="viewDoctor()">
            👁 View
        </button>

        <button
            class="edit-button"
            onclick="editDoctor()">
            ✏️ Edit
        </button>

        <button
            class="delete-button"
            onclick="deleteDoctor()">
            🗑️ Delete
        </button>

    </div>
</td>

            </tr>
        `;
    }
}
// ================= DOCTOR SEARCH =================

const doctorSearch =
    document.getElementById("doctorSearch");

if (doctorSearch) {

    doctorSearch.addEventListener(
        "input",
        function () {

            const searchValue =
                this.value.toLowerCase().trim();

            const doctor =
                JSON.parse(
                    localStorage.getItem("doctor")
                );

            const doctorTable =
                document.getElementById("doctorTable");

            if (!doctor) {
                return;
            }

            const matches =
                doctor.name.toLowerCase().includes(searchValue) ||
                doctor.specialization.toLowerCase().includes(searchValue) ||
                doctor.email.toLowerCase().includes(searchValue) ||
                doctor.license.toLowerCase().includes(searchValue);


            if (!matches) {

                doctorTable.innerHTML = `
                    <tr>
                        <td colspan="7">
                            🔍 No doctor found.
                        </td>
                    </tr>
                `;

                return;
            }


            const doctorId =
                "DOC-" +
                doctor.email
                    .substring(0, 4)
                    .toUpperCase();


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
    );
}

/// ================= VIEW DOCTOR =================

function viewDoctor() {
    const doctor = JSON.parse(localStorage.getItem("doctor"));

    if (!doctor) {
        alert("Doctor not found.");
        return;
    }

    const modalHTML = `
        <div id="doctorViewOverlay" class="doctor-view-overlay">

            <div class="doctor-view-box">

                <div class="doctor-view-header">

                    <div class="doctor-view-avatar">
                        👨‍⚕️
                    </div>

                    <h2>${doctor.name}</h2>
                    <p>${doctor.specialization}</p>

                </div>

                <div class="doctor-view-details">

                    <div class="doctor-view-detail">
                        <span>📜 License</span>
                        <span>${doctor.license}</span>
                    </div>

                    <div class="doctor-view-detail">
                        <span>📧 Email</span>
                        <span>${doctor.email}</span>
                    </div>

                    <div class="doctor-view-detail">
                        <span>📱 Phone</span>
                        <span>${doctor.phone}</span>
                    </div>

                </div>

                <button
                    class="doctor-view-close"
                    onclick="closeDoctorViewModal()">
                    Close
                </button>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
}


// Close View Modal
function closeDoctorViewModal() {
    const modal = document.getElementById("doctorViewOverlay");

    if (modal) {
        modal.remove();
    }
}

// ================= ADMIN - ALL REPORTS =================

function displayAdminReports() {

    const adminReportsTable =
        document.getElementById("adminReportsTable");

    if (!adminReportsTable) return;

    const searchInput =
        document.getElementById("adminReportSearch");

    const dateFilter =
        document.getElementById("adminReportDateFilter");

    const searchValue =
        searchInput ? searchInput.value.toLowerCase().trim() : "";

    const selectedDateFilter =
        dateFilter ? dateFilter.value : "";

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    let filteredReports = reports.filter(report => {

        // Search filter
        const patientName =
            (report.patientName || "").toLowerCase();

        const doctorName =
            (report.doctorName || "").toLowerCase();

        const testName =
            (report.testName || "").toLowerCase();

        const matchesSearch =
            patientName.includes(searchValue) ||
            doctorName.includes(searchValue) ||
            testName.includes(searchValue);


        // Date filter
        let matchesDate = true;

        if (selectedDateFilter === "today") {

            const today =
                new Date().toISOString().split("T")[0];

            matchesDate = report.date === today;

        }

        else if (selectedDateFilter === "recent") {

            const today = new Date();

            const reportDate =
                new Date(report.date);

            const difference =
                (today - reportDate) /
                (1000 * 60 * 60 * 24);

            matchesDate =
                difference >= 0 && difference <= 7;
        }


        return matchesSearch && matchesDate;

    });


    // No reports
    if (filteredReports.length === 0) {

        adminReportsTable.innerHTML = `
            <tr>
                <td colspan="7">
                    🔍 No reports found.
                </td>
            </tr>
        `;

        return;
    }


    adminReportsTable.innerHTML = "";


    filteredReports.forEach((report) => {

        // Original index for View button
        const originalIndex =
            reports.findIndex(item => item.id === report.id);


        const row =
            document.createElement("tr");


        row.innerHTML = `
            <td>REP-${report.id}</td>

            <td>${report.patientName || "-"}</td>

            <td>${report.doctorName || "-"}</td>

            <td>${report.testName || "-"}</td>

            <td>${report.date || "-"}</td>

            <td>Completed</td>

            <td>
                <div class="admin-report-actions">

    <button
        class="view-button"
        onclick="viewAdminReport(${originalIndex})">
        👁 View
    </button>

    <button
        class="edit-button"
        onclick="editAdminReport(${originalIndex})">
        ✏️ Edit
    </button>

    <button
        class="delete-button"
        onclick="deleteAdminReport(${originalIndex})">
        🗑️ Delete
    </button>

    <button
    class="pdf-button"
    onclick="downloadAdminReportPDF(${originalIndex})">
    📄 PDF
</button>

</div>
            </td>
        `;


        adminReportsTable.appendChild(row);

    });
}


// Initial load
if (document.getElementById("adminReportsTable")) {

    displayAdminReports();


    // Search
    const adminReportSearch =
        document.getElementById("adminReportSearch");

    if (adminReportSearch) {

        adminReportSearch.addEventListener(
            "input",
            displayAdminReports
        );
    }


    // Date filter
    const adminReportDateFilter =
        document.getElementById("adminReportDateFilter");

    if (adminReportDateFilter) {

        adminReportDateFilter.addEventListener(
            "change",
            displayAdminReports
        );
    }
}

// ================= ADMIN - VIEW REPORT =================

function viewAdminReport(index) {

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    const report = reports[index];

    if (!report) {
        alert("Report not found.");
        return;
    }

    const modalHTML = `
        <div id="adminReportViewOverlay"
             class="admin-report-view-overlay">

            <div class="admin-report-view-box">

                <div class="admin-report-view-header">

                    <div class="admin-report-icon">
                        📄
                    </div>

                    <h2>Medical Report</h2>

                    <p>REP-${report.id}</p>

                </div>

                <div class="admin-report-view-details">

                    <div class="admin-report-detail">
                        <span>👤 Patient</span>
                        <span>${report.patientName || "-"}</span>
                    </div>

                    <div class="admin-report-detail">
                        <span>👨‍⚕️ Doctor</span>
                        <span>${report.doctorName || "-"}</span>
                    </div>

                    <div class="admin-report-detail">
                        <span>📅 Date</span>
                        <span>${report.date || "-"}</span>
                    </div>

                    <div class="admin-report-detail">
                        <span>🧪 Test</span>
                        <span>${report.testName || "-"}</span>
                    </div>

                    <div class="admin-report-detail report-full-width">
                        <span>🔬 Test Result</span>
                        <p>${report.testResult || "-"}</p>
                    </div>

                    <div class="admin-report-detail report-full-width">
                        <span>🩺 Diagnosis</span>
                        <p>${report.diagnosis || "-"}</p>
                    </div>

                    <div class="admin-report-detail report-full-width">
                        <span>💊 Prescription</span>
                        <p>${report.prescription || "-"}</p>
                    </div>

                    <div class="admin-report-detail report-full-width">
                        <span>📝 Notes</span>
                        <p>${report.notes || "-"}</p>
                    </div>

                </div>

                <button
                    class="admin-report-view-close"
                    onclick="closeAdminReportView()">
                    Close
                </button>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "beforeend",
        modalHTML
    );
}


function closeAdminReportView() {

    const modal =
        document.getElementById("adminReportViewOverlay");

    if (modal) {
        modal.remove();
    }
}


// ================= ADMIN - PATIENT LIST =================

function displayAdminPatients(searchValue = "") {

    const table = document.getElementById("adminPatientTable");

    if (!table) return;

    const patient = JSON.parse(localStorage.getItem("patient"));

    // No patient
    if (!patient) {
        table.innerHTML = `
            <tr>
                <td colspan="7">No patients registered.</td>
            </tr>
        `;
        return;
    }

    const search = searchValue.toLowerCase().trim();

    const name = (patient.name || "").toLowerCase();
    const email = (patient.email || "").toLowerCase();
    const phone = (patient.phone || "").toLowerCase();
    const gender = (patient.gender || "").toLowerCase();

    const matches =
        name.includes(search) ||
        email.includes(search) ||
        phone.includes(search) ||
        gender.includes(search);

    // Patient not found
    if (!matches) {
        table.innerHTML = `
            <tr>
                <td colspan="7">🔍 No patient found.</td>
            </tr>
        `;
        return;
    }

    const patientId =
        "PAT-" + (patient.email || "USER").substring(0, 4).toUpperCase();

    table.innerHTML = `
        <tr>

            <td>${patientId}</td>

            <td>${patient.name || "-"}</td>

            <td>${patient.age || "-"}</td>

            <td>${patient.gender || "-"}</td>

            <td>${patient.email || "-"}</td>

            <td>${patient.phone || "-"}</td>

            <td>
                <div class="patient-actions">

                    <button
                        class="view-button"
                        onclick="viewAdminPatient()">
                        👁 View
                    </button>

                    <button
                        class="edit-button"
                        onclick="editAdminPatient()">
                        ✏️ Edit
                    </button>

                    <button
                        class="delete-button"
                        onclick="deleteAdminPatient()">
                        🗑️ Delete
                    </button>

                </div>
            </td>

        </tr>
    `;
}


// Load patients
if (document.getElementById("adminPatientTable")) {

    displayAdminPatients();

    const patientSearch =
        document.getElementById("patientSearch");

    if (patientSearch) {

        patientSearch.addEventListener("input", function () {

            displayAdminPatients(this.value);

        });
    }
}

// ================= ADMIN - EDIT PATIENT =================

function editAdminPatient() {

    const patient = JSON.parse(localStorage.getItem("patient"));

    if (!patient) {
        alert("Patient not found.");
        return;
    }

    const modalHTML = `
        <div id="patientEditOverlay" class="patient-edit-overlay">

            <div class="patient-edit-box">

                <div class="patient-edit-header">
                    <h2>✏️ Edit Patient</h2>

                    <button
                        class="patient-edit-close"
                        onclick="closePatientEditModal()">
                        ×
                    </button>
                </div>

                <div class="patient-edit-form-group">
                    <label>Patient Name</label>
                    <input
                        type="text"
                        id="editPatientName"
                        value="${patient.name || ""}">
                </div>

                <div class="patient-edit-form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        id="editPatientAge"
                        value="${patient.age || ""}">
                </div>

                <div class="patient-edit-form-group">
                    <label>Gender</label>
                    <input
                        type="text"
                        id="editPatientGender"
                        value="${patient.gender || ""}">
                </div>

                <div class="patient-edit-form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        id="editPatientEmail"
                        value="${patient.email || ""}">
                </div>

                <div class="patient-edit-form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        id="editPatientPhone"
                        value="${patient.phone || ""}">
                </div>

                <div class="patient-edit-actions">

                    <button
                        class="patient-edit-cancel"
                        onclick="closePatientEditModal()">
                        Cancel
                    </button>

                    <button
                        class="patient-edit-save"
                        onclick="savePatientChanges()">
                        💾 Save Changes
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
}


function closePatientEditModal() {

    const modal =
        document.getElementById("patientEditOverlay");

    if (modal) {
        modal.remove();
    }
}


function savePatientChanges() {

    const patient =
        JSON.parse(localStorage.getItem("patient"));

    if (!patient) {

        closePatientEditModal();

        alert("Patient not found.");

        return;
    }

    const name =
        document.getElementById("editPatientName").value.trim();

    const age =
        document.getElementById("editPatientAge").value.trim();

    const gender =
        document.getElementById("editPatientGender").value.trim();

    const email =
        document.getElementById("editPatientEmail").value.trim();

    const phone =
        document.getElementById("editPatientPhone").value.trim();


    if (!name || !age || !gender || !email || !phone) {

        alert("Please fill all fields.");

        return;
    }


    patient.name = name;
    patient.age = age;
    patient.gender = gender;
    patient.email = email;
    patient.phone = phone;


    localStorage.setItem(
        "patient",
        JSON.stringify(patient)
    );


    closePatientEditModal();

    alert("Patient details updated successfully!");

    displayAdminPatients();
}


// ================= ADMIN - VIEW PATIENT =================

function viewAdminPatient() {

    const patient =
        JSON.parse(localStorage.getItem("patient"));

    if (!patient) {
        alert("Patient not found.");
        return;
    }

    const modalHTML = `
        <div id="patientViewOverlay"
             class="patient-view-overlay">

            <div class="patient-view-box">

                <div class="patient-view-header">

                    <div class="patient-view-avatar">
                        👤
                    </div>

                    <h2>${patient.name || "-"}</h2>

                    <p>Patient Profile</p>

                </div>

                <div class="patient-view-details">

                    <div class="patient-view-detail">
                        <span>🆔 Patient ID</span>
                        <span>
                            PAT-${(patient.email || "USER")
                                .substring(0, 4)
                                .toUpperCase()}
                        </span>
                    </div>

                    <div class="patient-view-detail">
                        <span>🎂 Age</span>
                        <span>${patient.age || "-"}</span>
                    </div>

                    <div class="patient-view-detail">
                        <span>⚧ Gender</span>
                        <span>${patient.gender || "-"}</span>
                    </div>

                    <div class="patient-view-detail">
                        <span>📧 Email</span>
                        <span>${patient.email || "-"}</span>
                    </div>

                    <div class="patient-view-detail">
                        <span>📱 Phone</span>
                        <span>${patient.phone || "-"}</span>
                    </div>

                </div>

                <button
                    class="patient-view-close"
                    onclick="closePatientViewModal()">
                    Close
                </button>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "beforeend",
        modalHTML
    );
}


function closePatientViewModal() {

    const modal =
        document.getElementById("patientViewOverlay");

    if (modal) {
        modal.remove();
    }
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

    // Create confirmation modal
    const modalHTML = `
        <div id="deleteConfirmOverlay" class="delete-confirm-overlay">

            <div class="delete-confirm-box">

                <div class="delete-confirm-icon">
                    ⚠️
                </div>

                <h2>Delete Report?</h2>

                <p>
                    Are you sure you want to delete this medical report?
                </p>

                <div class="delete-confirm-actions">

                    <button
                        class="cancel-delete-button"
                        onclick="closeDeleteConfirm()">
                        Cancel
                    </button>

                    <button
                        class="confirm-delete-button"
                        onclick="confirmDeleteReport(${index})">
                        Delete
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "beforeend",
        modalHTML
    );
}


// ================= CLOSE DELETE CONFIRMATION =================

function closeDeleteConfirm() {

    const modal =
        document.getElementById(
            "deleteConfirmOverlay"
        );

    if (modal) {
        modal.remove();
    }
}


// ================= CONFIRM DELETE REPORT =================

function confirmDeleteReport(index) {

    const report =
        doctorReportsData[index];

    if (!report) {
        closeDeleteConfirm();
        return;
    }

    let reports =
        JSON.parse(
            localStorage.getItem("medicalReports")
        ) || [];

    reports = reports.filter(
        item => item.id !== report.id
    );

    localStorage.setItem(
        "medicalReports",
        JSON.stringify(reports)
    );

    closeDeleteConfirm();

    alert("Report deleted successfully!");

    const doctor =
        JSON.parse(
            localStorage.getItem("doctor")
        );

    doctorReportsData =
        reports.filter(
            item =>
                doctor &&
                item.doctorName === doctor.name
        );

    displayDoctorReports(
        doctorReportsData
    );
}

// ================= EDIT DOCTOR =================

function editDoctor() {
    const doctor = JSON.parse(localStorage.getItem("doctor"));

    if (!doctor) {
        alert("Doctor not found.");
        return;
    }

    const modalHTML = `
        <div id="doctorEditOverlay" class="doctor-edit-overlay">

            <div class="doctor-edit-box">

                <div class="doctor-edit-header">
                    <h2>✏️ Edit Doctor</h2>

                    <button
                        class="doctor-edit-close"
                        onclick="closeDoctorEditModal()">
                        ×
                    </button>
                </div>

                <div class="doctor-edit-form-group">
                    <label>Doctor Name</label>
                    <input
                        type="text"
                        id="editDoctorName"
                        value="${doctor.name}">
                </div>

                <div class="doctor-edit-form-group">
                    <label>Specialization</label>
                    <input
                        type="text"
                        id="editDoctorSpecialization"
                        value="${doctor.specialization}">
                </div>

                <div class="doctor-edit-form-group">
                    <label>License Number</label>
                    <input
                        type="text"
                        id="editDoctorLicense"
                        value="${doctor.license}">
                </div>

                <div class="doctor-edit-form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        id="editDoctorEmail"
                        value="${doctor.email}">
                </div>

                <div class="doctor-edit-form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        id="editDoctorPhone"
                        value="${doctor.phone}">
                </div>

                <div class="doctor-edit-actions">

                    <button
                        class="doctor-edit-cancel"
                        onclick="closeDoctorEditModal()">
                        Cancel
                    </button>

                    <button
                        class="doctor-edit-save"
                        onclick="saveDoctorChanges()">
                        💾 Save Changes
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
}


// Close Edit Modal
function closeDoctorEditModal() {
    const modal = document.getElementById("doctorEditOverlay");

    if (modal) {
        modal.remove();
    }
}


// Save Doctor Changes
function saveDoctorChanges() {

    const doctor = JSON.parse(localStorage.getItem("doctor"));

    if (!doctor) {
        closeDoctorEditModal();
        alert("Doctor not found.");
        return;
    }

    const name = document.getElementById("editDoctorName").value.trim();
    const specialization = document.getElementById("editDoctorSpecialization").value.trim();
    const license = document.getElementById("editDoctorLicense").value.trim();
    const email = document.getElementById("editDoctorEmail").value.trim();
    const phone = document.getElementById("editDoctorPhone").value.trim();

    if (!name || !specialization || !license || !email || !phone) {
        alert("Please fill all fields.");
        return;
    }

    doctor.name = name;
    doctor.specialization = specialization;
    doctor.license = license;
    doctor.email = email;
    doctor.phone = phone;

    localStorage.setItem("doctor", JSON.stringify(doctor));

    closeDoctorEditModal();

    alert("Doctor details updated successfully!");

    location.reload();
}

// ================= DELETE DOCTOR =================

function deleteDoctor() {
    const doctor = JSON.parse(localStorage.getItem("doctor"));

    if (!doctor) {
        alert("Doctor not found.");
        return;
    }

    const modalHTML = `
        <div id="doctorDeleteOverlay" class="doctor-delete-overlay">
            <div class="doctor-delete-box">

                <div class="doctor-delete-icon">⚠️</div>

                <h2>Delete Doctor?</h2>

                <p>
                    Are you sure you want to delete
                    <strong>${doctor.name}</strong>?
                </p>

                <div class="doctor-delete-actions">

                    <button
                        class="doctor-cancel-delete"
                        onclick="closeDoctorDeleteModal()">
                        Cancel
                    </button>

                    <button
                        class="doctor-confirm-delete"
                        onclick="confirmDoctorDelete()">
                        Delete
                    </button>

                </div>

            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
}


function closeDoctorDeleteModal() {
    const modal = document.getElementById("doctorDeleteOverlay");

    if (modal) {
        modal.remove();
    }
}


function confirmDoctorDelete() {

    const doctor = JSON.parse(localStorage.getItem("doctor"));

    if (!doctor) {
        closeDoctorDeleteModal();
        alert("Doctor not found.");
        return;
    }

    localStorage.removeItem("doctor");

    closeDoctorDeleteModal();

    alert("Doctor deleted successfully!");

    location.reload();
}

// ================= ADMIN - DELETE PATIENT =================

function deleteAdminPatient() {

    const patient = JSON.parse(localStorage.getItem("patient"));

    if (!patient) {
        alert("Patient not found.");
        return;
    }

    const modalHTML = `
        <div id="patientDeleteOverlay" class="patient-delete-overlay">

            <div class="patient-delete-box">

                <div class="patient-delete-icon">
                    ⚠️
                </div>

                <h2>Delete Patient?</h2>

                <p>
                    Are you sure you want to delete
                    <strong>${patient.name}</strong>?
                </p>

                <div class="patient-delete-actions">

                    <button
                        class="patient-cancel-delete"
                        onclick="closePatientDeleteModal()">
                        Cancel
                    </button>

                    <button
                        class="patient-confirm-delete"
                        onclick="confirmPatientDelete()">
                        Delete
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
}


function closePatientDeleteModal() {

    const modal =
        document.getElementById("patientDeleteOverlay");

    if (modal) {
        modal.remove();
    }
}


function confirmPatientDelete() {

    const patient =
        JSON.parse(localStorage.getItem("patient"));

    if (!patient) {

        closePatientDeleteModal();

        alert("Patient not found.");

        return;
    }

    // Delete patient
    localStorage.removeItem("patient");

    closePatientDeleteModal();

    alert("Patient deleted successfully!");

    displayAdminPatients();
}

// ================= ADMIN - EDIT REPORT =================

function editAdminReport(index) {

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    const report = reports[index];

    if (!report) {
        alert("Report not found.");
        return;
    }

    // Save report ID for editing
    localStorage.setItem(
        "editingReportId",
        report.id
    );

    // Open existing report form
    window.location.href = "create-report.html";
}

// ================= ADMIN - DELETE REPORT =================

function deleteAdminReport(index) {

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    const report = reports[index];

    if (!report) {
        alert("Report not found.");
        return;
    }

    const modalHTML = `
        <div id="adminReportDeleteOverlay"
             class="admin-report-delete-overlay">

            <div class="admin-report-delete-box">

                <div class="admin-report-delete-icon">
                    ⚠️
                </div>

                <h2>Delete Report?</h2>

                <p>
                    Are you sure you want to delete
                    <strong>REP-${report.id}</strong>?
                </p>

                <div class="admin-report-delete-actions">

                    <button
                        class="admin-report-cancel-delete"
                        onclick="closeAdminReportDelete()">
                        Cancel
                    </button>

                    <button
                        class="admin-report-confirm-delete"
                        onclick="confirmAdminReportDelete(${index})">
                        Delete
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.insertAdjacentHTML(
        "beforeend",
        modalHTML
    );
}


function closeAdminReportDelete() {

    const modal =
        document.getElementById(
            "adminReportDeleteOverlay"
        );

    if (modal) {
        modal.remove();
    }
}


function confirmAdminReportDelete(index) {

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    if (!reports[index]) {

        closeAdminReportDelete();

        alert("Report not found.");

        return;
    }

    reports.splice(index, 1);

    localStorage.setItem(
        "medicalReports",
        JSON.stringify(reports)
    );

    closeAdminReportDelete();

    alert("Report deleted successfully!");

    displayAdminReports();
}
// ================= ADMIN - DOWNLOAD REPORT PDF =================
// ================= ADMIN - DOWNLOAD ONE PAGE PDF =================

function downloadAdminReportPDF(index) {

    const reports =
        JSON.parse(localStorage.getItem("medicalReports")) || [];

    const report = reports[index];

    if (!report) {
        alert("Report not found.");
        return;
    }

    if (typeof html2canvas === "undefined" ||
        typeof window.jspdf === "undefined") {

        alert("PDF library not loaded. Please refresh the page.");
        return;
    }


    const pdfContent = document.createElement("div");

    pdfContent.style.width = "680px";
    pdfContent.style.background = "#ffffff";
    pdfContent.style.fontFamily = "Arial, sans-serif";
    pdfContent.style.color = "#222";
    pdfContent.style.padding = "30px";
    pdfContent.style.boxSizing = "border-box";


    pdfContent.innerHTML = `

        <!-- HEADER -->

        <div style="
            background:#007bff;
            color:white;
            padding:22px;
            border-radius:12px;
            text-align:center;
            margin-bottom:18px;
        ">

            <div style="
                font-size:26px;
                font-weight:bold;
                margin-bottom:5px;
            ">
                🏥 Patient Report System
            </div>

            <div style="
                font-size:20px;
                font-weight:bold;
            ">
                MEDICAL REPORT
            </div>

            <div style="
                margin-top:6px;
                font-size:13px;
            ">
                Report ID: REP-${report.id}
            </div>

        </div>


        <!-- PATIENT INFORMATION -->

        <div style="
            border:1px solid #ddd;
            border-radius:10px;
            padding:16px;
            margin-bottom:16px;
        ">

            <h3 style="
                margin:0 0 10px 0;
                color:#007bff;
                border-bottom:2px solid #007bff;
                padding-bottom:6px;
                font-size:17px;
            ">
                👤 Patient Information
            </h3>

            <table style="
                width:100%;
                border-collapse:collapse;
                font-size:13px;
            ">

                <tr>
                    <td style="
                        padding:5px;
                        font-weight:bold;
                        width:30%;
                    ">
                        Patient Name
                    </td>

                    <td style="padding:5px;">
                        ${report.patientName || "-"}
                    </td>
                </tr>

                <tr>
                    <td style="
                        padding:5px;
                        font-weight:bold;
                    ">
                        Doctor
                    </td>

                    <td style="padding:5px;">
                        ${report.doctorName || "-"}
                    </td>
                </tr>

                <tr>
                    <td style="
                        padding:5px;
                        font-weight:bold;
                    ">
                        Report Date
                    </td>

                    <td style="padding:5px;">
                        ${report.date || "-"}
                    </td>
                </tr>

            </table>

        </div>


        <!-- TEST INFORMATION -->

        <div style="
            border:1px solid #ddd;
            border-radius:10px;
            padding:16px;
            margin-bottom:16px;
        ">

            <h3 style="
                margin:0 0 10px 0;
                color:#007bff;
                border-bottom:2px solid #007bff;
                padding-bottom:6px;
                font-size:17px;
            ">
                🧪 Test Information
            </h3>


            <div style="
                background:#f5f8ff;
                padding:12px;
                border-radius:7px;
                margin-bottom:10px;
            ">

                <div style="
                    font-size:11px;
                    font-weight:bold;
                    color:#666;
                    margin-bottom:4px;
                ">
                    TEST NAME
                </div>

                <div style="
                    font-size:14px;
                    font-weight:bold;
                ">
                    ${report.testName || "-"}
                </div>

            </div>


            <div style="
                background:#f5f8ff;
                padding:12px;
                border-radius:7px;
            ">

                <div style="
                    font-size:11px;
                    font-weight:bold;
                    color:#666;
                    margin-bottom:4px;
                ">
                    TEST RESULT
                </div>

                <div style="
                    font-size:13px;
                    line-height:1.4;
                    white-space:pre-wrap;
                ">
                    ${report.testResult || "-"}
                </div>

            </div>

        </div>


        <!-- DIAGNOSIS -->

        <div style="
            border-left:4px solid #007bff;
            background:#f5f8ff;
            padding:14px;
            border-radius:7px;
            margin-bottom:16px;
        ">

            <div style="
                font-size:15px;
                font-weight:bold;
                color:#007bff;
                margin-bottom:5px;
            ">
                🩺 Diagnosis
            </div>

            <div style="
                font-size:13px;
                line-height:1.4;
                white-space:pre-wrap;
            ">
                ${report.diagnosis || "-"}
            </div>

        </div>


        <!-- PRESCRIPTION -->

        <div style="
            border-left:4px solid #198754;
            background:#f3faf6;
            padding:14px;
            border-radius:7px;
            margin-bottom:16px;
        ">

            <div style="
                font-size:15px;
                font-weight:bold;
                color:#198754;
                margin-bottom:5px;
            ">
                💊 Prescription / Medicines
            </div>

            <div style="
                font-size:13px;
                line-height:1.4;
                white-space:pre-wrap;
            ">
                ${report.prescription || "-"}
            </div>

        </div>


        <!-- DOCTOR ADVICE -->

        <div style="
            border-left:4px solid #ffc107;
            background:#fffaf0;
            padding:14px;
            border-radius:7px;
            margin-bottom:18px;
        ">

            <div style="
                font-size:15px;
                font-weight:bold;
                color:#856404;
                margin-bottom:5px;
            ">
                📋 Doctor's Advice
            </div>

            <div style="
                font-size:13px;
                line-height:1.4;
                white-space:pre-wrap;
            ">
                ${report.doctorAdvice || "-"}
            </div>

        </div>


        <!-- FOOTER -->

        <div style="
            border-top:1px solid #ddd;
            padding-top:10px;
            text-align:center;
            color:#777;
            font-size:10px;
        ">

            <div style="font-weight:bold;">
                Patient Report System
            </div>

            <div style="margin-top:3px;">
                This is a digitally generated medical report.
            </div>

        </div>

    `;


    /*
        Temporary element ko page ke bahar rakhenge
        taaki html2canvas properly render kar sake.
    */

    pdfContent.style.position = "absolute";
    pdfContent.style.left = "-10000px";
    pdfContent.style.top = "0";

    document.body.appendChild(pdfContent);


    html2canvas(pdfContent, {

        scale: 2,

        useCORS: true,

        backgroundColor: "#ffffff"

    }).then(function(canvas) {


        // ================= CREATE A4 PDF =================

        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({

            unit: "mm",

            format: "a4",

            orientation: "portrait"

        });


        // A4 dimensions

        const pageWidth = 210;
        const pageHeight = 297;

        const margin = 5;

        const availableWidth =
            pageWidth - (margin * 2);

        const availableHeight =
            pageHeight - (margin * 2);


        // Canvas dimensions

        const canvasWidth =
            canvas.width;

        const canvasHeight =
            canvas.height;


        // Calculate scale

        const widthRatio =
            availableWidth / canvasWidth;

        const heightRatio =
            availableHeight / canvasHeight;


        // Use smaller ratio so everything fits

        const ratio =
            Math.min(
                widthRatio,
                heightRatio
            );


        const finalWidth =
            canvasWidth * ratio;

        const finalHeight =
            canvasHeight * ratio;


        // Center horizontally

        const x =
            (pageWidth - finalWidth) / 2;


        // Center vertically

        const y =
            (pageHeight - finalHeight) / 2;


        // Add complete report as ONE image

        pdf.addImage(

            canvas.toDataURL("image/jpeg", 0.98),

            "JPEG",

            x,

            y,

            finalWidth,

            finalHeight

        );


        // Save exactly one-page PDF

        pdf.save(
            `Medical-Report-REP-${report.id}.pdf`
        );


        // Remove temporary element

        pdfContent.remove();

    }).catch(function(error) {

        console.error(error);

        pdfContent.remove();

        alert("Unable to generate PDF.");

    });

}
