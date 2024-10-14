const html = document.querySelector("html").classList;
const toggleText = document.querySelector("#toggle-mode>p");
const textScroll = document.querySelector("#text-chat");

textScroll.scrollTo(0, textScroll.scrollHeight);


function toggleAppearance()
{
    html.toggle("dark");
    toggleText.innerHTML = html.contains("dark") ? "Dark Mode" : "Light Mode";
}