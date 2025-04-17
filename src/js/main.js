const html = document.querySelector("html");

const serverNav = document.querySelector("#server-nav");
const channelNav = document.querySelector("#channel-nav");
const hamburgerMenu = document.querySelector("#hamburger");

const memberTab = document.querySelector("#member-list");
const memberMenu = document.querySelector("#member-menu");

const toggleText = document.querySelector("#toggle-mode>p");
const textScroll = document.querySelector("#text-chat");

textScroll.scrollTo(0, textScroll.scrollHeight);

document.addEventListener("click", e => {
    if (!channelNav.contains(e.target) && !serverNav.contains(e.target) && 
        !hamburgerMenu.contains(e.target) && !memberMenu.contains(e.target) 
        && !memberTab.contains(e.target))
    {
        serverNav.classList.add("-translate-x-48");
        channelNav.classList.replace("translate-x-24", "-translate-x-60");

        memberTab.classList.add("translate-x-full");
    }
});

hamburgerMenu.addEventListener("click", () =>
{
    memberTab.classList.add("translate-x-full");

    serverNav.classList.toggle("-translate-x-48");
    
    if (channelNav.classList.contains("-translate-x-60"))
    {
        channelNav.classList.replace("-translate-x-60", "translate-x-24")
    } else
    {
        channelNav.classList.replace("translate-x-24", "-translate-x-60")
    }
});

memberMenu.addEventListener("click", () =>
{
    serverNav.classList.add("-translate-x-48");
    channelNav.classList.replace("translate-x-24", "-translate-x-60");

    memberTab.classList.toggle("translate-x-full");
})

function toggleAppearance()
{
    console.log("toggleAppearance() called");
    html.classList.toggle("dark");
    toggleText.innerHTML = html.classList.contains("dark") ? "Dark Mode" : "Light Mode";
}