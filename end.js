const finalScore = document.getElementById("finalScore");
const score = localStorage.getItem("recentScore");
finalScore.innerText = score;