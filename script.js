const input = document.getElementById("repoInput");
const button = document.getElementById("analyzeBtn");
const result = document.getElementById("result");

button.addEventListener("click", async function(){
    const repoName = input.value.trim();
    result.textContent = "Loading...";

    const response = await fetch("https://api.github.com/repos/" + repoName);

    if(!response.ok){
        result.textContent = "Repo not found. Use the format owner/name.";
        return;
    }

    const data = await response.json();

    result.textContent = 
        "Name: " + data.full_name + "\n" + 
        "Stars: " + data.stargazers_count + "\n" +
        "Forks: " + data.forks_count + "\n" +
        "Open issues: " + data.open_issues_count + "\n" +
        "Last push: " + data.pushed_at;
});