/* =========================
   THEME
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});


/* =========================
   SAVE THEME
========================= */

window.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

});


/* =========================
   LOGIN MODAL
========================= */

const loginModal = document.getElementById("loginModal");

function openModal() {
    loginModal.style.display = "flex";
}

function closeModal() {
    loginModal.style.display = "none";
}


/* =========================
   LOGIN
========================= */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("loginName").value;
    const email = document.getElementById("loginEmail").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    closeModal();

    showNotification(
        "Қош келдің, " + name + "! 👋"
    );

    loginForm.reset();

});


/* =========================
   COURSE
========================= */

function startCourse(courseName) {

    localStorage.setItem("selectedCourse", courseName);

    showNotification(
        "«" + courseName + "» курсы таңдалды! 🚀"
    );

}


/* =========================
   SEARCH
========================= */

const searchInput = document.getElementById("searchInput");
const courses = document.querySelectorAll(".course-card");
const noCourses = document.getElementById("noCourses");

searchInput.addEventListener("input", function () {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    let found = 0;

    courses.forEach(function (course) {

        const text =
            course.textContent.toLowerCase();

        if (text.includes(searchValue)) {

            course.style.display = "block";
            found++;

        } else {

            course.style.display = "none";

        }

    });

    if (found === 0) {
        noCourses.style.display = "block";
    } else {
        noCourses.style.display = "none";
    }

});


/* =========================
   TEST
========================= */

const testModal = document.getElementById("testModal");

function openTest() {

    testModal.style.display = "flex";

}

function closeTest() {

    testModal.style.display = "none";

}


function checkTest() {

    let score = 0;

    const answers = [
        document.querySelector(
            'input[name="q1"]:checked'
        ),

        document.querySelector(
            'input[name="q2"]:checked'
        ),

        document.querySelector(
            'input[name="q3"]:checked'
        )
    ];


    answers.forEach(function (answer) {

        if (answer && answer.value === "correct") {
            score++;
        }

    });


    const result =
        document.getElementById("result");


    if (score === 3) {

        result.textContent =
            "🎉 Керемет! 3/3 дұрыс жауап!";

        result.style.background = "#e5f8eb";
        result.style.color = "#218943";

    } else if (score === 2) {

        result.textContent =
            "👍 Жақсы нәтиже! 2/3 дұрыс жауап.";

        result.style.background = "#fff5df";
        result.style.color = "#a96d00";

    } else {

        result.textContent =
            "📚 Тағы да қайталап көр. " +
            score + "/3 дұрыс жауап.";

        result.style.background = "#ffe9e9";
        result.style.color = "#c0392b";

    }

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    showNotification(
        "Рақмет, " + name +
        "! Хабарламаңыз жіберілді. ✅"
    );

    contactForm.reset();

});


/* =========================
   NOTIFICATION
========================= */

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    notification.textContent = message;

    notification.classList.add("show");


    setTimeout(function () {

        notification.classList.remove("show");

    }, 3000);

}


/* =========================
   CLOSE MODAL BY CLICKING OUTSIDE
========================= */

window.addEventListener("click", function (event) {

    if (event.target === loginModal) {
        closeModal();
    }

    if (event.target === testModal) {
        closeTest();
    }

});


/* =========================
   WELCOME MESSAGE
========================= */

window.addEventListener("load", function () {

    const savedName =
        localStorage.getItem("userName");

    if (savedName) {

        console.log(
            "Қош келдің қайтадан, " +
            savedName + "!"
        );

    }

});