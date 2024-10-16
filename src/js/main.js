const html = document.querySelector("html");
const serverNav = document.querySelector("#server-nav");
const channelNav = document.querySelector("#channel-nav");
const hamburgerMenu = document.querySelector("#hamburger");

const toggleText = document.querySelector("#toggle-mode>p");
const textScroll = document.querySelector("#text-chat");

textScroll.scrollTo(0, textScroll.scrollHeight);

document.addEventListener("click", e => {
    if (!channelNav.contains(e.target) && !serverNav.contains(e.target) && !hamburgerMenu.contains(e.target))
    {
        serverNav.classList.add("-translate-x-48");
        channelNav.classList.replace("translate-x-16", "-translate-x-32");
    }
});

hamburgerMenu.addEventListener("click", () =>
{
    serverNav.classList.toggle("-translate-x-48")
    
    if (channelNav.classList.contains("-translate-x-32"))
    {
        channelNav.classList.replace("-translate-x-32", "translate-x-16")
    } else
    {
        channelNav.classList.replace("translate-x-16", "-translate-x-32")
    }
});

function toggleAppearance()
{
    html.classList.toggle("dark");
    toggleText.innerHTML = html.classList.contains("dark") ? "Dark Mode" : "Light Mode";
}