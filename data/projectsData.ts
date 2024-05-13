interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Rickly URL Shortener',
    description: `A simple little URL shortener web app that I made that uses a Flask backend with Postgres DB. 
    Also uses Tailwind CSS. Might revisit it one day but instead use a proper framework.`,
    imgSrc: '/static/images/rickly.png',
    href: 'https://github.com/Rikidink/URL-Shortener',
  },
]

export default projectsData
