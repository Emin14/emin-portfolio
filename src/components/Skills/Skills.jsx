import React from "react";
import Icon from "../Icon/Icon"
import html from '../../assets/images/icons/html.svg'
import css from '../../assets/images/icons/css.svg'
import typescript from '../../assets/images/icons/typescript.svg'
import redux from '../../assets/images/icons/redux.svg'
import webpack from '../../assets/images/icons/webpack.svg'
import github from '../../assets/images/icons/github.svg'
import javascript from '../../assets/images/icons/javascript.svg'
import react from '../../assets/images/icons/react.svg'
import nextJs from '../../assets/images/icons/next-js.svg'
import tailwindcss from '../../assets/images/icons/tailwindcss.svg'
import figma from '../../assets/images/icons/figma.svg'
import es6 from '../../assets/images/icons/es6.svg'
import styles from './Skills.module.css'

const skillsImg = [
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

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Мой стек</h1>
        <p className={styles.description}>Технологии которыми я владею</p>
        <div className={styles.icons}>
          {skillsImg.map(item => (
              <Icon key={item.id} src={item.img} alt={item.name} message='' />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
