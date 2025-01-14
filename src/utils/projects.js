export const projects = [
  {
    id: 1,
    title: "Slyder",
    description:
      "Full stack MERN social media website targeting web browser power users, with features built from scratch such as authentication,messaging ,posts, comments, likes, notes, archives, and expermintal features like having the ability to adjust the UI and the recommendation algorithem .",
    image: "/gifs/slyder-gif.gif",
    links: [
      {
        type: "Frontend Github",
        url: "https://github.com/haithamexe/Slyder-Frontend",
      },
      {
        type: "Backend Github",
        url: "https://github.com/haithamexe/Slyder-Backend",
      },
    ],
    demo: "https://slyder-omega.vercel.app/",
    demoInfo:
      "Email: demo@mail.com, Password: demo1234, *demo account resets on logout and inactivity*",

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
    image: "/images/generative-code.jpg",
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
      "Creative Coding",
      "Customizable with sliders",
    ],
    stack: {
      frontend: ["p5.js", "HTML Canvas", "Javascript", "Canvas-sketch"],
    },
  },
  {
    id: 3,
    title: "Spotify Recommendation Algorithem",
    description:
      "A recommendation algorithem for Spotify data base made with python and scikit-learn using k-means and clustring to find similarties in clusters and then using a decision tree to finish recommending similar songs .",
    image: "./images/spotify-recommendation.jpg",
    links: [
      {
        type: "Github",
        url: "https://github.com/haithamexe/Ann-Spotify-rec",
      },
    ],

    features: [
      "Recommendation Algorithem",
      "Python",
      "Scikit-learn",
      "K-means",
      "Clustring",
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
    image: "/images/graphic-designs.jpg",
  },
  {
    id: 5,
    title: "Illustrations",
    description:
      "a collection of digital art illustrations made with Clip Studio Paint and Photoshop.",
    image: "/images/illustrations.jpg",
    links: [
      {
        type: "Art Archive",
        url: "https://sites.google.com/view/haithamexist/home",
      },
    ],
  },
];
