import weGusta from "../assets/wegusta.png";
import pocketTutor from "../assets/pockettutor.png";
import mdNotes from "../assets/mdnotes.png";
import tapiocaEMDR from "../assets/tapiocaemdr.png";
const Projects = [
  {
    title: "Tapioca EMDR",
    description:
      "Tapioca EMDR is a web application that allows therapists to create and manage EMDR telehealth sessions.  It automates EMDR visualizations and allows therapists to focus on their clients.",
    image: tapiocaEMDR,
    link: "https://tapiocaemdr.com",
  },
  {
    title: "MdNotes",
    description:
      "MdNotes is a desktop markdown note-taking app that allows you to create, edit, and delete notes. It is built using React and TypeScript, and it uses local storage to save your notes.  All notes are sorted as if you were using a binder (i.e. Notebook > Folder > Page).  This project was built using React, TypeScript, and Electron.",
    image: mdNotes,
    link: "https://github.com/garrettmroberts/markdown-editor",
  },
  {
    title: "WeGusta",
    description:
      "Are you ever indecisive about what you want to eat? WeGusta makes the choice easier by letting you choose cuisine types using a Tinder-like interface. Based on your input, it will recommend a highly rated local restaurant that fits your criteria!  This app is built using React Native and the Google Maps API.  The animations were challenging to build and it was a fun project to work on.",
    image: weGusta,
    link: "https://github.com/garrettmroberts/wegusta-app",
  },
  {
    title: "PocketTutor",
    description:
      "Learning on the go! PocketTutor will create a series of audio lessons for you based on any subject you choose.  This project was built using NextJS and OpenAI.",
    image: pocketTutor,
    link: "https://github.com/garrettmroberts/one-app-a-week/tree/main/pocket-tutor",
  },
];

export default Projects;
