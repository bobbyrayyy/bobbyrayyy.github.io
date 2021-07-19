/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bob's Portfolio",
  description:
    "A big believer in entrepreneurship and technology. My goal is to leverage technology to positively transform people's lives and businesses.",
  og: {
    title: "Bob's Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/bob-lin-an/",
  },
};

//Home Page
const greeting = {
  title: "Bob Lin",
  logo_name: "Bob",
  nickname: "Consultant, Software Engineer, Project Manager",
  subTitle:
    "A big believer in entrepreneurship and technology. My goal is to leverage technology to positively transform people's lives and businesses.",
  resumeLink:
    "https://drive.google.com/file/d/17Tit_7pAHMygNDdVzkjB-LmOCB1d64j8/view?usp=sharing",
  portfolio_repository: "https://github.com/bobbyrayyy",
  // transcript: "",
};

const socialMediaLinks = [
  // /* Your Social Media Link */
  // github: "https://github.com/bobbyrayyy",
  // linkedin: "https://www.linkedin.com/in/bob-lin-an/",
  // gmail: "blin0906@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/bobbyrayyy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bob-lin-an/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://medium.com/@bob.lin",
    fontAwesomeIcon: "fa-medium-m", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Clubhouse",
    link: "https://joinclubhouse.com/@bobbyrayyy",
    fontAwesomeIcon: "fa-cuttlefish", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:blin0906@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing web/mobile applications using React/React Native",
        "⚡ Creating application backend in Node & Flask",
        "⚡ Server testing with k6 and Postman",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#4E75C9",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Data Science and Artifical Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in NLP, TTS and Smart Chatbots in various client use cases",
        "⚡ Experience working with Computer Vision projects",
        "⚡ Quantitative modelling with regression and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Building highly attractive user interface for mobile and web applications",
        "⚡ Creating graphic designs, logos and images from scratch",
        "⚡ Designing user flow through application functionalities to optimize user experience",
        "⚡ Creating exciting and effective videos for presenting ideas in different use cases",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#0F3C6A",
          },
        },
        {
          skillName: "Final Cut Pro",
          fontAwesomeClassname: "simple-icons:youtube",
          style: {
            color: "#FF0000",
          },
        },
      ],
    },

    {
      title: "Consulting and Project Management",
      fileName: "FullStackImg",
      skills: [
        "⚡ Led teams on multiple propjects involving both SME and MNC clients",
        "⚡ Highly-proficient in Microsoft Office and Google Suite productivity tools",
        "⚡ Familiar with CRM tools and managed relations with multiple client accounts",
        "⚡ Delivered end-to-end projects from initial proposal, UAT, development, execution and maintenance",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "fa-file-excel-o",
          style: {
            color: "#1B8527",
          },
        },
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "fa-file-word-o",
          style: {
            color: "#1F31FF",
          },
        },
        {
          skillName: "Microsoft Powerpoint",
          fontAwesomeClassname: "fa-file-powerpoint-o",
          style: {
            color: "#F45614",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos-atlassian",
          style: {
            color: "#145EF4",
          },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: {
            color: "#3573EE",
          },
        },
        {
          skillName: "Google Suite",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            color: "#FF0000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nanyang Technological University",
      subtitle: "B.Eng. in Computer Science",
      logo_path: "ntu.png",
      alt_name: "Nanyang Technological University",
      duration: "2019 - Present",
      descriptions: [
        "⚡ Awards and Acheivements: ",
        "· NTU Premier Scholars Programme, REP Scholarship",
        "⚡ Appointments: ",
        "· Programme Director, NTU SCSE Innovation Lab",
        "· Varsity Volleyball Athlete (Singapore University Games 2019, IVP 2019) ",
        "· Captain of Banyan Hall of Residence Volleyball Club 2019",
        "· Student Leader for REP Freshmen Orientation Camp 2020 ",
        "· Student Leader for Banyan Hall Freshmen Orientation Camp 2020",
        "⚡ Competitions and Projects:",
        "· Hack For Good 2021 (Organised by NUS and supported by Google)",
        "· Singapore Airlines AppChallenge 2020 (Hackathon)",
        "· Shopee Code League 2020",
        "· Makers Design Project 2019-20",
      ],
      website_link: "https://www.ntu.edu.sg/admissions/undergraduate",
    },
    {
      title: "Nanyang Technological University",
      subtitle: "M.S. in Technology Management",
      logo_path: "ntu.png",
      alt_name: "Nanyang Technological University",
      duration: "2019 - Present",
      descriptions: [
        "⚡ The Renaissance Engineering Programme (REP) is a dual-degree programme awarding a Bachelor's and Master's at the end of 4.5 years, with a year abroad at University of California, Berkeley. ",
      ],
      website_link: "https://www.ntu.edu.sg",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Bloomberg Market Concepts",
      subtitle: "- Blooemberg",
      logo_path: "bloomberg-logo.png",
      certificate_link:
        "https://www.bloomberg.com/professional/product/bloomberg-market-concepts/",
      alt_name: "BMC",
      color_code: "black",
    },
    {
      title: "CS50",
      subtitle: "- Harvard",
      logo_path: "harvard.png",
      certificate_link: "",
      alt_name: "CS50",
      color_code: "#white",
    },
    {
      title: "Cisco Certified Network Associate Routing and Switching (CCNA)",
      subtitle: "- Cisco",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "CCNA",
      color_code: "#293654",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Affiliations",
  description:
    "I have been a Full-stack Developer, AI/ML Engineer, Project Management Lead, and Technology Consultant in both startups and established companies. I specialise in NLP and AI Chatbot projects, and have experience in Consulting, Computer Vision, IoT and 3D Printing. Click to expand the sections below!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technology Consulting Analyst",
          company: "Accenture",
          company_url: "https://accenture.com/",
          logo_path: "accenture.png",
          duration: "May 2021 - PRESENT",
          location: "Singapore",
          description:
            "Currently working on the nation-wide NEHR project for a client in the Health and Public Sector.",
          color: "#8b369c",
        },
        {
          title: "Software Projects Consultant",
          company: "CodeGakko",
          company_url: "https://www.codegakko.com",
          logo_path: "codegakko.png",
          duration: "Feb 2021 - May 2021",
          location: "Singapore",
          description:
            "Mentored final year finance and business undergraduates from NTU Nanyang Business School on end-to-end, full stack software development projects related to finance, which are pitched to a panel of industry professionals before graduation.",
          color: "#09631a",
        },
        {
          title: "Full-stack/AI Software Engineer",
          company: "Yoozoo Games",
          company_url: "https://global.yoozoo.com",
          logo_path: "yoozoo.png",
          duration: "May 2020 - Jan 2021",
          location: "Singapore",
          description:
            "I was offered extension by Yoozoo Games after the initial 3-month internship (May-Aug), spending a total of 9 months there. I implemented various TTS Machine Learning frameworks (tensorflow TTS, mozilla TTS, tacotron) to train multiple chatbots with different use cases.  I also did both back-end and front-end development on AI Virtual Assistant and Chatbot projects, and its testing and maintenance (k6, Postman, flask, fastapi). I performed Computer Vision Machine Learning model conversions and designed/built 3D modelling solution for a Covid-19 response project (Autodesk Fusion), cutting company cost by >10x.",
          color: "#fc1f20",
        },
        {
          title: "Product/Project Management Lead",
          company: "Winimy.ai",
          company_url: "https://winimy.ai",
          logo_path: "winimy.png",
          duration: "Mar 2019 - Oct 2020",
          location: "Singapore",
          description:
            "Worked directly with the Founder/CEO, having won Tech in Asia Pitch Night 2019, invited to Tech in Asia Conference 2019 in Jarkarta, invited for AWS Summit Singapore 2019 to deliver way-finding solution via Voice AI Concierge Booth. Led projects involving custom AI-centric solutions, patented holographic telepresence solution, and mananged multiple client accounts and relations. Trained and developed voice AI and NLP in multiple languages via Microsoft Azure LUIS. Eventually led a taem of language experts from various countries in South East Asia and improved NLP registered intent accuracy to over 90% for 4 languages for a MNC client project, involving >1000 unique testers worldwide.",
          color: "#0d5378",
        },
      ],
    },

    {
      title: "Leadership and Affiliations",
      experiences: [
        {
          title: "Program Director",
          company: "NTU SCSE Innovation Lab",
          company_url: "https://www.linkedin.com/company/ilabscse/mycompany/",
          logo_path: "ilab.png",
          duration: "Aug 2020 - PRESENT",
          location: "Singapore",
          description:
            "The SCSE Innovation Lab aims to establish an university-wide open innovation platform to promote entrepreneurship ecosystems within SCSE and beyond. As the Program Director, I work with external organisations and internal stakeholders to plan and organise workshops, conferences, and events related to artificial intelligence, app development, technical interviews, design thinking, entrepreneurship, and more.",
          color: "#4285F4",
        },
        {
          title: "Varsity Volleyball Athlete",
          company: "NTU",
          company_url:
            "https://www.ntu.edu.sg/life-at-ntu/student-life/sports/sports-excellence/varsity-sports-teams",
          logo_path: "ntu.png",
          duration: "Aug 2019 - PRESENT",
          location: "Singapore",
          description:
            "Participated in Singapore University Games and Taiwan Universities Invitationals. Captain of Banyan Hall Volleyball Team 2019.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Although I don't have tons of free time, I like to build pet projects whenever I can. I'm particularly interested in automation to simplify daily-tasks, finance, and design.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "bob.png",
    description:
      "Feel free to reach out to me regarding opportunities in the Tech, Consulting or Finance Sectors. I'd also love to chat about startup ventures and help out with Tech related projects!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I also like to write about my life and experiences. Read them on my medium page:",
    link: "https://medium.com/@bob.lin",
    avatar_image_path: "blogs_image.svg",
  },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  phoneSection: {
    maintitle: "Please feel free to reach out to me!",
    title: "Phone Number",
    subtitle: "+65 91066412",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  experience,
  skills,
  competitiveSites,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
};
