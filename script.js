let containerOmMig = document.getElementsByClassName("container-omMig-hidden");
let containerCV = document.getElementsByClassName("container-CV-hidden");
let containerAPIHidden = document.getElementsByClassName("container-API-hidden");
const omMigBtn = document.getElementById("omMigBtn");
const erfarenhetBtn = document.getElementById("ErfarenheterBtn");
const projektBtn = document.getElementById("projektBtn")


omMigBtn.addEventListener("click", function()
{
    for (let i = 0; i < containerCV.length; i++)
    {
        const element = containerCV[i];
        if (!element.classList.contains("container-CV"))
        {
            element.classList.add("container-CV-hidden");
        }
    }

    for (let i = 0;i<containerOmMig.length;i++)
    {
        const element = containerOmMig[i];
        element.classList.toggle("container-omMig");
    }
});

erfarenhetBtn.addEventListener("click", function()
{
    for (let i = 0; i < containerOmMig.length;i++)
    {
        const element = containerOmMig[i];
        if (!element.classList.contains("container-omMig"))
        {
            element.classList.add("container-omMig-hidden");
        }
    }

    for (let i = 0; i < containerCV.length;i++)
    {
        const element = containerCV[i];
        element.classList.toggle("container-CV");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let containerAPI = document.getElementById("containerAPI");

    projektBtn.addEventListener("click", function() {

        containerAPI.innerHTML = "";

        fetch("https://api.github.com/users/controlfox/repos")
        .then(res => res.json())
        .then(data => {
            data.forEach(repo => {
                let repoDiv = document.createElement("div");
                repoDiv.classList.add("repo-item");
                repoDiv.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description ? repo.description : "Ingen beskrivning tillgänglig"}</p>
                    <a href="${repo.html_url}" target="_blank">Besök repo</a>
                `;
                containerAPI.appendChild(repoDiv);
            });
        })
        .catch(error => {
            console.error("Ett fel inträffade:", error);
        });

        for (let i = 0; i < containerAPI.length;i++)
            {
                const element = containerAPI[i];
                if (!element.classList.contains("containerAPI"))
                {
                    element.classList.add("container-API-hidden");
                }
            }
        
            for (let i = 0; i < containerAPI.length;i++)
            {
                const element = containerAPI[i];
                element.classList.toggle("containerAPI");
            }
    });
});

fetch("färdigheter.json")
.then(res => res.json())
.then(data => {

    data.sort((a,b) => (a.År < b.År)? 1: -1);

    data.map (färdigheter => {
        let färdigheterUl = document.getElementById("färdigheter");
        let färdigheterLi = document.createElement("li");
        färdigheterLi.innerText = färdigheter.Utbildning;
        färdigheterUl.appendChild(färdigheterLi);

        let årUL = document.createElement("ul");
        färdigheterLi.appendChild(årUL);
        let årLi = document.createElement("li");
        årLi.innerText = färdigheter.År;
        årUL.appendChild(årLi);
    })
})
