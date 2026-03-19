document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll(".word-item");
    const container = document.querySelector(".wheel-container");

    const observerOptions = {
        root: container,
        rootMargin: "-45% 0px -45% 0px", 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, observerOptions);

    words.forEach(word => observer.observe(word));

    words.forEach(word => {
        word.addEventListener("click", (e) => {
            if (!word.classList.contains("active")) {
                e.preventDefault();
                word.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
});