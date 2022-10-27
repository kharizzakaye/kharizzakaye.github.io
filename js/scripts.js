let projectsList = [
    // {
    //     id: 1,
    //     title: "SAFRA Membership and Club Management System",
    //     imageLink: "images/soon.png",
    //     altText: "alt text",
    //     mainPageLink: "../pages/safra.html",
    //     target: "",
    // },
    // {
    //     id: 2,
    //     title: "TESDA Registry of Workers Assessed and Certified Management Information System with Certificate Manager",
    //     imageLink: "images/soon.png",
    //     altText: "alt text",
    //     mainPageLink: "../pages/tesda.html",
    //     target: "",
    // },
    {
        id: 3,
        title: "e-Ducación: Online Learning Management System with Mobile Application",
        imageLink: "/images/educacion-thumbnail.jpg",
        altText: "educacion thumbnail image",
        mainPageLink: "../pages/educacion.html",
        target: "",
    },
    // {
    //     id: 4,
    //     title: "Retail Management System with Point of sale (POS) and Barcode Technology",
    //     imageLink: "images/soon.png",
    //     altText: "alt text",
    //     mainPageLink: "../pages/retail-management.html",
    //     target: "",
    // },
    // {
    //     id: 5,
    //     title: "Integrated Library Management System",
    //     imageLink: "images/soon.png",
    //     altText: "alt text",
    //     mainPageLink: "../pages/integrated-library.html",
    //     target: "",
    // },
    // {
    //     id: 6,
    //     title: "Student Health Management System",
    //     imageLink: "images/soon.png",
    //     altText: "",
    //     mainPageLink: "../pages/student-health-management.html",
    //     target: "",
    // },
    {
        id: 7,
        title: "Weather App",
        imageLink: "/images/weather-app-thumbnail.png",
        altText: "weather-app-thumbnail",
        mainPageLink: "../pages/weather-app.html",
        target: "",
    },
    // {
    //     id: 8,
    //     title: "Picture Puzzle",
    //     imageLink: "images/picture-puzzle-thumbnail.png",
    //     altText: "picture-puzzle-thumbnail",
    //     mainPageLink: "https://github.com/kharizzakaye/Picture-Puzzle",
    //     target: "",
    // },
    // {
    //     id: 9,
    //     title: "Message Encode/Decoder",
    //     imageLink: "https://images.squarespace-cdn.com/content/v1/51ba2198e4b089e26e4a4631/1371178168864-3322IOGLWN4SQLCFKCUT/FastCo_Thumb.jpg?format=300w",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     target: "",
    // },
    {
        id: 10,
        title: "Anime Quote Generator",
        imageLink: "images/anime-quote-generator-thumbnail.png",
        altText: "anime-quote-generator-thumbnail",
        mainPageLink: "../pages/anime-quote-generator.html",
        target: "",
    },
    {
        id: 11,
        title: "Movie Review App",
        imageLink: "images/soon.png",
        altText: "alt text",
        mainPageLink: "../pages/movie-review-app.html",
        target: "",
    },
    // {
    //     id: 12,
    //     title: "Veterinary Appointment",
    //     imageLink: "images/soon.png",
    //     altText: "alt text",
    //     mainPageLink: "../pages/veterinary-appointment.html",
    //     target: "",
    // },
    // {
    //     id: 13,
    //     title: "Coin Collection Manager",
    //     imageLink: "https://images.squarespace-cdn.com/content/v1/51ba2198e4b089e26e4a4631/1420734477621-NX48I9D9WV2CSLESHW44/LittleVictories.png?format=500w",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     target: "",
    // },
    // {
    //     id: 14,
    //     title: "Pet Care: Pet Health Management",
    //     imageLink: "https://images.squarespace-cdn.com/content/v1/51ba2198e4b089e26e4a4631/1371178168864-3322IOGLWN4SQLCFKCUT/FastCo_Thumb.jpg?format=300w",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     target: "",
    // },
    // {
    //     id: 15,
    //     title: "Expiry Tracker",
    //     imageLink: "https://images.squarespace-cdn.com/content/v1/51ba2198e4b089e26e4a4631/1420734477621-NX48I9D9WV2CSLESHW44/LittleVictories.png?format=500w",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     target: "",
    // },
    // {
    //     id: 16,
    //     title: "Philippine Zip Code Finder",
    //     imageLink: "https://images.squarespace-cdn.com/content/v1/51ba2198e4b089e26e4a4631/1420734477621-NX48I9D9WV2CSLESHW44/LittleVictories.png?format=500w",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     target: "",
    // },
];

let projectContents = '';

projectsList.forEach(p => {
    projectContents += `

    <div class="col-xl-4 col-md-4 col-sm-6 py-3 d-flex align-items-stretch">
        <a href="${p["mainPageLink"]}" target="${p["target"]}" class="project-link">
            <div>
                <div class="card ">
                    <img src=${p["imageLink"]} class="card-img-top project-link-image" alt=${p["altText"]}>         
                </div>
                <h3 class="card-title">${p["title"]}</h3>
            </div>
        </a>
    </div>
  `
});

document.querySelector("#projects-list").innerHTML = projectContents;



let footerContent = `
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </a>
            <span class="text-muted">©${new Date().getFullYear()} Khariza</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" target="_blank" href="https://github.com/kharizzakaye"><image src="./images/icons/icon-github.svg" width="38" height="38"/></a></li>
            <li class="ms-3"><a class="text-muted" target="_blank" href="https://www.linkedin.com/"><image src="./images/icons/icon-linkedin.svg" width="38" height="38"/></a></li>
            <li class="ms-3"><a class="text-muted" target="_blank" href="https://www.behance.net/kviloria"><image src="./images/icons/icon-behance.svg" width="38" height="38"/></a></li>
        </ul>
    </footer>
  `

document.querySelector("#footer").innerHTML = footerContent;