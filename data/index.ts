export const siteConfig = {
  name: "Saed Abbas",
  role: "Front-End Developer",
  email: "saedabbas0@gmail.com",
  location: "Gaza, Palestine",
  github: "https://github.com/SaedAbbas",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Airbnb Clone",
    des: "A full-featured Airbnb clone with property listings, search filters, and a fully responsive booking experience.",
    img: "/airbnb.webp",
    tech: ["Next.js", "TypeScript", "Redux", "Tailwind"],
    link: "https://airbnb-clone-app-six.vercel.app/",
    github: "https://github.com/SaedAbbas/airbnb-clone-app",
  },
  {
    id: 2,
    title: "Google Live Docs",
    des: "A collaborative document editor with a real-time Lexical editor, role-based access (viewer / editor), and a modern shadcn/ui interface.",
    img: "/live-docs.webp",
    tech: ["Next.js 15", "TypeScript", "Lexical", "Tailwind"],
    link: "https://live-docs-smoky-eight.vercel.app/",
    github: "https://github.com/SaedAbbas/Google_Docs_Clone",
  },
  {
    id: 3,
    title: "Modern E-commerce",
    des: "A complete e-commerce platform with dynamic product pages, a shopping cart, and a headless Strapi CMS backend.",
    img: "/store.webp",
    tech: ["Next.js", "TypeScript", "Redux", "Strapi"],
    link: "https://e-commerce-nextjs-gules.vercel.app/",
    github: "https://github.com/SaedAbbas/e-commerce-Nextjs",
  },
  {
    id: 4,
    title: "Movie Streaming App",
    des: "A responsive movie platform with listings, search, categories, and detailed movie pages.",
    img: "/movies.webp",
    tech: ["React", "TypeScript", "Redux", "Tailwind"],
    link: "https://movies-app-sable-two.vercel.app/",
    github: "https://github.com/SaedAbbas/Movies_App",
  },
  {
    id: 5,
    title: "Online Book Store",
    des: "A sleek, responsive book store with categories, book listings, and a smooth shopping-cart flow.",
    img: "/bookstore.webp",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://book-store-next-js-ly2l.vercel.app/",
    github: "https://github.com/SaedAbbas/BookStore_Next.js",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Saed was an incredible experience. His professionalism, punctuality, and commitment to outstanding results shone through in every aspect of our project.",
    name: "Omar Khaled",
    title: "Founder of Gaza Innovate",
  },
  {
    quote:
      "Collaborating with Saed was a pleasure from start to finish. His dedication to excellence and timely delivery made our project a success.",
    name: "Ibrahim Mahmoud",
    title: "Owner of Gaza Online Store",
  },
  {
    quote:
      "Saed brought unmatched professionalism to our project. His quick responses and focus on quality made working with him seamless.",
    name: "Ahmed Yassin",
    title: "Director of Future Youth Association",
  },
  {
    quote:
      "Partnering with Saed was a game-changer. His attention to detail ensured exceptional results — he's the one to trust with your website.",
    name: "Nour Al-Deen",
    title: "Manager of Creativity Hub",
  },
  {
    quote:
      "Saed delivers high-quality work on time, every time. For anyone looking to elevate their digital presence, he's the go-to developer.",
    name: "Hassan Ziyad",
    title: "Leader of Gaza Rises Initiative",
  },
];

export const socialMedia = [
  { id: "github", label: "GitHub", link: "https://github.com/SaedAbbas" },
  { id: "linkedin", label: "LinkedIn", link: "https://www.linkedin.com/in/saed-abbas-3aa31916a/" },
  { id: "facebook", label: "Facebook", link: "https://www.facebook.com/sa15ed" },
  { id: "instagram", label: "Instagram", link: "https://www.instagram.com/saed.m.abbas/" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { icon: "/html.webp", label: "HTML5" },
      { icon: "/css.webp", label: "CSS3" },
      { icon: "/js.webp", label: "JavaScript" },
      { icon: "/ts.webp", label: "TypeScript" },
    ],
  },
  {
    title: "Frameworks & UI",
    items: [
      { icon: "/react.webp", label: "React" },
      { icon: "/next.webp", label: "Next.js" },
      { icon: "/tailwind.webp", label: "Tailwind CSS" },
      { icon: "/framermotion.webp", label: "Framer Motion" },
    ],
  },
  {
    title: "State & Data",
    items: [
      { icon: "/redux.webp", label: "Redux Toolkit" },
      { icon: "/reactquery.webp", label: "TanStack Query" },
      { icon: "/zustand.webp", label: "Zustand" },
      { icon: "/strapi.webp", label: "Strapi" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: "/git.webp", label: "Git" },
      { icon: "/githubb.webp", label: "GitHub" },
      { icon: "/figma.webp", label: "Figma" },
    ],
  },
];
