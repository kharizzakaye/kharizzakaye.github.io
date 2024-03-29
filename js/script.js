// Load footer content
let footerContent = `
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </a>
            <span class="text-muted">©${new Date().getFullYear()} Khariza</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
                <a class="text-muted" target="_blank" href="https://github.com/kharizzakaye">
                    <image src="./images/icons/icon-github.svg" width="38" height="38" alt="Github icon link" />
                </a>
            </li>
            <li class="ms-3">
                <a class="text-muted" target="_blank" href="https://www.linkedin.com/">
                    <image src="./images/icons/icon-linkedin.svg" width="38" height="38" alt="Linkedin icon link" //>
                </a>
            </li>
            <li class="ms-3">
                <a class="text-muted" target="_blank" href="https://www.behance.net/kviloria">
                    <image src="./images/icons/icon-behance.svg" width="38" height="38" alt="Behance icon link" //>
                </a>
            </li>
        </ul>
    </footer>
  `
document.querySelector("#footer").innerHTML = footerContent;