let taskInput = document.querySelector('.task-input input');
let addBtn = document.querySelector('.task-input .btn');
let checkBoxes = document.querySelector('.check-boxes');

let taskarry = JSON.parse(localStorage.getItem('task')) || [];

addBtn.addEventListener('click', () =>{

   let userinput = taskInput.value.trim();
   if( userinput===''){
    return;
   }

   function create(){
    let div =document.createElement('div');
    div.classList.add('box');
    let checkinput=document.createElement('input');
    checkinput.type='checkbox';
    let id ="input" + Date.now();
      checkinput.id=id;
    let label=document.createElement('label');
     label.htmlFor = id;
    label.textContent=userinput;
    let cancel =document.createElement('i');
    cancel.classList.add('fas', 'fa-times');

    div.appendChild(checkinput);
    div.appendChild(label);
    div.appendChild(cancel);
    checkBoxes.appendChild(div);

      cancel.addEventListener('click', () => {
         div.remove();
         taskInput.value= "";
    });
    

     checkinput.addEventListener('click', () => {
        if (checkinput.checked === true) {
          label.style.textDecoration = 'line-through';
        } 
        else {
          label.style.textDecoration = 'none';
        } 
      });
        taskarry.push(userinput);
        localStorage.setItem('task', JSON.stringify(taskarry));

   }
   
create();

});

window.onload= () =>{
       
       
      taskarry .forEach(userinput => {

    let div =document.createElement('div');
    div.classList.add('box');
    let checkinput=document.createElement('input');
    checkinput.type='checkbox';
    let id ="input" ;
      checkinput.id=id;
    let label=document.createElement('label');
     label.htmlFor = id;
    label.textContent=userinput;
    let cancel =document.createElement('i');
    cancel.classList.add('fas', 'fa-times');
    div.appendChild(checkinput);
    div.appendChild(label);
    div.appendChild(cancel);
    checkBoxes.appendChild(div);




 
checkinput.addEventListener('click', () => {
        if (checkinput.checked === true) {
          label.style.textDecoration = 'line-through';
        } 
        else {
          label.style.textDecoration = 'none';
        } 
      });











       });   





      }










    
      
      
