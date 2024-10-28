
function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let i = 0; i < allNotes.notes.length; i++){
        contentRef.innerHTML += getNoteTemplates(i);
    }
}
function renderTrash(){
    let trashRef = document.getElementById('trash');
    trashRef.innerHTML = '';

    for(let i = 0; i < allNotes.trash.length; i++){
        trashRef.innerHTML += getTrashTemplates(i);
    }

}
function getNoteTemplates(i){
    return /*html*/`
        <div class="single_content">
            <p>title: ${allNotes.notesTitles[i]}</p>
            <p> ${allNotes.notes[i]}</p>
            <button onclick="moveNote(${i}, 'notes', 'trash')">move to trash</button>
        </div>
    `
}
function getTrashTemplates(i){
    return /*html*/ `
        <div class="single_content_trash">
            <p>title: ${allNotes.trashTitles[i]}</p>
            <p>${allNotes.trash[i]}</p>
            <button onclick="deleteTrashNote(${i})">delete</button>
            <button onclick="moveNote(${i}, 'trash', 'notes')">restore</button>
        </div>
    `
}
