// loading content main


function isVisible (element){
    let rect = element.getBoundingClientRect()
    return (
        rect.top <= window.innerHeight /2 &&
        rect.bottom > window.innerHeight /2       
    )    
}

function loading(element){

    if (isVisible(element)){
        element.classList.add('visible-content')
        if(element=='#contact'){
            console.log('conatatos')
        }else{
            console.log('NAO conatatos')
        }
    }else{
        element.classList.remove('visible-content')
        
    }
    
}

window.addEventListener('scroll',()=>{
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
const projects=[
    {
        nome:"Google",
        subname:"Projo google feito com HTML e CSS,feito com as propriedades flex box",
        url:'../assets/main/icon-projects-video/video/google.mp4'
    }
]


function loadingProjects(){

    let projectsContainer = document.querySelector('#projects-container')

    projects.forEach(projectObj =>{
        let project = docuemnt.createElement('div');
        project.classList.add('project')

        
    })

}