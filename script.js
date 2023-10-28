const git_icon_btn = document.getElementById("git_btn");
const linked_icon_btn = document.getElementById("linkedin_btn");
const email_icon_btn = document.getElementById("email_btn");
const twitter_icon_btn = document.getElementById("twitter_btn");

const cont_btn = document.getElementById("cont_btn");


const language_btn = document.getElementById("en-pt");

let select_language = 0;



git_icon_btn.addEventListener("click", () => {
    window.open("https://github.com/Renato15767");
})
linked_icon_btn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/renato-nishikawa-003406217/");
})
email_icon_btn.addEventListener("click", () => {
    window.open("mailto:renato.nishikawa46@gmail.com");
})
twitter_icon_btn.addEventListener("click", () => {
    window.open("#");
})

