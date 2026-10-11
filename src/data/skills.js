// IMPORTANT — Compétences
// Compétences ajustées : retiré Python, MongoDB, PHP et Figma ; ajouté Firebase,
// Firestore, Aiven et Postman. Modifie librement (une ligne par technologie).

import { Cloud, Database } from 'lucide-react'
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVscodium,
} from 'react-icons/si'

export const skillGroups = [
  {
    title: 'Front-End',
    description: "Création d'interfaces modernes, réactives et accessibles.",
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Back-End & Données',
    description: 'Logique applicative, services et gestion des données.',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', icon: SiExpress, color: '#E9EBF0' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Firestore', icon: Database, color: '#FFCA28' },
      { name: 'Aiven', icon: Cloud, color: '#FF3554' },
    ],
  },
  {
    title: 'Outils & Environnement',
    description: 'Boîte à outils du quotidien et déploiement.',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#E9EBF0' },
      { name: 'VS Code', icon: SiVscodium, color: '#3EA6EE' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Vercel', icon: SiVercel, color: '#E9EBF0' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    ],
  },
]
