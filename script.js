const git_icon_btn = document.getElementById("git_btn");
const linked_icon_btn = document.getElementById("linkedin_btn");
const email_icon_btn = document.getElementById("email_btn");
const twitter_icon_btn = document.getElementById("twitter_btn");

const cont_btn = document.getElementById("cont_btn");


const language_btn = document.getElementById("en-pt");

let select_language = 0;

language_btn.addEventListener("click", () => {
    if(select_language === 0){
        select_language = 1;
    }else{
        select_language = 0;
    }

    changeLanguage(select_language);
})

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



function changeLanguage(language) { 
    if(language === 1){
        document.getElementById("Name_Info").innerHTML = "Engenheiro da Computação";
        document.getElementById("about_title").innerHTML = "Quem sou eu?";
        document.getElementById("about_subtitle").innerHTML = "";
        document.getElementById("about_desc").innerHTML = "Olá! Eu sou Renato Nishikawa, estou monrando em Jacareí no estado de SP. Atualmente, estou cursando Engenharia da Computação na Univap - Universidade do Vale do Paraíba";
        document.getElementById("know_title").innerHTML = "O que eu sei?";
        document.getElementById("know_subtitle").innerHTML = "Conhecimentos de Software";
        document.getElementById("know_desc").innerHTML = "Essas são algumas das linguagens de programação e ferramentas que tenho conhecimentos sobre e ja utilizei.";
        document.getElementById("know_desc2").innerHTML = "Mas atualmente, estou focando em aprender e trabalhar com essas linguagens:";
        document.getElementById("exp_title").innerHTML = "Trabalhos";
        document.getElementById("exp_subtitle").innerHTML = "Meus trabalhos profissionais";
        document.getElementById("rm_title").innerHTML = "Desenvolvedor do boletim escolar online da RM Idiomas";
        document.getElementById("rm_text").innerHTML = "Sou o desenvolvedor do sistema online de boletim escolar da escola de idiomas RM Idiomas. Criado inteiramente por mim, esse sistema foi desenvolvido utilizando NodeJS, com ExpressJS, e um banco de dados MySql. Nele, os professores podem inscrever estudantes com suas informações e níveis, divididos em livros, e atribuir todas as notas no semestre inteiro. Estudantes também podem visualizar suas informações, notas e projetos.";
        document.getElementById("app_title").innerHTML = "Estágiário na startup Appstorm";
        document.getElementById("app_text").innerHTML = "Eu trabalhei como estagiário Full-Stack na startup Appstorm, em São José dos Campos, São Paulo, Brasil. Durante o meu tempo nela, ganhei experiência em desenvolver projetos de larga escala, com divisões e revisões. Utilizei PHP, Javascript e JQuery para programar, juntamente com o banco de dados MySql. Além disso, aprendi a utilizar a ferramenta Postman para teste de API e Git para versionamento de códigos.";
        document.getElementById("proj_subtitle").innerHTML = "Alguns dos projetos que desenvolvi";
        document.getElementById("proj_desc").innerHTML = "Estes são alguns dos meus projetos pessoais dos quais aprendi muito desenvolvendo-os.";
        document.getElementById("av_title").innerHTML = "No momento, estou...";
        document.getElementById("av_option").innerHTML = "Disponível para trabalho!";
        document.getElementById("at_text").innerHTML = "Se você quiser fazer negócios ou me contratar para um trabalho ou projeto, contate-me!";
        document.getElementById("cont_btn").innerHTML = 'Envie o E-mail ! <i class="fa fa-envelope"></i>';
        document.getElementById("or_text").innerHTML = "ou";
        document.getElementById("cont_name").placeholder = "Seu nome";
        document.getElementById("cont_title").placeholder = "Título";
        document.getElementById("cont_text").placeholder = "Escreva aqui sua mensagem";
        document.getElementById("en-pt").style.backgroundImage = "url(photos/brasilflag.png)";
    }else{
        document.getElementById("Name_Info").innerHTML = "Software Engennier";
        document.getElementById("about_title").innerHTML = "Who am I?";
        document.getElementById("about_subtitle").innerHTML = "Learn more about me before looking at my content";
        document.getElementById("about_desc").innerHTML = "Hi! I am Andre Meneses, a young Brazilian who wants to become a great software developer. I live in São Jose dos Campos, in the state of São Paulo, Brazil. I am a computer technician and currently a student in the database course at Fatec Jessen Vidal.";
        document.getElementById("know_title").innerHTML = "What I know?";
        document.getElementById("know_subtitle").innerHTML = "Software Knowledges";
        document.getElementById("know_desc").innerHTML = "These are some of the programming languages and tools that I have knowledge of and have used.";
        document.getElementById("know_desc2").innerHTML = "But currently, I'm focusing on learning and working these languages:";
        document.getElementById("exp_title").innerHTML = "Works";
        document.getElementById("exp_subtitle").innerHTML = "My professional works";
        document.getElementById("rm_title").innerHTML = "Developer of the report card from RM Idiomas";
        document.getElementById("rm_text").innerHTML = "I am the developer of the online report card system for RM Idiomas language school. Created entirely by me, this system was developed using NodeJS, with ExpressJS, and a MySql database. In it, teachers can enroll students with their information and levels, divided by books, and assign all grades for the entire semester. Students can also view their information, grades, and projects.";
        document.getElementById("app_title").innerHTML = "Intern at the startup Appstorm";
        document.getElementById("app_text").innerHTML = "I worked as a full-stack intern at the startup Appstorm in São José dos Campos, São Paulo, Brazil. During my time there, I gained experience in developing large-scale projects with divisions and revisions. I used PHP, Javascript, and JQuery for programming, along with the MySql database. Additionally, I learned how to utilize the Postman tool for API testing and Git for code version control.";
        document.getElementById("proj_title").innerHTML = "Projects";
        document.getElementById("proj_subtitle").innerHTML = "Some of the projects I developed";
        document.getElementById("proj_desc").innerHTML = "These are some of my personal projects that I've learned a lot from.";
        document.getElementById("av_title").innerHTML = "At the moment, I'am...";
        document.getElementById("av_option").innerHTML = "Avalible to work!";
        document.getElementById("at_text").innerHTML = "If you want to do business or hire me for a job or project, please contact me!";
        document.getElementById("cont_btn").innerHTML = 'Send a E-mail ! <i class="fa fa-envelope"></i>';
        document.getElementById("or_text").innerHTML = "or";
        document.getElementById("cont_name").placeholder = "Your Name";
        document.getElementById("cont_title").placeholder = "Title";
        document.getElementById("cont_text").placeholder = "Write here the message";
        document.getElementById("en-pt").style.backgroundImage = "url(photos/usflag.png)";
    }
}