// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Varun",
  middleName: "",
  lastName: "Gande",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/vrung2323",
    },
    {
      image: "fa fa-envelope",
      url: "mailto:vg262@cornell.edu",
    },
    {
      image: "fab fa-instagram",
      url: "https://www.instagram.com/23varun.g/",
    },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/varun-gande/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/varun-gande.png"),
  imageSize: 375,
  message:
    "Hi! My name is Varun Gande. I’m an undergraduate student at Cornell University studying Operations Research and Computer Science. My goal has always been to make a positive impact on people's lives, and throughout my time at Cornell, I've been fortunate enough to work on various projects and contribute to large-scale research efforts. Some of my current undertakings include contributing to Cornell Data Science, exploring and analyzing mutation quantitative trait loci (mutQTLs) as a novel genetic field, and working on this site. In my free time, I like to play and follow tennis, ping-pong, and cricket, and have played the piano for 16 years.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "vrung2323", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/varun-gande.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/varun-gande.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "SQL", value: 85 },
    { name: "MATLAB", value: 80 },
    { name: "C", value: 50 },
    { name: "Java", value: 70 },
    { name: "Markdown", value: 65 },
    { name: "LaTeX", value: 80 },
    { name: "R", value: 70 },
  ],
  softSkills: [
    { name: "NumPy", value: 95 },
    { name: "Pandas", value: 90 },
    { name: "Matplotlib", value: 85 },
    { name: "Git", value: 80 },
    { name: "Scikit-learn", value: 85 },
    { name: "Unix", value: 80 },
    { name: "Jupyter", value: 85 },
    { name: "AWS", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "vg262@cornell.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Incoming Software Engineering Intern',// Here Add Company Name
      companylogo: require('../assets/img/bloomberg.png'),
      date: 'June 2023 – August 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
