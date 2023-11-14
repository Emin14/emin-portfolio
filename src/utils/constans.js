import img1 from "../assets/images/projects/project-img1.png";
import img2 from "../assets/images/projects/project-img2.png";
import img3 from "../assets/images/projects/project-img3.png";
import img4 from "../assets/images/projects/project-img4.png";

import html from '../assets/images/icons/html.svg'
import css from '../assets/images/icons/css.svg'
import typescript from '../assets/images/icons/typescript.svg'
import redux from '../assets/images/icons/redux.svg'
import webpack from '../assets/images/icons/webpack.svg'
import github from '../assets/images/icons/github.svg'
import javascript from '../assets/images/icons/javascript.svg'
import react from '../assets/images/icons/react.svg'
import nextJs from '../assets/images/icons/next-js.svg'
import tailwindcss from '../assets/images/icons/tailwindcss.svg'
import figma from '../assets/images/icons/figma.svg'
import es6 from '../assets/images/icons/es6.svg'

export const socialIcons = [
    {title: "Telegram", icon: 'fa-brands fa-telegram', link: 'https://t.me/emin_az14'},
    {title: "GitHub", icon: 'fa-brands fa-github', link: 'https://github.com/Emin14?tab=repositories'},
    {title: "LinkedIn", icon: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/emin-agjaev/'},
    {title: "WhatsApp", icon: 'fa-brands fa-whatsapp', link: 'https://api.whatsapp.com/send?phone=79537375512'},
    {title: "Email", icon: 'fa-solid fa-envelope', link: 'mailto:emin-agjaev@mail.ru'},
]

export const projects = [
    {
      id: 1,
      title: "Armageddon_NextJS",
      description: "An online service for monitoring and destroying dangerous asteroids based on NASA API data.",
      img: img1,
      webLink: "https://armageddon-next-js-five.vercel.app/",
      gitLink: "https://github.com/Emin14/armageddon__NextJS"
    },
    {
      id: 2,
      title: "Funduchok-store",
      description: "Online store created using ReactJS:",
      img: img2,
      webLink: "",
      gitLink: "https://github.com/Emin14/funduchok-store"
    },
    {
      id: 3,
      title: "Jadoo-react",
      description: "Travel website in two languages.",
      img: img3,
      webLink: "https://jadoo-react-six.vercel.app/",
      gitLink: "https://github.com/Emin14/jadoo-react"
    },
    {
      id: 4,
      title: "Hangman",
      description: "Word Guessing Game",
      img: img4,
      webLink: "https://glistening-hummingbird-3dbd8c.netlify.app",
      gitLink: "https://github.com/Emin14/Hangman"
    }
];

export  const skills = [
    {id: 1, name: 'Html', img: html},
    {id: 2, name: 'Css', img: css},
    {id: 3, name: 'Javascript', img: javascript},
    {id: 4, name: 'Es6', img: es6},
    {id: 5, name: 'React', img: react},
    {id: 6, name: 'Redux', img: redux},
    {id: 7, name: 'Typescript', img: typescript},
    {id: 8, name: 'NextJs', img: nextJs},
    {id: 9, name: 'Tailwindcss', img: tailwindcss},
    {id: 10, name: 'Webpack', img: webpack},
    {id: 11, name: 'Figma', img: figma},
    {id: 12, name: 'Github', img: github}
]

export const menuLink = [
    {title: 'О себе', link: '#about'},
    {title: 'Стек', link: '#skills'},
    {title: 'Проекты', link: '#projects'}
  ]