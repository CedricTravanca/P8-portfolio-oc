// Enter all your detials in this file
// Logo images
import logogradient from "./assets/LogoCT.png";
import logo from "./assets/LogoCT.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Cedric Travanca",
  tagline: "Je suis developpeur web",
  img: profile,
  about: `<p>Je suis un développeur web junior motivé et déterminé.<br> Ayant toujours été fasciné par le monde numérique et la manière dont les technologies peuvent transformer notre vie quotidienne, j'ai choisi de m'engager dans ce domaine en me spécialisant dans le développement web.<br><br>
  Mon parcours de formation m'a permis d'utiliser différents languages et technologies notamment en HTML, CSS, JavaScript.

Ce qui me motive particulièrement dans cette profession est la possibilité de créer des solutions innovantes qui répondent aux besoins réels des utilisateurs.<br><br>

En tant que développeur web junior, je suis prêt à relever des défis et à apprendre rapidement. Je suis également très ouvert à travailler en équipe et à collaborer étroitement avec les autres membres de l'équipe pour atteindre nos objectifs communs.<br> Ma motivation est alimentée par le désir constant d'améliorer et de contribuer positivement au domaine du développement web.<br><br>

Je suis impatient de mettre mes compétences et ma passion au service de projets stimulants et innovants, où je pourrais apporter ma contribution tout en continuant à grandir professionnellement..</p>`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/cedric-travanca-dev-web/",
  github: "https://github.com/CedricTravanca",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Conseiller en gestion de patrimoine",
    Company: `IFB France`,
    Location: "France",
    Type: "Temps plein",
    Duration: "Decembre 2019 - Aujourd'hui",
  },
  {
    Position: "Responsable d'agence ",
    Company: `Maisons pierre`,
    Location: "Paris 14",
    Type: "Temps plein",
    Duration: "Septembre 2018 - Novembre 2019",
  },
  {
    Position: "Conseiller commercial",
    Company: `Maisons pierre`,
    Location: "Thiais",
    Type: "Temps plein",
    Duration: "Septembre 2015 - Aout 2018",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Developpeur Web",
    Company: "Openclassrooms, Udemy, YouTube, Google",
    Location: "En ligne",
    Type: "Formation",
    Duration: "Avril 2023 - Present",
  },
  {
    Position: "BTS commerce international",
    Company: `Lycée Marcelin Berthelot`,
    Location: "St-Maur des fossés",
    Type: "Temps complet",
    Duration: "Septembre 2010 - Juin 2012",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  sass: sass,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Projet Booki",
    image: projectImage1,
    description: `Création de la page web d'accueil d'une agence de voyage en utilisant HTML & CSS`,
    techstack: "HTML/CSS",
    difficulties: <p>La complexité ici, était de placer certains éléments comme les cards dans d'autres éléments, en gardans les bonnes proportions et parametres tout en restant en responsive car il y a ici beaucoup d'éléments de mise en page.<br/> <br/>
    La solution pour moi à été de faire un découpage de la maquette afin d'identifier toutes les parties et visualiser quel élément devra s'intégré dans l'autre, où lui appliquer sa classe etc...</p>,
    previewLink: "https://cedrictravanca.github.io/Projet-2-Booki/",
    githubLink: "https://github.com/CedricTravanca/Projet-2-Booki",
  },
  {
    title: "Projet Kasa",
    image: projectImage2,
    description: `Création d'une application web de location immobilière a l'aide de React`,
    techstack: "HTML/CSS/Sass, JavaScript, React",
    difficulties: <p>Dans ce projet, la difficulté est de ne pas se répéter dans son code et de créer différentes pages accessibles les unes à partir des autres.<br/> <br/>
    Pour cela, j'ai créé des composants qui vont être appelés par l'applicaiton en fonction du besoin de les afficher ou non et des routes, afin de différencier les différentes parties de mon site web. Ce processus permet trier les elements, rendre son code plus propre et de ne pas repeter un code plusieurs fois dans des pages différentes.</p>,
    previewLink: "https://cedrictravanca.github.io/Projet-6-kasa/",
    githubLink: "https://github.com/CedricTravanca/Projet-6-kasa",
  },
  {
    title: "Projet Nina Carducci",
    image: projectImage3,
    description: `Débuggage et optimisation du site web d'une photographe `,
    techstack: "HTML/CSS, JavaScript, Lighthouse, Wave",
    difficulties: <p>Pour améliorer la note de l'audit de ce site, améliorer le référencement, corriger certains bugs et diminuer le poids des photos, mais ce site étant celui d'une photographe professionnel, je devais par conséquent garder une bonne qualité d'image tout en ayant un bon score lighthouse.<br/> <br/>
    Il a fallu pour cela que j'utilise des formats d'image différents et que je change la qualité d'affichage des images selon la taille de l'écran de lecture. J'ai également utiliser des balises méta afin d'amélioré le référencement.</p>,
    previewLink: "https://cedrictravanca.github.io/Projet-5-nina-carducci-modif/",
    githubLink: "https://github.com/CedricTravanca/Projet-5-nina-carducci-modif",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "cedric.travanca@gmail.com",
  phone: "0686834635",
};
