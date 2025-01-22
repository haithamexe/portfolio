export const projects = [
  {
    id: 1,
    title: "Slyder",
    description:
      "Full stack MERN, Redux social media website targeting tech power users, with features built from scratch such as authentication,messaging ,posts, comments, likes, notes, archives, and expermintal features like having the ability to adjust the UI and the recommendation algorithm .",
    video: "/videos/slyder-video-optimize.mp4",
    links: [
      {
        type: "Frontend",
        url: "https://github.com/haithamexe/Slyder-Frontend",
      },
      {
        type: "Backend",
        url: "https://github.com/haithamexe/Slyder-Backend",
      },
    ],
    demo: "https://slyder-omega.vercel.app/",
    demoInfo:
      "Email: demo@mail.com, Password: demo1234, *demo account resets on logout and inactivity*",

    features: [
      "Self Authentication",
      "Real time encrypted messaging with Socket.io built from scratch",
      "Posts",
      "Comments",
      "Notifications",
      "Likes",
      "Notes",
      "Archives",
      "UI customization",
      "Custom recommendation algorithm",
      "3D interactive UI",
      "Scalable",
      "Refresh tokens",
      "Session management",
      "optimistic updates",
    ],

    stack: {
      frontend: [
        "React",
        "Redux",
        "Redux-RTK",
        "Material-UI",
        "Socket.io",
        "Axios",
        "Vanilla CSS",
        "Javascript",
        "Crypto-js",
        "Self Auth",
        "Vercel",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Redis",
        "RESTAPI",
        "Javascript",
        "Render",
      ],
    },
  },
  {
    id: 6,
    title: "React Native E-commerce",
    description: "A mobile e-commerce app built with React Native.",
    video: "/videos/rna-ecommerce.mp4",
    links: [
      {
        type: "Github",
        url: "https://github.com/haithamexe/React-Native-E-commerce",
      },
    ],
    features: ["React Navigation", "Cross Platform", "Scalable"],
    stack: {
      frontend: ["React Native", "Expo", "React Navigation, TypeScript"],
    },
  },
  {
    id: 2,
    title: "Generative Art Codes",
    description:
      "A collection of generative art codes made with p5.js, javaScript and html canvas.",
    image: "/images/generative-code.webp",
    links: [
      {
        type: "Github",
        url: "https://github.com/haithamexe/Generative-Art-Collection-1.0",
      },
    ],
    features: [
      "Generative Art",
      "p5.js",
      "HTML Canvas",
      "Javascript",
      "Creative coding",
      "Customizable with sliders",
    ],
    stack: {
      frontend: ["p5.js", "HTML Canvas", "Javascript", "Canvas-sketch"],
    },
  },
  {
    id: 3,
    title: "Spotify Recommendation Algorithm",
    description:
      "A Recommendation Algorithm for Spotify data base made with python and scikit-learn using K-means and Clustering to find similarities in clusters and then using a decision tree to finish recommending similar songs .",
    image: "/images/spotify-recommendation.webp",
    links: [
      {
        type: "Github",
        url: "https://github.com/haithamexe/Ann-Spotify-rec",
      },
    ],

    features: [
      "Recommendation Algorithm",
      "Python",
      "Scikit-learn",
      "K-means",
      "Clustering",
      "Decision Tree",
      "Spotify API",
    ],

    stack: {
      backend: ["Python", "Scikit-learn", "numpy", "pandas"],
    },
  },
  {
    id: 4,
    title: "Graphic Designs",
    description:
      "A collection of graphic designs made with Adobe Photoshop for different clients.",
    image: "/images/graphic-designs.webp",
  },
  {
    id: 5,
    title: "Illustrations",
    description:
      "a collection of digital art illustrations made with Clip Studio Paint and Photoshop.",
    image: "/images/illustrations.webp",
    links: [
      {
        type: "Art Archive",
        url: "https://sites.google.com/view/haithamexist/home",
      },
    ],
  },
];
