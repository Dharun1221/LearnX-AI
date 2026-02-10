window.onload = function () {

  const form = document.getElementById("quizForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let score = 0;

    document.querySelectorAll("input[type='radio']:checked")
      .forEach(r => score += Number(r.value));

    localStorage.setItem("score", score);

    window.location.href = "result.html";
  });

};
