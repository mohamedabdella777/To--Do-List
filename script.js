
let input = document.querySelector('.input input');
let addBtn = document.querySelector('.input .btn');
let checkBoxes = document.querySelector('.check-boxes');

addBtn.addEventListener('click', () =>{
   let userinput=input.value.trim();
   if( userinput===''){
    return;
   }
   function create(){
    let div =document.createElement('div');
    div.classList.add('box');
    let checkinput=document.createElement('input');
    checkinput.type='checkbox';
    let id ="input" + Date.now();
      input.id=id;
    let label=document.createElement('label');
     label.htmlFor = id;
    label.textContent=userinput;
    let cancel =document.createElement('i');
    cancel.classList.add('fas', 'fa-times');
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(cancel);
    checkBoxes.appendChild(div);

      cancel.addEventListener('click', () => {
      div.remove();
      
           
    });

     input.value ='';
   }
   

create();

});




