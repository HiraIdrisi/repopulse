const input = document.getElementById("repoInput");
const button = document.getElementById("analyzeBtn");
const result = document.getElementById("result");

button.addEventListener("click", function(){
    const repoName = input.value;
    result.textContent = "You typed:" + repoName;
});