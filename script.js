const beginn = new Date("2023-01-11");
let projects = [];
// let titel;
// let description;
// let startDate;
// let firstSubmission;

 
async function init() {
    setURL('https://julia-georgiew.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    projects = JSON.parse(backend.getItem('projects')) || [];
    console.log('1' , projects);
}
function addProject(project) {

       projects.push(project);
    backend.setItem('projects', JSON.stringify(projects));
    
}

function addChangedProject(project, i){
    projects[i] = project;
    backend.setItem('projects', JSON.stringify(projects));
}

function readProject(){
    console.log('readProject');
    title = document.getElementById('title');
    description = document.getElementById('description');
    startDate = document.getElementById('startDate');
    firstSubmission = document.getElementById('firstSubmission');
    let project = {
        'title' : title.value,
        'description': description.value,
        'image': image.value,
        'startDate' : startDate.value,
        'firstSubmission': firstSubmission.value
    }
    addProject(project);
    renderProjects();
}


function renderProjects(){
    console.log('2 render Projekte');
   let mainContainer = document.getElementById('main');
   mainContainer.innerHTML = '';
   for (let i = 0; i < projects.length; i++) {
    
    mainContainer.innerHTML += `
    <div id="card" class="container-fluit">
    <div class="card" style="width: 18rem;">
        <img src="assets/img/${projects[i].image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${projects[i].title}</h5>
          <p class="card-text">${projects[i].description}.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Startdatum: ${projects[i].startDate}</li>
          <li class="list-group-item">Abgegeben am: ${projects[i].firstSubmission}</li>
          <li class="list-group-item">Bearbeitungszeit: ${calculateDuration(i)} Tage</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a onclick="deleteProject(${i})" href="#" class="card-link">löschen</a>
          <a onclick="changeProjectInfo(${i})" href="#" class="card-link">bearbeiten</a>
        </div>
      </div>
</div>`;
calculateDuration(i);
deleteProject(i);
   }
  
}

async function deleteProject(i) {
    await backend.deleteItem('title');
    await backend.deleteItem('description');
    await backend.deleteItem('startDate');
    await backend.deleteItem('firstSubmission');
  }

function calculateDuration(i){
   let second = new Date(projects[i].firstSubmission);
    let first = new Date(projects[i].startDate);

    let duration = second.getTime() - first.getTime();
   duration = duration / 86400000;
       return duration
}

function delay(){
    setTimeout(renderProjects, 1000);
}
function showInput(){
  
    let newContainer = document.getElementById('container');
    newContainer.innerHTML = `
<div id="newProject" class="container-fluit">
    <div>
    <form onsubmit="readProject()">
        <label for="title">Projektname</label>
        <input id="title" class="form-control form-control-sm" type="text" placeholder="Projektname" aria-label=".form-control-sm example" required>
        <input id="image" class="form-control form-control-sm" type="text" placeholder="Bildname" aria-label=".form-control-sm example" required>
        <input id="description" class="form-control form-control-sm" type="text" placeholder="Beschreibung" aria-label=".form-control-sm example" required>
        <input id="startDate" class="form-control form-control-sm" type="date" placeholder="Modulstart" aria-label=".form-control-sm example" required>
        <input id="firstSubmission" class="form-control form-control-sm" type="date" placeholder="Eingereicht am" aria-label=".form-control-sm example" required>
        <button>speichern</button>
        </form>
       
    </div>
</div>`;
}


function showInputForChange(i){
  
    let newContainer = document.getElementById('container');
    newContainer.innerHTML = `
<div id="newProject" class="container-fluit">
    <div>
    <form onsubmit="readProject()">
        <label for="title">Projektname</label>
        <input id="title" class="form-control form-control-sm" type="text" placeholder="Projektname" aria-label=".form-control-sm example" required>
        <input id="image" class="form-control form-control-sm" type="text" placeholder="Bildname" aria-label=".form-control-sm example" required>
        <input id="description" class="form-control form-control-sm" type="text" placeholder="Beschreibung" aria-label=".form-control-sm example" required>
        <input id="startDate" class="form-control form-control-sm" type="date" placeholder="Modulstart" aria-label=".form-control-sm example" required>
        <input id="firstSubmission" class="form-control form-control-sm" type="date" placeholder="Eingereicht am" aria-label=".form-control-sm example" required>
        <button>speichern</button>
        </form>
        <button onclick="addChangedInfos(${i})">geänderte Daten speichern</button>
    </div>
</div>`;
}

function changeProjectInfo(i){
    // showInput(i);
    showInputForChange(i);
    document.getElementById('title').value = projects[i].title;
    document.getElementById('description').value = projects[i].description;
    document.getElementById('image').value = projects[i].image;
    document.getElementById('startDate').value = projects[i].startDate;
    document.getElementById('firstSubmission').value = projects[i].firstSubmission;
}


function addChangedInfos(i){
    console.log('geänderte Infos speichern');
    title = document.getElementById('title');
    description = document.getElementById('description');
    startDate = document.getElementById('startDate');
    firstSubmission = document.getElementById('firstSubmission');
    project = {
        'title' : title.value,
        'description': description.value,
        'image': image.value,
        'startDate' : startDate.value,
        'firstSubmission': firstSubmission.value
    }
    addChangedProject(project, i);
    renderProjects();
}