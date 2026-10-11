// Pour chaque projet :
// - `stack` : liste des technologies réellement utilisées (laissée vide par défaut
//   pour ne rien inventer). Ajoute tes technologies, ex. ['React', 'Tailwind CSS'].
// - `image` : capture d'écran (place le fichier dans /public/projects/ et indique
//   le chemin, ex. '/projects/uniflow.png'). Si vide, une couverture générée s'affiche.

export const projects = [
  {
    id: 'uniflow',
    name: 'UniFlow',
    category: 'Plateforme web',
    tagline: 'Gestion universitaire',
    description:
      "Plateforme numérique de gestion des activités universitaires, pensée pour centraliser et simplifier le quotidien des étudiants et de l'administration.",
    highlights: [
      "Centralisation des activités universitaires",
      'Interface claire et organisée',
      'Outil de gestion au service des étudiants',
    ],
    stack: [],
    image: null,
    demo: 'https://by-anzaf-uniflow.netlify.app/',
    gradient: 'from-emerald-500/25 via-teal-500/5 to-transparent',
  },
  {
    id: 'salle-de-sport',
    name: "Gestion d'une salle de sport",
    category: 'Application web',
    tagline: 'Gestion & suivi',
    description:
      "Application web dédiée à la gestion d'une salle de sport : suivi des abonnés, organisation des activités et pilotage du fonctionnement au quotidien.",
    highlights: [
      'Gestion des membres et abonnements',
      'Organisation des activités de la salle',
      'Suivi simple et efficace au quotidien',
    ],
    stack: [],
    image: null,
    demo: 'https://gestion-d-une-salle-de-sport.vercel.app/',
    gradient: 'from-cyan-500/25 via-sky-500/5 to-transparent',
  },
  {
    id: 'choukrapp',
    name: 'ChoukrApp Académie',
    category: "Plateforme d'apprentissage",
    tagline: 'Cours en ligne',
    description:
      "Plateforme d'apprentissage en ligne permettant de consulter des cours et d'accéder à des fonctionnalités pédagogiques dans un environnement numérique.",
    highlights: [
      'Consultation de cours en ligne',
      'Fonctionnalités pédagogiques intégrées',
      "Expérience d'apprentissage numérique",
    ],
    stack: [],
    image: null,
    demo: 'https://platform-de-cours-en-ligne.onrender.com',
    gradient: 'from-violet-500/25 via-indigo-500/5 to-transparent',
  },
]
