// IMPORTANT — Articles de blog
// Les articles ci-dessous sont des EXEMPLES de démonstration à remplacer
// par tes vrais articles. Chaque post est affiché en carte dans la section
// Blog et s'ouvre dans une fenêtre de lecture. Modifie les textes librement.

export const posts = [
  {
    id: 'choix-react',
    title: "Pourquoi j'ai choisi React pour construire mes projets web",
    excerpt:
      "Composants réutilisables, écosystème riche et communauté active : retour sur les raisons qui m'ont poussé vers React.",
    category: 'React',
    tags: ['React', 'Front-end'],
    date: 'Octobre 2026',
    readTime: 4,
    content: [
      "Dès mes premiers projets universitaires, j'ai cherché une méthode pour construire des interfaces maintenables sans me répéter sans cesse. React a rapidement répondu à ce besoin grâce à son approche par composants : chaque brique d'interface est isolée, réutilisable et facile à faire évoluer.",
      "Ce qui m'a surtout convaincu, c'est l'écosystème : Vite pour un démarrage rapide, Tailwind CSS pour le style, et une communauté immense qui facilite l'apprentissage. Lorsqu'on est bloqué, la réponse existe déjà quelque part.",
      "Bien sûr, React ne remplace pas les fondamentaux. Une bonne compréhension de JavaScript, du DOM et des bases du web reste indispensable. React vient organiser le travail, il ne le fait pas à notre place.",
    ],
  },
  {
    id: 'composants-reutilisables',
    title: 'Organiser son code avec des composants réutilisables',
    excerpt:
      "Éviter la duplication, clarifier la structure et gagner du temps : mes principes pour découper une interface en composants.",
    category: 'Pratique',
    tags: ['Architecture', 'React', 'Bonnes pratiques'],
    date: 'Septembre 2026',
    readTime: 5,
    content: [
      "Quand une interface grandit, copier-coller devient un piège : chaque correction doit être répétée partout à la main. Découper l'interface en petits composants réutilisables permet de ne maintenir la logique qu'à un seul endroit.",
      "Je commence par identifier les éléments répétés : boutons, cartes, en-têtes de section. Je les transforme ensuite en composants avec des propriétés pour personnaliser leur contenu, tout en gardant leur structure et leur style cohérents.",
      "Le résultat : un code plus lisible, des modifications plus rapides et une interface visuellement homogène. La règle simple que j'applique : si je vois le même bloc trois fois, il devient un composant.",
    ],
  },
  {
    id: 'apprendre-en-construisant',
    title: 'Apprendre en construisant : mon expérience de développeur étudiant',
    excerpt:
      "Des projets concrets comme moyen d'apprentissage : ce que la pratique m'a appris de mieux que n'importe quel cours.",
    category: "Retour d'expérience",
    tags: ['Carrière', 'Apprentissage'],
    date: 'Août 2026',
    readTime: 6,
    content: [
      "Pendant mes études, j'ai compris qu'un projet concret vaut mieux que dix exercices isolés. En construisant des applications complètes — de la base de données jusqu'à l'interface — on est confronté à de vrais problèmes : comment structurer le code, gérer les erreurs, ou penser l'expérience utilisateur.",
      "Mes projets ont aussi été l'occasion d'apprendre le déploiement : Netlify, Vercel, Render. Déployer un projet, c'est le rendre réel, lui donner une vie propre et en tirer une vraie fierté.",
      "Mon conseil pour les étudiants : construisez, même imparfaitement. Chaque projet est un chapitre d'apprentissage qui se transforme, ensuite, en portfolio.",
    ],
  },
]