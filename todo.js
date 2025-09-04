document.getElementById('plus-btn').addEventListener('click',addTodo);

const todo = JSON.parse(localStorage.getItem('todos')) || [];

const doneTodo = JSON.parse(localStorage.getItem('done')) || []

renderTasks();
renderTasksDone();

function renderTasks(){
  let todoHTML = '';
  todo.forEach((todoTask)=>{
    const inputTodo = todoTask.inputTodo;
    const dateTodo = todoTask.dateTodo ;
    todoHTML += `<div class="task-todo">
        <div class="task">${inputTodo}</div>     
        <div class="task-date">${dateTodo}</div>
        <button class="tick-btn js-tick-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        </button>
        <button  class="garbage-btn js-garbage-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </button>
      </div>`
  });
  localStorage.setItem('todos',JSON.stringify(todo));
  document.querySelector('.task-todo-flex').innerHTML = todoHTML;
  
  document.querySelectorAll('.js-garbage-btn').forEach((garbageBtn , index)=>{
    garbageBtn.addEventListener('click',()=>{
      todo.splice(index,1);
      renderTasks();
    })
  });

  document.querySelectorAll('.js-tick-btn').forEach((tickBtn , index)=>{
    tickBtn.addEventListener('click',()=>{

      console.log(todo[index].inputTodo);
      doneTodo.push(todo[index].inputTodo);
      todo.splice(index,1);
      renderTasks();
      renderTasksDone();
    })
  });
  return todoHTML;
}

function renderTasksDone(){
  let doneHTML = '';
  doneTodo.forEach((done)=>{
    doneHTML += `<div class="tasks-done-menu">
          <p><s>${done}</s></p>
          <button class="js-garbage-btn-done">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
          </button>
        </div>`
  });

  document.querySelector('.tasks-done').innerHTML = doneHTML;

  document.querySelectorAll('.js-garbage-btn-done').forEach((garbage , index)=>{
    garbage.addEventListener('click' ,()=>{
      doneTodo.splice(index,1);
      renderTasksDone();
    })
  })
  
  localStorage.setItem('done',JSON.stringify(doneTodo));
}

function addTodo(){
  const inputElement = document.getElementById('input-todo');
  const dateElement = document.getElementById('date-todo');

  const inputTodo = inputElement.value;
  const dateTodo = dateElement.value;

  if(inputTodo === ''){
    alert('add your task first');
    return ;
  }
  todo.push({
    inputTodo,
    dateTodo
  });
  inputElement.value = '';
  dateElement.value = '';

  console.log(todo);
  renderTasks();
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".tasks-done-flex button");
  const tasksDoneFlex = document.querySelector(".tasks-done-flex");
  const tasksDone = document.querySelector(".tasks-done");

  toggleBtn.addEventListener("click", () => {
    tasksDone.classList.toggle("close");
    tasksDoneFlex.classList.toggle("close");
  });
});






