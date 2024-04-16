// loading content main


function isVisible(element) {
    let rect = element.getBoundingClientRect()
    return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
    )
}

function loading(element) {

    if (isVisible(element)) {
        element.classList.add('visible-content')
        if (element == '#contact') {
            console.log('conatatos')
        } else {
            console.log('NAO conatatos')
        }
    } else {
        element.classList.remove('visible-content')

    }

}

window.addEventListener('scroll', () => {
    let aboutme = document.querySelector('#about-me')
    let skills = document.querySelector('#skills')
    let training = document.querySelector('#training')
    let projects = document.querySelector('#projects')
    let contacts = document.querySelector('#contacts')

    loading(aboutme)
    loading(skills)
    loading(training)
    loading(projects)
    loading(contacts)

})







// projects
    // address icon
    
    const iconHTML = '/assets/main/icon-projects-video/icon-language/icon-html.svg';
    const iconCSS = '/assets/main/icon-projects-video/icon-language/icon-css.svg';
    const iconJS = '/assets/main/icon-projects-video/icon-language/icon-js.svg';
    const iconREACT = '/assets/main/icon-projects-video/icon-language/icon-react.svg';
    const iconTS = '/assets/main/icon-projects-video/icon-language/icon-recat.svg'

    


const projectsObj = [
   

    {
        id: 1,
        nameProject: "Google1",
        descriptionProject: "Projeto google feito com HTML e CSS,feito com as propriedades flex box",
        imageUrl: 'assets/main/icon-projects-video/project-image/google.png',
        iconUrls: [iconHTML,iconCSS, iconJS],
        videoUrl: 'assets/main/icon-projects-video/project-video/google.mp4',
        urlGithub: ''
    },
    {
        id: 1,
        nameProject: "Google1",
        descriptionProject: "Projeto google feito com HTML e CSS,feito com as propriedades flex box",
        imageUrl: 'assets/main/icon-projects-video/project-image/google.png',
        iconUrls: [iconHTML,iconCSS, iconJS],
        videoUrl: 'assets/main/icon-projects-video/project-video/google.mp4',
        urlGithub: ''
    },
    {
        id: 1,
        nameProject: "Google1",
        descriptionProject: "Projeto google feito com HTML e CSS,feito com as propriedades flex box",
        imageUrl: 'assets/main/icon-projects-video/project-image/google.png',
        iconUrls: [iconHTML,iconCSS, iconJS],
        videoUrl: 'assets/main/icon-projects-video/project-video/google.mp4',
        urlGithub: ''
    },
]

function loadingProjects() {


    let projectsContainer = document.querySelector('#projects-container')


    projectsObj.forEach(projectObj => {

        let project = document.createElement('div');
        project.classList.add('project')

        project.innerHTML = `
        <div class="project">
        <div class="project-cover">
            <div class="project-cover-content">
                <p class="project-cover-title">${projectObj.nameProject}</p>
                <p class="project-cover-description">${projectObj.descriptionProject}</p>
                <div class="project-cover-icons">
                    ${projectObj.iconUrls.map(iconUrls => `
                    <img src="${iconUrls}" alt="icon-language">
                    `).join('')}
                </div>
            </div>
            <div class="background-cover">
                <img src="${projectObj.imageUrl}">
            </div>
        </div>
        <div class="video-content">
            <video class="video-project" width="320" height="240" autoplay loop>
                <source src="${projectObj.videoUrl}" type="video/mp4">
            </video>
        </div>
        <div class="border-github">
            <div class="button-github">
                <a href="">
                    <img src="/assets/main/icon-projects-video/project-image/video-iconguihub.svg" alt="">
                    <p>Github</p>
                </a>
            </div>
        </div>
    </div>
        `




        projectsContainer.appendChild(project)
    })

}

loadingProjects()