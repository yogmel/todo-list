console.log('app init');

const $todoInput = document.getElementById('todoInput');
const $todoForm = document.getElementById('todoForm');
const $todoList = document.getElementById('todoLista');

const $todoToggleAll = document.getElementById('todoMarcarTodos');
const $todoRemoverTodos = document.getElementById('todoRemoverTodos');

$todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let input = $todoInput.value.trim();
  
  if(input !== ''){
    let item = document.createElement('li');
    let tarefa = document.createElement('span');
    let removeTarefa = document.createElement('button');

    removeTarefa.className = "todo__lista-remove";
    removeTarefa.innerHTML = "remover";
    item.className = "todo__lista";
    item.setAttribute('draggable', true);
    tarefa.innerHTML = input;
    
    item.appendChild(tarefa);
    item.appendChild(removeTarefa);
    
    // insert event listeners for drag and drop
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
    
    $todoList.appendChild(item);
    
    $todoItem = document.querySelectorAll('.todo__lista');
    $todoInput.value = '';
  }
});


todoLista.addEventListener('click', toggleChecked);

function toggleChecked(e) {
  let item = e.target;

  if (item.tagName == 'SPAN'){
    if (item.classList.contains('checked')) {
      item.classList.remove('checked'); 
    } else {
      item.classList.add('checked');
    }
  }
  
  if (item.classList.contains('todo__lista-remove')) {
    let removeItem = item.parentNode;
    $todoList.removeChild(removeItem);
  }
}


$todoToggleAll.addEventListener('click', () => {
  console.log('aloka')
  $todoList.childNodes.forEach((item) => {
    if (item.tagName == 'LI') {
      let tarefa = item.firstChild;
      tarefa.classList.add('checked');
    }
  })
});

$todoRemoverTodos.addEventListener('click', () => {
  $todoList.innerHTML = '';
})



// Drag and Drop event handlers
let dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move'; 
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {

    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  let items = document.querySelectorAll('.todo__lista');

  items.forEach((item) => {
    item.classList.remove('over');
    item.style.opacity = '1';
  });
}