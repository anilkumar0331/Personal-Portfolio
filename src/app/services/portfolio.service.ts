import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  profileImage = 'assets/images/portfolio-profile-photo.jpg'

  projectDetails: any = {
    webAppProjects: [
      {
        id: 1,
        title: 'Personal Portfolio Application',
        description: 'Showcasing skills, work experience, projects, and more. Developed with Angular for a dynamic user experience.',
        img: 'assets/images/personal-portfolio-app-cover.jpg',
        demoUrl: 'https://anilkumar0331.github.io/Personal-Portfolio/',
        codeUrl: 'https://github.com/anilkumar0331/Personal-Portfolio'
      },
      {
        id: 2,
        title: 'Omnifood Delivery Application',
        description: 'A responsive single-page web application for seamless food delivery. Developed with HTML, CSS, and JavaScript.',
        img: 'assets/images/food-delivery-app-cover.jpg',
        demoUrl: 'https://anilkumar0331.github.io/Omnifood-delivery/',
        codeUrl: 'https://github.com/anilkumar0331/Omnifood-delivery'
      },
      {
        id: 3,
        title: 'Bus Ticket Booking Application',
        description: 'A multi-page web application for Swift, hassle-free reservations. Developed with Angular for a dynamic user experience.',
        img: 'assets/images/bus-booking-app-cover.jpg',
        demoUrl: 'https://anilkumar0331.github.io/bus-booking-app/',
        codeUrl: 'https://github.com/anilkumar0331/bus-booking-app'
      },
      {
        id: 4,
        title: 'Online Shopping Application',
        description: 'A single-page web application for easy browsing and purchasing. Developed with HTML and CSS.',
        img: 'assets/images/online-shopping-app-cover.webp',
        demoUrl: 'https://anilkumar0331.github.io/estore-online-shopping/',
        codeUrl: 'https://github.com/anilkumar0331/estore-online-shopping'
      },
    ],
    mlProjects: [
      {
        id: 1,
        title: 'Large Language Model Behaviour Pattern',
        description: 'Examined Large Language Models to understand hallucinations and inconsistencies in their responses.',
        img: 'assets/images/llm-behaviour-pattern-cover.jpg',
        demoUrl: 'https://github.com/anilkumar0331/LLM-Behaviour-Pattern',
        codeUrl: 'https://github.com/anilkumar0331/LLM-Behaviour-Pattern'
      },
      {
        id: 2,
        title: 'Bank Customer Churn Prediction',
        description: 'Regression analysis on BankChurner data to help banks reduce customer churn and foster lasting relationships.',
        img: 'assets/images/churn-prediction-cover.png',
        demoUrl: 'https://github.com/anilkumar0331/churn-prediction-in-banking',
        codeUrl: 'https://github.com/anilkumar0331/churn-prediction-in-banking'
      },
      {
        id: 3,
        title: 'Bad Graph vs Good Graph',
        description: 'Addresses data misrepresentation by correcting misleading visualizations using R and its libraries.',
        img: 'assets/images/graph-redesign-cover.webp',
        demoUrl: 'https://github.com/anilkumar0331/bad-graph-redesign',
        codeUrl: 'https://github.com/anilkumar0331/bad-graph-redesign'
      },
      {
        id: 4,
        title: 'Exploration Of Udemy Courses Growth',
        description: "Analyzed Udemy's data to aid students in selecting courses based on interests, cost, duration, popularity, and ratings.",
        img: 'assets/images/udemy-growth-cover.jpg',
        demoUrl: 'https://github.com/anilkumar0331/udemy-growth-of-courses',
        codeUrl: 'https://github.com/anilkumar0331/udemy-growth-of-courses'
      }
    ]
  };

  experienceDetails: any = [
    {
      id: 1,
      role: 'Full Stack Developer',
      designation: 'Software Developer',
      sDate: 'July 2024',
      eDate: 'Present',
      empType: '',
      company: 'PNC Bank',
      address: 'Fairfax, Virginia, United States'
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      designation: 'Programmer Analyst',
      sDate: 'Jan 2020',
      eDate: 'July 2022',
      empType: 'Full-Time',
      company: 'Cognizant',
      address: 'Hyderabad, Telangana, India'
    },
    {
      id: 3,
      role: 'Full Stack Developer',
      designation: 'Software Engineer',
      sDate: 'Jan 2019',
      eDate: 'Dec 2019',
      empType: 'Full-Time',
      company: 'TechnostormR Consulting Services',
      address: 'Hyderabad, Telangana, India'
    },
  ];

  educationDetails: any = [
    {
      id: 1,
      degree: 'Master of Science',
      specialization: 'Data Analytics Engineering',
      sDate: 'Aug 2022',
      eDate: 'May 2024',
      university: 'GEORGE MASON UNIVERSITY',
      address: 'Fairfax, Virginia, United States'
    },
    {
      id: 2,
      degree: 'Bachelor of Technology',
      specialization: 'Electronics and Communication Engineering',
      sDate: 'Aug 2016',
      eDate: 'Sep 2020',
      university: 'JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY',
      address: 'Hyderabad, Telangana, India'
    },
  ];

  skills: any = {
    programmingLangs: [
      {
        id: 1,
        name: 'Java',
        logo: 'https://www.svgrepo.com/show/452234/java.svg'
      },
      {
        id: 2,
        name: 'Python',
        logo: 'https://www.svgrepo.com/show/452091/python.svg'
      },
      {
        id: 3,
        name: 'C#',
        logo: 'https://cdn.worldvectorlogo.com/logos/c--4.svg'
      },
      {
        id: 4,
        name: 'R',
        logo: 'https://www.r-project.org/logo/Rlogo.svg'
      },
      {
        id: 5,
        name: 'JavaScript',
        logo: 'https://www.svgrepo.com/show/452045/js.svg'
      },
      {
        id: 6,
        name: 'TypeScript',
        logo: 'https://www.svgrepo.com/show/374146/typescript-official.svg'
      }
    ],
    webTechnologies: [
      {
        id: 1,
        name: 'HTML',
        logo: 'assets/images/html-5-svgrepo-com.svg'
      },
      {
        id: 2,
        name: 'CSS',
        logo: 'assets/images/css-3-svgrepo-com.svg'
      },
      {
        id: 3,
        name: 'Bootstrap',
        logo: 'https://www.svgrepo.com/show/353498/bootstrap.svg'
      },
      {
        id: 4,
        name: 'PHP',
        logo: 'https://www.svgrepo.com/show/452088/php.svg'
      },
      {
        id: 5,
        name: 'Angular',
        logo: 'https://www.svgrepo.com/show/452156/angular.svg'
      },
      {
        id: 6,
        name: 'React JS',
        logo: 'https://www.svgrepo.com/show/452092/react.svg'
      },
      {
        id: 7,
        name: 'Node JS',
        logo: 'assets/images/nodejs-svgrepo-com.svg'
      },
      {
        id: 8,
        name: 'Express JS',
        logo: 'assets/images/express-svgrepo-com.svg'
      },
      {
        id: 9,
        name: 'Spring Boot',
        logo: 'https://www.svgrepo.com/show/354379/spring.svg'
      },
      {
        id: 10,
        name: 'ASP.NET CORE',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg'
      }
    ],
    databases: [
      {
        id: 1,
        name: 'SQL Server',
        logo: 'assets/images/microsoft-sql-server-logo-svgrepo-com.svg'
      },
      {
        id: 2,
        name: 'MySQL',
        logo: 'https://www.svgrepo.com/show/303251/mysql-logo.svg'
      },
      {
        id: 3,
        name: 'PostgreSQL',
        logo: 'https://www.svgrepo.com/show/354200/postgresql.svg'
      },
      {
        id: 4,
        name: 'Oracle SQL',
        logo: 'https://www.svgrepo.com/show/354152/oracle.svg'
      },
      {
        id: 5,
        name: 'MongoDB',
        logo: 'assets/images/mongodb-svgrepo-com.svg'
      }
    ],
    toolsAndCloudTechnologies: [
      {
        id: 1,
        name: 'Tableau',
        logo: 'assets/images/tableau-svgrepo-com.svg'
      },
      {
        id: 2,
        name: 'Git (command line)',
        logo: 'https://www.svgrepo.com/show/452210/git.svg'
      },
      {
        id: 3,
        name: 'Azure',
        logo: 'https://www.svgrepo.com/show/353464/azure.svg'
      },
      {
        id: 4,
        name: 'AWS',
        logo: 'assets/images/aws-svgrepo-com.svg'
      },
      {
        id: 5,
        name: 'Docker',
        logo: 'https://www.svgrepo.com/show/353661/docker.svg'
      },
      {
        id: 6,
        name: 'Jira',
        logo: 'https://www.svgrepo.com/show/353935/jira.svg'
      },
      {
        id: 7,
        name: 'YouTrack',
        logo: 'https://www.svgrepo.com/show/354593/youtrack.svg'
      },
      {
        id: 8,
        name: 'GitHub',
        logo: 'assets/images/github-142-svgrepo-com.svg'
      },
      {
        id: 9,
        name: 'Visual Studio Code',
        logo: 'https://www.svgrepo.com/show/354522/visual-studio-code.svg'
      },
      {
        id: 10,
        name: 'Eclipse',
        logo: 'https://www.svgrepo.com/show/353685/eclipse-icon.svg'
      },
      {
        id: 11,
        name: 'IntelliJ',
        logo: 'https://www.svgrepo.com/show/452236/jb-intellij-idea.svg'
      },
      {
        id: 12,
        name: 'Postman',
        logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg'
      },
      {
        id: 13,
        name: 'Jupyter',
        logo: 'assets/images/jupyter-svgrepo-com.svg'
      },
      {
        id: 14,
        name: 'RStudio',
        logo: 'assets/images/RStudio-Logo-flat.svg'
      }
    ],
  }
        

  constructor() { }

  getProjectDetails(): Observable<any> {
    return this.projectDetails;
  }

  getExpereinceDetails(): Observable<any> {
    return this.experienceDetails;
  }

  getEducationDetails(): Observable<any> {
    return this.educationDetails;
  }

  getSkills(): Observable<any> {
    return this.skills;
  }

}

