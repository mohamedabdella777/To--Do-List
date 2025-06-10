let taskInput = document.querySelector('.task-input input');
let addBtn = document.querySelector('.task-input .btn');
let checkBoxes = document.querySelector('.check-boxes');

let taskarry = JSON.parse(localStorage.getItem('task')) || [];



addBtn.addEventListener('click', () =>{

   let text = taskInput.value.trim();
   if( text===''){
     return;
   }
    let completed = false;
   
function create(text,completed) {
    let div =document.createElement('div');
    div.classList.add('box');
    let checkinput=document.createElement('input');
    checkinput.type='checkbox';
    let id ="input" + Date.now();
      checkinput.id=id;
    let label=document.createElement('label');
     label.htmlFor = id;
     label.textContent=text;
     checkinput.checked=completed;
    let cancel =document.createElement('i');
    cancel.classList.add('fas', 'fa-times');
    div.appendChild(checkinput);
    div.appendChild(label);
    div.appendChild(cancel);
    checkBoxes.appendChild(div);


cancel.addEventListener('click', () => {
   div.remove();
   for (let i = 0; i < taskarry.length; i++) {
   if (taskarry[i].text === text) {
   taskarry.splice(i, 1); // احذف عنصر واحد عند الـ index ده
   break; }
}
  localStorage.setItem('task', JSON.stringify(taskarry));
});
    


checkinput.addEventListener('click', () => {

   if (checkinput.checked === true) {
    label.style.textDecoration = 'line-through';   } 
    else {
    label.style.textDecoration = 'none'; }

    for(i=0; i<taskarry.length; i++){
      if(taskarry[i].text === text){
        taskarry[i].completed = checkinput.checked;
      }
    }
          localStorage.setItem('task', JSON.stringify(taskarry));
  });

  taskarry.push({ text: text, completed: completed });
  localStorage.setItem('task', JSON.stringify(taskarry));
  taskInput.value= "";

}
 create(text,completed);

});


taskarry.forEach(({ text, completed }) => {

  let div =document.createElement('div');
    div.classList.add('box');
    let checkinput=document.createElement('input');
    checkinput.type='checkbox';
    let id ="input" + Date.now();
      checkinput.id=id;
    let label=document.createElement('label');
     label.htmlFor = id;
     label.textContent=text;
     checkinput.checked=completed;
    let cancel =document.createElement('i');
    cancel.classList.add('fas', 'fa-times');
    div.appendChild(checkinput);
    div.appendChild(label);
    div.appendChild(cancel);
    checkBoxes.appendChild(div);



   cancel.addEventListener('click', () => {
   div.remove();
   for (let i = 0; i < taskarry.length; i++) {
   if (taskarry[i].text === text) {
   taskarry.splice(i, 1); // احذف عنصر واحد عند الـ index ده
   break; }
}
  localStorage.setItem('task', JSON.stringify(taskarry));
});
    



checkinput.addEventListener('click', () => {

   if (checkinput.checked === true) {
    label.style.textDecoration = 'line-through';   } 
    else {
    label.style.textDecoration = 'none'; }

    for(i=0; i<taskarry.length; i++){
      if(taskarry[i].text === text){
        taskarry[i].completed = checkinput.checked;
      }
    }
          localStorage.setItem('task', JSON.stringify(taskarry));
  });




});