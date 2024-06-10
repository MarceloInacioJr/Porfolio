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
const iconTS = '/assets/main/icon-projects-video/icon-language/icon-react.svg'; 
const iconFIREBASE = '/assets/main/icon-projects-video/icon-language/icon-firebase.png';


const iconMap = {
    iconHTML: iconHTML,
    iconCSS: iconCSS,
    iconJS: iconJS,
    iconREACT: iconREACT,
    iconTS: iconTS,
   iconFIREBASE: iconFIREBASE
}


function loadingProjects() {


    fetch('projects.json').then(res =>{
            if(!res.ok){
                throw console.log('erro ao executar')
            }
                return res.json()
    }).then(( data=>{

        

    let projectsContainer = document.querySelector('#projects-container')

    data.projects.forEach(projectObj => {

        console.log(projectObj)
        let project = document.createElement('div');
        project.classList.add('project')

        project.innerHTML = `
        <div class="project">
            <div class="project-cover">
                <div class="project-cover-content">
                    <p class="project-cover-title">${projectObj.nameProject}</p>
                    <p class="project-cover-description">${projectObj.descriptionProject}</p>
                    <div class="project-cover-icons">
                        ${projectObj.iconUrls.map(iconUrl => `
                        <img src="${iconMap[iconUrl]}" alt="icon-language">
                        `).join('')}
                    </div>
                </div>
                <div class="background-cover">
                    <img src="${projectObj.imageUrl}">
                </div>
            </div>
            <div class="video-content">
                <video class="video-project" width="320" height="240" loop>
                    <source src="${projectObj.videoUrl}" type="video/mp4">
                </video>
            </div>
            <div class="border-github">
                <div class="button-github">
                    <a href="${projectObj.urlGithub}" target="_blank">
                        <img src="/assets/main/icon-projects-video/project-image/video-iconguihub.svg" alt="">
                        <p>Github</p>
                    </a>
                </div>
            </div>
        </div>
        `

        projectsContainer.appendChild(project)

        let video = project.querySelector('.video-project')
        project.querySelector('.project').addEventListener('mouseenter', () => {
            video.play()
        })

        project.querySelector('.video-project').addEventListener('mouseleave', () => {
            video.pause()
            video.currentTime = 0
        })
    })
}))
    
.catch(err=>console.log(err))
}

loadingProjects()
