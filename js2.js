console.log(
  "This is about app of adding new notes in the list of the items ..."
);
showNotes();
let newBtn = document.getElementById("newBtn");

newBtn.addEventListener("click", function (e) {

let addText = document.getElementById("addText");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  }
   else {

    notesObj = JSON.parse(notes);
  }
  notesObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  showNotes() ;
});

function showNotes() {


    let notes = localStorage.getItem("notes");
  
    if (notes == null) {
      notesObj = [];
    }
     else {
  
      notesObj = JSON.parse(notes);
      console.log(notesObj);
    }
  let html ='';
    
        notesObj.forEach(function(element, index) {
            html += `
                    <div id="notes">
                     <h4 class="my">Note ${index + 1}</h4>
                         <p class="my"> ${element}</p>
                         <button id= ${index} onclick="DeleteNote(this.id)"> Delete Note...</button>                                  </div>`; 
  
      });
    let notesEl=document.getElementById("notes");
    if(notesObj.length !=0){
        notesEl.innerHTML=html;
      
    }
   else {
  notesEl.innerHTML=  `<h4>Nothing for showing..  .</h4>`;
}
    
}
function DeleteNote(index){

  let notes = localStorage.getItem("notes");
  
  if (notes == null) {
    notesObj = [];
  }
   else {

    notesObj = JSON.parse(notes);
    console.log(notesObj);
  }
  
      notesObj.splice(index,1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
   
showNotes();
}