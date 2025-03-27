
/*project card requirements:
    1. a titled image
    2. text of languages used
    3.  GitHub link 
    4. deployed link*/

    //image formatting
    // /src/assets/projectImages/<image name>.jpg
    const projectsArr = [
        {
            imageSrc: "/src/assets/projectImages/cars-and-trucks-demo-image.jpg",
            title: "Cars and Trucks", 
            skills: "TypeScript, Inquirer.js", 
            gitHubLink: "https://github.com/Lauren245/Cars-and-Trucks", 
            deployedLink: "#"
        },
        {
           
            imageSrc: "/src/assets/projectImages/employee-cms-demo-image.jpg",
            title: "Employee Tracker CMS", 
            skills: "TypeScript, Inquirer.js, PostgreSQL", 
            gitHubLink: "https://github.com/Lauren245/Employee-Tracker-CMS",
            deployedLink: "#" 
        },
        {
            imageSrc: "/src/assets/projectImages/Weather-Dashboard-Demo-Image.jpg",
            title: "Weather Dashboard",
            skills: "TypeScript",
            gitHubLink: "https://github.com/Lauren245/Weather-Dashboard",
            deployedLink: "https://weather-dashboard-ktb0.onrender.com/"
        },
        {
            imageSrc: "/src/assets/projectImages/wevents-demo-image.jpg",
            title: "Wevents",
            skills: "TypeScript, 3rd-Party APIs, routes",
            gitHubLink: "https://github.com/Lauren245/Wevents",
            deployedLink: "https://wevents.onrender.com/" //!!! Is deployed, but currently does not work. The Database needs to be refactored
        },
        {
            imageSrc: "/src/assets/headshot.jpg",
            title: "Book Search Engine",
            skills: "TypeScipt, 3rd-Party APIs, GraphQL, MongoDB",
            gitHubLink: "https://github.com/Lauren245",
            deployedLink: "#"
        },
        {
            imageSrc: "/src/assets/headshot.jpg",
            title: "Placeholder Card 6",
            skills: "Skills Here",
            gitHubLink: "https://github.com/Lauren245",
            deployedLink: "#"
        }
    ];
    //TODO: add some C# projects to this list
    
    export default projectsArr