window.onload = function () {
  const form = document.getElementById("quizForm");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let score = 0;
    const questions = ["q1", "q2", "q3", "q4", "q5"];

    for (let q of questions) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected) {
        score += Number(selected.value);
      }
    }

    localStorage.setItem("score", score);
    window.location.href = "result.html";
  });
};