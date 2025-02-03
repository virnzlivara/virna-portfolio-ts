export const projects = [
    {
      title: "Kony Mobile",
      subtitle: "Hotel Reservation and Booking app for an International Hotel",
      description:
        "We use the Kony mobile technology using Lua Programming language, some of the features are GeoLocation, Maps, Push Notification, Credit Card Payment, Omniture Analytics, etc. Support mostly of the all devices",
      image: "./marriott.png",
      features: "Location, Payment, Analytics"
    },
    {
      title: "ExtJS/Sencha",
      subtitle: "ERP Project",
      description:
        "We use Sencha/EJS Framework and REST API on the backend, this supports iOS and Android Platform. Some of the feature are Maps, Google Analytics, OATH Authentication, SSO Login, Dynamic Layout, etc",
      image: "./Deltek.png",
      link: "https://apps.apple.com/ph/app/deltek-touch-for-maconomy/id577440088",
      features: "Dynamic Layout, Time and Expense Recordings, Analytics"
    },
    {
      title: "Cloud App",
      subtitle: "Angular",
      description:
        "This is a project whose objective is to create an application that will customize the need of the customer to access the AWS Services according to their needs",
        image: "./confidential.png",
        link: "",
        features: "Expose AWS Features"
        
    },
    {
      title: "Work Order Details",
      subtitle: "ReactJS with GraphQL API",
      description:
        "Uses ReactJS in the FrontEnd and consume data from GraphQL, data will be used to monitor the progress of the work order of their customers",
        image: "./confidential.png",
        link: "",
        features:"Dynamic Layout, Microfrontend architecture"
    },
    {
      title: "Automate Batch Processing for downloading records for an insurance company",
      subtitle: "NodeJS, Azure Services, Azure Functions",
      description:
        "Using nodejs, the application I have created can easily sort, download, and filter recordings from an insurance company. This will help them organize and easily track their customer recordings.",
        image: "./confidential.png",
        link: "",
        features: "Batch Download"
    },
    {
      title: "Survey Web app for a Food Science Company in Ireland",
      subtitle: "VueJS, C#, Netcore, SQL, Azure Devops",
      description:
        "This app can create different templates of charts and questions depending on how they want to construct their survey",
        image: "./confidential.png",
        link: "",
        features: "Charts, Drag and Drop, Computation of Sample Results"
    },
    {
      title: "Web App for a Telecom Company in South Africa",
      subtitle: "Angular",
      description:
        "Web Application where customer can select their plan. Just like Globe and Smart in the Philippines.",
        image: "./confidential.png",
        link: "",
        features: ""
    },
    {
      title: "SpeedRegalo Ecommerce",
      subtitle: "NextJS, ReactNative, Node, Project Manager, Scrum Master, Digital Ocean",
      description:
        "Ecommerce Application with Admin Side and Mobile App",
        image: "./confidential.png",
        link: "",
        features: "ecommerce"
    },
    {
      title: "NAVQMS",
      subtitle: "NextJS, Project Manager, Scrum Master, Digital Ocean",
      description:
        "Quality Management System",
        image: "./confidential.png",
        link: "",
        features: "qms"
    },
    {
      title: "Web App for Banking Application in the Philippines",
      subtitle: "NextJS, ReactJS, Material UI, Storybook",
      description:
        "Web Application where customer can select their plan. Just like Globe and Smart in the Philippines.",
        image: "./confidential.png",
        link: "",
        features: "Fintech"
    }
  ];

  export const skills = [
      "ReactJS",
      "Angular",
      "ExtJS",
      "C#",
      "Objective-C",
      "C++",
      "REST",
      "GRAPHQL",
      "AWS",
      "GIT",
      "JIRA",
      "TFS"
      
  ];

  export const FrontEndSkills = [
    "ReactJS",
    "Angular",
    "ExtJS",
    "VueJS"
    
];

export const BackEndSkills = [
  "C#",
  "NetCore",
  "NodeJS",
  "SQL",
  "MySQL"
  
];

export const OtherSkills = [ 
  "Objective-C",
  "C++",
  "AWS",
  "Azure",
  "Digital Ocean", 
  "GIT",
  "CICD",
  "Workflow",
  "JIRA",
  "Clickup",
  "TFS",
  "SVN",
  "Turquoise",
  "Microsoft Office",
  "Photoshop",
  "Figma",
  "Canva"
  
];

 interface ITestimonials 
  {
      quote:string,
      image:string,
      name:string,
      company:string
  }
  export const testimonials : ITestimonials[] = [];