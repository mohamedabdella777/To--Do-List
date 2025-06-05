// تحديد العناصر
const input = document.querySelector('.input input');
const addBtn = document.querySelector('.input .btn');
const checkBoxes = document.querySelector('.check-boxes');

// تحميل المهام من localStorage
window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToUI(task.text, task.completed));
};

// زر الإضافة
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === "") return;
  addTaskToUI(taskText,false);
  saveTask(taskText,false);
  input.value = "";
});

// إضافة مهمة إلى الواجهة
function addTaskToUI(text, completed) {
  const box = document.createElement('div');
  box.className = 'box';

  const checkbox = document.createElement('input');
  const taskId = "task_" + Date.now(); // ID فريد
  checkbox.type = 'checkbox';
  checkbox.id = taskId;
  checkbox.checked = completed;

  const label = document.createElement('label');
  label.setAttribute("for", taskId);
  label.textContent = text;

  const del = document.createElement('i');
  del.className = 'fas fa-times';

   checkbox.addEventListener('change', () => {
    if(checkbox.checked===true){
      label.style.textDecoration = "line-through";
    }else{
      label.style.textDecoration = "none";
    }
    updateLocalStorage();
  });

  del.addEventListener('click', () => {
    box.remove();
    updateLocalStorage();
  });

  box.appendChild(checkbox);
  box.appendChild(label);
  box.appendChild(del);
  checkBoxes.appendChild(box);
}

// حفظ المهمة في localStorage
function saveTask(text, completed) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, completed });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// تحديث المهام في التخزين
function updateLocalStorage() {
  const tasks = [];
  document.querySelectorAll('.box').forEach(box => {
    const text = box.querySelector('label').textContent;
    const completed = box.querySelector('input').checked;
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


