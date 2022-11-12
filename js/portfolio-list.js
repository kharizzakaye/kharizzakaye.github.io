let projectsList = [
    {
        title: "TESDA Registry of Workers Assessed and Certified Management Information System with Certificate Manager",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "e-Ducación: Online Learning Management System with Mobile Application",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "educacion thumbnail image",
        mainPageLink: "#",
    },
    {
        title: "Retail Management System with Point of sale (POS) and Barcode Technology",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Integrated Library Management System",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Student Health Management System",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "",
        mainPageLink: "#",
    },
    {
        title: "Weather App",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "weather-app-thumbnail",
        mainPageLink: "#",
    },
    {
        title: "Picture Puzzle",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "picture-puzzle-thumbnail",
        mainPageLink: "#",
    },
    {
        title: "Message Encode/Decoder",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Anime Quote Generator",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "anime-quote-generator-thumbnail",
        mainPageLink: "#",
    },
    {
        title: "Movie Review App",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Veterinary Appointment",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Coin Collection Manager",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Pet Care: Pet Health Management",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Expiry Tracker",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
    {
        title: "Philippine Zip Code Finder",
        imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        altText: "alt text",
        mainPageLink: "#",
    },
];

let projectContents = '';

projectsList.forEach(p => {
    projectContents += `
        <div class="col-xl-3 col-md-4 col-sm-6 py-3 d-flex align-items-stretch">
            <a href="${p["mainPageLink"]}" class="thumbnail-link">
                <div class="card thumbnail-card">
                    <img src="${p["imageLink"]}" class="card-img-top" alt="${p["altText"]}"> 
                    <div class="card-description">
                        <div class="row">
                            <div class="col">
                                <h4 class="card-description-title">${p["title"]}</h4>
                                <p class="card-description-subtitle">${p["title"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
});

document.querySelector("#projects-list").innerHTML = projectContents;