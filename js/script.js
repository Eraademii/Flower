/* MENU */
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // mbyll tjerat
        document.querySelectorAll(".answer").forEach(a => {
            if (a !== answer) a.style.display = "none";
        });

        // toggle
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

