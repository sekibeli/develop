function showInputFieldsForChangeTemplate(i){
    return `<div id="newProject" class="container-fluit">
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


function showInputTemplate(){
    return `
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

function renderProjectsTemplate(projects, i){
    return  `
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
            <a onclick="deleteItem(${i})" href="#" class="card-link">löschen</a>
            <a onclick="changeProjectInfo(${i})" href="#" class="card-link">bearbeiten</a>
          </div>
        </div>
  </div>`;
  }