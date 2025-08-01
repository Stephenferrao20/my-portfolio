export interface Skill {
  name: string;
  icon: string;
}

export const skillsData: Skill[] = [
  // Frontend Technologies
  {
    name: 'React',
    icon: '/skillIcons/react.png',
  },
  {
    name: 'Next.js',
    icon: '/skillIcons/nextjs2.png',
  },
  {
    name: 'TypeScript',
    icon: '/skillIcons/typescript.svg',
  },
  {
    name: 'JavaScript',
    icon: '/skillIcons/js.svg',
  },
  {
    name: 'Express',
    icon: '/skillIcons/express.png',
  },
  {
    name: 'Tailwind CSS',
    icon: '/skillIcons/tailwindcss.png',
  },
  {
    name: 'Vite',
    icon: '/skillIcons/vitejs.png',
  },

  {
    name: 'Node.js',
    icon: '/skillIcons/nodejs.png',
  },
  {
    name: 'Python',
    icon: '/skillIcons/python.png',
  },
  {
    name: 'FastAPI',
    icon: '/skillIcons/fastapi.png',
  },
  {
    name: 'LangChain',
    icon: '/skillIcons/langchain.png',
  },

  // Database Technologies
  {
    name: 'MongoDB',
    icon: '/skillIcons/mongodb.png',
  },
  {
    name: 'Mongoose',
    icon: '/skillIcons/mongoose.png',
  },
  {
    name: 'PostgreSQL',
    icon: '/skillIcons/postgresql.png',
  },
  {
    name: 'MySQL',
    icon: '/skillIcons/mysql.png',
  },

  // DevOps & Cloud
  {
    name: 'Docker',
    icon: '/skillIcons/docker.png',
  },
  {
    name: 'AWS',
    icon: '/skillIcons/aws.png',
  },
  {
    name: 'Firebase',
    icon: '/skillIcons/firebase.png',
  },

  // Tools & Version Control
  {
    name: 'Git',
    icon: '/skillIcons/git.png',
  },
  {
    name: 'GitHub',
    icon: '/skillIcons/github.png',
  },
  {
    name: 'NPM',
    icon: '/skillIcons/npm2.png',
  },
  {
    name: 'Postman',
    icon: '/skillIcons/postman.png',
  },
  {
    name: 'Linux',
    icon: '/skillIcons/linux.png',
  }
];

// Helper functions to filter skills by category
export const getSkills = () => {
  return skillsData;
};

