let containerOmMig = document.getElementsByClassName("container-omMig-hidden");
let containerCV = document.getElementsByClassName("container-CV-hidden");
const omMigBtn = document.getElementById("omMigBtn");
const erfarenhetBtn = document.getElementById("ErfarenheterBtn");

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