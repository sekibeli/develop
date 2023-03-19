const beginn = new Date("2023-01-11");
let projects = [];
// let titel;
// let description;
// let startDate;
// let firstSubmission;

/** 
 * JSON-Array wird vom Mini-Backend geladen
 * 
 */
async function init() { 
    setURL('https://julia-georgiew.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    projects = JSON.parse(backend.getItem('projects')) || [];
    console.log('1', projects);
}

/** 
 * Neues Projekt wird im Backend gespeichert
 * 
 * @param {*} project - Das JSON wird ins Array gepusht und im Mini-Backend abgespeichert
 */
function addProject(project) {  
    projects.push(project);
    backend.setItem('projects', JSON.stringify(projects));
}



/**
 *  Das geänderte Projekt wird wieder im Backend gespeichert
 * 
 * @param {*} project - Die Projekt-Variable als einzelnes JSON-Variable
 * @param {*} i - Die Laufvariable für den korrekten Platz im Array
 */
function addChangedProject(project, i) { 
    projects[i] = project;
    backend.setItem('projects', JSON.stringify(projects));
}



/*
 * Ein neues Projekt wird in der JSON Variable "project" gespeichert
 *  Funktionsaufruf: neuer Wert wird im Array gespeichert
 *  Funktionsaufruf: Die Projekte werden neu gerendert
 */
function readProject() { 
    console.log('readProject');
    title = document.getElementById('title');
    description = document.getElementById('description');
    startDate = document.getElementById('startDate');
    firstSubmission = document.getElementById('firstSubmission');
    let project = {
        'title': title.value,
        'description': description.value,
        'image': image.value,
        'startDate': startDate.value,
        'firstSubmission': firstSubmission.value
    }
    addProject(project);
    title.value = ``;
    description = ``;
    renderProjects();

}


function renderProjects() {
    console.log('2 render Projekte');
    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
        mainContainer.innerHTML += renderProjectsTemplate(projects, i);
        calculateDuration(i);
    }
}


// async function deleteProject() {
//     await backend.deleteItem('title');
//     await backend.deleteItem('description');
//     await backend.deleteItem('startDate');
//     await backend.deleteItem('firstSubmission');
// }


function deleteItem(i){
projects.splice(i, 1);
renderProjects();
backend.setItem('projects', JSON.stringify(projects));


}

function calculateDuration(i) {
    let second = new Date(projects[i].firstSubmission);
    let first = new Date(projects[i].startDate);

    let duration = second.getTime() - first.getTime();
    duration = duration / 86400000;
    return duration
}

function delay() {
    setTimeout(renderProjects, 100);
}
function showInput() {

    let newContainer = document.getElementById('container');
    newContainer.innerHTML = showInputTemplate();

}



function showInputFieldsForChange(i) {

    let newContainer = document.getElementById('container');
    newContainer.innerHTML = showInputFieldsForChangeTemplate(i);

}


function changeProjectInfo(i) {
    showInputFieldsForChange(i);
    document.getElementById('title').value = projects[i].title;
    document.getElementById('description').value = projects[i].description;
    document.getElementById('image').value = projects[i].image;
    document.getElementById('startDate').value = projects[i].startDate;
    document.getElementById('firstSubmission').value = projects[i].firstSubmission;
}


function addChangedInfos(i) {
    console.log('geänderte Infos speichern');
    title = document.getElementById('title');
    description = document.getElementById('description');
    startDate = document.getElementById('startDate');
    firstSubmission = document.getElementById('firstSubmission');
    project = {
        'title': title.value,
        'description': description.value,
        'image': image.value,
        'startDate': startDate.value,
        'firstSubmission': firstSubmission.value
    }
    addChangedProject(project, i);
    title.value = ``;
    description = ``;
    renderProjects();
}