document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const backToTop = document.getElementById("back-to-top");

    // Theme Toggle
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });

    // Load theme preference
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        themeToggle.textContent = "☀️";
    }

    // Back to Top Button
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
