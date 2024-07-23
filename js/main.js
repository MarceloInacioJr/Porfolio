// Função para verificar se o elemento está visível na tela
function isVisible(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
    );
}

// Função para carregar elemento
function loading(element) {
    if (isVisible(element)) {
        element.classList.add('visible-content');
    } else {
        element.classList.remove('visible-content');
    }
}

// Adicionar evento de scroll
window.addEventListener('scroll', () => {
    let sections = ['about-me', 'skills', 'training', 'projects', 'contacts'].map(id => document.querySelector(`#${id}`));
    sections.forEach(loading);
});

// Mapeamento de ícones
const iconMap = {
    iconHTML: '/assets/main/icon-projects-video/icon-language/icon-html.svg',
    iconCSS: '/assets/main/icon-projects-video/icon-language/icon-css.svg',
    iconJS: '/assets/main/icon-projects-video/icon-language/icon-js.svg',
    iconREACT: '/assets/main/icon-projects-video/icon-language/icon-react.svg',
    iconTS: '/assets/main/icon-projects-video/icon-language/icon-react.svg', 
    iconFIREBASE: '/assets/main/icon-projects-video/icon-language/icon-firebase.png'
};

// Função para mostrar mais informações do projeto
function modalMostInfo(projectObj) {
    let modalMostInfo = document.querySelector("#component-most-info-project");

    modalMostInfo.classList.add('component-most-info-active');
   
    modalMostInfo.innerHTML = `
        <div id="component-most-info-project-title">
            <p>${projectObj.nameProject}</p>
        </div>
        <div id="component-most-info-project-video">
            <video class="video-project" id="video-project" autoplay loop muted>
                <source src="${projectObj.videoUrl}" type="video/mp4">
            </video>
            ${projectObj.videoUrlMobile?`
                <video class="video-project" id="video-project-mobile" autoplay loop muted>
                <source src="${projectObj.videoUrlMobile}" type="video/mp4">
            </video>`:''}
            
        </div>
        <div id="component-most-info-project-content">
            <p>${projectObj.descriptionProject}</p>
            <div id="btn-close-most-info">
                <p>Fechar</p>
            </div>
        </div>
    `;

    modalMostInfo.querySelector('#btn-close-most-info').addEventListener('click', () => {
        modalMostInfo.classList.remove('component-most-info-active');
    });
}

// Função para carregar projetos
function loadingProjects() {
    fetch('projects.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro ao carregar projetos');
            }
            return res.json();
        })
        .then(data => {
            let projectsContainer = document.querySelector('#projects-container');

            data.projects.forEach(projectObj => {
                let project = document.createElement('div');
                project.classList.add('project');

                project.innerHTML = `
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
                        <video class="video-project" width="320" height="240" loop muted>
                            <source src="${projectObj.videoUrl}" type="video/mp4">
                        </video>
                    </div>
                    <div class="border-mostInfo-github">
                        <div id="button-mostInfo">
                            <p id="p-mostInfo">Mais informações</p>
                        </div>
                        <div class="button-github">
                            <a href="${projectObj.urlGithub}" target="_blank">
                                <img src="/assets/main/icon-projects-video/project-image/video-iconguihub.svg" alt="icon-github">
                                <p>Github</p>
                            </a>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(project);

                    // Evento para abrir modal com mais informações
                    project.querySelector('#button-mostInfo').addEventListener('click', () => {
                        modalMostInfo(projectObj);
                    });

                    // Eventos de mouse para controlar a reprodução do vídeo
                    let video = project.querySelector('.video-project');
                    project.querySelector('.project-cover').addEventListener('mouseenter', () => {
                        video.play().catch(error=>console.log('falha ao reproduzir video', error))
                    });

                    project.querySelector('.project-cover').addEventListener('mouseleave', () => {
                        video.pause();
                        video.currentTime = 0;
                    });
            });
        })
        .catch(err => console.log(err));
}

// Carregar projetos
loadingProjects();
