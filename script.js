const git_icon_btn = document.getElementById("git_btn");
const linked_icon_btn = document.getElementById("linkedin_btn");
const email_icon_btn = document.getElementById("email_btn");
const twitter_icon_btn = document.getElementById("twitter_btn");

const cont_btn = document.getElementById("cont_btn");


const language_btn = document.getElementById("en-pt");

let select_language = 0;



git_icon_btn.addEventListener("click", () => {
    window.open("https://github.com/AndreMeneses0103");
})
linked_icon_btn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/andre-meneses-dev/");
})
email_icon_btn.addEventListener("click", () => {
    window.open("mailto:andremeneses0103@gmail.com");
})
twitter_icon_btn.addEventListener("click", () => {
    window.open("https://twitter.com/andref_meneses");
})

