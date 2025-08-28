export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Airbnb Clone Web App",
    des: "A full-featured clone of the Airbnb website built with modern front-end technologies, including property listings, search filters, and responsive design.",
    img: "/airbnb.png",
    iconLists: ["/next.png", "/ts.png", "/redux.png", "/tailwind.png"],
    link: "https://airbnb-clone-app-six.vercel.app/",
    github: "https://github.com/SaedAbbas/airbnb-clone-app",
  },
  {
    id: 2,
    title: "Movie Streaming Web App",
    des: "A modern and responsive movie website built with React.js. Features movie listings, search functionality, categories, and detailed movie pages.",
    img: "/movies.png",
    iconLists: ["/react.png", "/ts.png", "/redux.png", "/tailwind.png"],
    link: "https://movies-app-sable-two.vercel.app/",
    github: "https://github.com/SaedAbbas/Movies_App",
  },
  {
    id: 3,
    title: "Google Live Docs",
    des: "Google Live Docs Clone – A collaborative document editing app built with Next.js 15, featuring a real-time text editor powered by Lexical, role-based access (viewer/editor), and modern UI with Tailwind CSS + shadcn/ui.",
    img: "/live-docs.png",
    iconLists: ["/next.png", "/ts.png", "/redux.png", "/tailwind.png"],
    link: "live-docs-git-main-saed-abbas-projects.vercel.app/",
    github: "https://github.com/SaedAbbas/Google_Docs_Clone",
  },
  {
    id: 4,
    title: "Modern E-commerce Web App",
    des: "A complete e-commerce platform built with Next.js, featuring dynamic product pages, shopping cart, and seamless user experience.",
    img: "/store.png",
    iconLists: ["/next.png", "/ts.png", "/redux.png", "/tailwind.png","/strapi.png"],
    link: "https://e-commerce-nextjs-gules.vercel.app/",
    github: "https://github.com/SaedAbbas/e-commerce-Nextjs",
  },
  {
    id: 5,
    title: "Online Book Store Web App",
    des: "A sleek and responsive book store application built with Next.js. Features book listings, categories, and a shopping cart experience.",
    img: "/bookstore.png",
    iconLists: ["/next.png", "/ts.png", "/tailwind.png"],
    link: "https://book-store-next-js-ly2l.vercel.app/",
    github: "https://github.com/SaedAbbas/BookStore_Next.js",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Saed Abbas was an incredible experience. His professionalism, punctuality, and commitment to delivering outstanding results shone through in every aspect of our project. Saed's passion for development is truly remarkable. If you're looking to enhance your website and elevate your brand, Saed is the perfect partner.",
    name: "Omar Khaled",
    title: "Founder of Gaza Innovate",
    image: "https://randomuser.me/api/portraits/men/0.jpg",
  },
  {
    quote:
      "Collaborating with Saed Abbas was a pleasure from start to finish. His dedication to excellence and timely delivery made our project a success. Saed's enthusiasm for every detail of development sets him apart. I highly recommend him for anyone aiming to boost their online presence.",
    name: "Ibrahim Mahmoud",
    title: "Owner of Gaza Online Store",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    quote:
      "Saed Abbas brought unmatched professionalism to our project. His quick responses and focus on quality made working with him seamless. His passion for development is evident in his work. For anyone seeking to take their website or brand to the next level, Saed is the ideal choice.",
    name: "Ahmed Yassin",
    title: "Director of Future Youth Association",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    quote:
      "Partnering with Saed Abbas was a game-changer for our project. His professionalism and attention to detail ensured exceptional results. Saed's love for development makes him stand out. If you want to transform your website or brand, Saed is the one to trust.",
    name: "Nour Al-Deen",
    title: "Manager of Creativity Hub",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote:
      "Saed Abbas made our project a success with his professionalism and dedication. His ability to deliver high-quality work on time is impressive. His passion for development is contagious. For anyone looking to elevate their digital presence, Saed is the go-to expert.",
    name: "Hassan Ziyad",
    title: "Leader of Gaza Rises Initiative",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/skill-icons--github-light.svg",
    link: "https://github.com/SaedAbbas",
  },
  {
    id: 2,
    img: "/skill-icons--twitter.svg",
    link: "",
  },
  {
    id: 3,
    img: "/skill-icons--linkedin.svg",
    link: "https://www.linkedin.com/in/saed-abbas-3aa31916a/",
  },
  {
    id: 4,
    img: "/logos--facebook.svg",
    link: "https://www.facebook.com/sa15ed",
  },
  {
    id: 5,
    img: "/skill-icons--instagram.svg",
    link: "https://www.instagram.com/saed.m.abbas/",
  },
];

export const skills = [
  { icon: "/html.png", label: "HTML" },
  { icon: "/css.png", label: "Css" },
  { icon: "/js.png", label: "JavaScript" },
  { icon: "/ts.png", label: "TypeScript" },
  { icon: "/react.png", label: "React" },
  { icon: "/next.png", label: "Next.js" },
  { icon: "/tailwind.png", label: "Tailwind CSS" },
  { icon: "/framermotion.png", label: "Framer Motion" },
  { icon: "/redux.png", label: "Redux Toolkit" },
  { icon: "/reactquery.png", label: "Tanstack Query" },
  { icon: "/zustand.png", label: "Zustand" },
  { icon: "/strapi.png", label: "Strapi" },
  { icon: "/git.png", label: "Git" },
  { icon: "/githubb.png", label: "GitHub" },
  { icon: "/figma.png", label: "Figma" },
];
