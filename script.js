const beginn = new Date("2023-01-11");
let projects = [];
let titel;
let description;
let startDate;
let firstSubmission;

 
async function init() {
    setURL('https://julia-georgiew.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    projects = JSON.parse(backend.getItem('projects')) || [];
}
function addProject(project) {
    projects.push(project);
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
        'startDate' : startDate.value,
        'firstSubmission': firstSubmission.value
    }
    addProject(project);
}
function renderProjects(){
    console.log('render Projekte');
   let mainContainer = document.getElementById('main');
   for (let i = 0; i < 1; i++) {
    
    mainContainer.innerHTML += `
    <div id="card" class="container-fluit">
    <div class="card" style="width: 18rem;">
        <img src="assets/img/sakura.png" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${projects[i]['title']}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
</div>`;
   }
  
}

function showInput(){
    console.log('addProject');
    let newContainer = document.getElementById('container');
    newContainer.innerHTML = `
<div id="newProject" class="container-fluit d-none">
    <div>
    
        <label for="title">Projektname</label>
        <input id="title" class="form-control form-control-sm" type="text" placeholder="Projektname" aria-label=".form-control-sm example">
       
        <input id="description" class="form-control form-control-sm" type="text" placeholder="Beschreibung" aria-label=".form-control-sm example">
        <input id="startDate" class="form-control form-control-sm" type="date" placeholder="Modulstart" aria-label=".form-control-sm example">
        <input id="firstSubmission" class="form-control form-control-sm" type="date" placeholder="Eingereicht am" aria-label=".form-control-sm example">
        <button onclick="readProject()">speichern</button>
    </div>
</div>`;
}