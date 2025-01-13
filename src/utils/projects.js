export const projects = [
  {
    id: 1,
    title: "Slyder",
    description:
      "Full stack social media website, with features built from scratch such as authentication,messaging ,posts, comments, likes, notes, archives, and expermintal features like having the ability to adjust the UI and the recommendation algorithem .",
    image: "/gifs/slyder-gif.gif",
    links: [
      { github: "https://github.com/haithamexe/Slyder-Backend" },
      { github: "https://github.com/haithamexe/Slyder-Frontend" },
    ],
    demo: "https://slyder-omega.vercel.app/",
    demoInfo: {
      email: "demo@mail.com",
      password: "demo1234",
      note: "demo account will reset on logout and inactivity",
    },

    features: [
      "Self authentication",
      "Real time messaging with Socket.io built from scratch",
      "Posts",
      "Comments",
      "Notifications",
      "Likes",
      "Notes",
      "Archives",
      "UI Customization",
      "Custom Recommendation Algorithem",
      "3D Interactive UI",
    ],

    stack: {
      frontend: [
        "React",
        "Redux",
        "Material-UI",
        "Socket.io",
        "Axios",
        "Vanilla CSS",
        "Javascript",
        "Vercel",
        "Self Auth",
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
    id: 2,
    title: "Generative Art Codes",
    description:
      "A collection of generative art codes made with p5.js, javaScript and html canvas.",
    image: "./images/generative-code.jpg",
    links: [
      { github: "https://github.com/haithamexe/Generative-Art-Collection-1.0" },
    ],
  },
  {
    id: 3,
    title: "Spotify Recommendation Algorithem",
    description:
      "A recommendation algorithem for Spotify data base made with python and scikit-learn using k-means and clustring to find similarties in clusters and then using a decision tree to finish recommending similar songs .",
    image: "https://placeholder.pics/svg/1920x1080",
    link: "https://github.com/haithamexe/Ann-Spotify-rec",
  },
  {
    id: 4,
    title: "Project 6",
    description: "Description 4",
    image: "https://placeholder.pics/svg/1920x1080",
    link: "github.com/ajhsd/asd",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description 4",
    image: "https://placeholder.pics/svg/1920x1080",
    link: "github.com/ajhsd/asd",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description 4",
    image: "https://placeholder.pics/svg/1920x1080",
    link: "github.com/ajhsd/asd",
  },
];
