// Pegar todos os elementos do DOM
const $todoInput = document.getElementById('todoInput');
const $todoForm = document.getElementById('todoForm');
const $todoList = document.getElementById('todoLista');
const $todoToggleAll = document.getElementById('todoMarcarTodos');
const $todoRemoverTodos = document.getElementById('todoRemoverTodos');

/* EVENT LISTENERS */
// Evento do botão Adicionar To do
$todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Receber e tratar o input do usuário, retirando os espaços vazios antes e depois do texto
  const input = $todoInput.value.trim();
  
  // Somente guarda o valor se ele não for vazio
  if (input !== ''){
    createToDoItem(input);
  }
});

// Clique em item de lista
todoLista.addEventListener('click', handleListItemPress);
// Clique no Marcar todos
$todoToggleAll.addEventListener('click', checkAllItems);
// Clique no Remover itens
$todoRemoverTodos.addEventListener('click', removeAllItems);


/* FUNCTIONS */
function createToDoItem(input) {
  const item = document.createElement('li');
  const tarefa = document.createElement('span');
  const removeTarefa = document.createElement('button');

  removeTarefa.className = "todo__lista-remove";
  removeTarefa.innerHTML = "remover";
  item.className = "todo__lista";
  tarefa.innerHTML = input;
  
  item.appendChild(tarefa);
  item.appendChild(removeTarefa);
  
  // Insere os atributos e eventos de Drag and Drop
  item.setAttribute('draggable', true);
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  item.addEventListener('dragleave', handleDragLeave, false);
  item.addEventListener('drop', handleDrop, false);
  item.addEventListener('dragend', handleDragEnd, false);
  
  // Insere o item de lista na lista
  $todoList.appendChild(item);
  
  // Limpa/Reseta o input
  $todoInput.value = '';
}

function handleListItemPress(e) {
  const item = e.target;

  if (item.tagName == 'SPAN'){
    toggleChecked(item);
  }
  
  if (item.classList.contains('todo__lista-remove')) {
    removeListItem(item)
  }
}

function toggleChecked(item) {
  if (item.classList.contains('checked')) {
    item.classList.remove('checked'); 
  } else {
    item.classList.add('checked');
  }
}

function removeListItem(item){
  const removeItem = item.parentNode;
  $todoList.removeChild(removeItem);
}

function checkAllItems(){
  $todoList.childNodes.forEach((item) => {
    if (item.tagName == 'LI') {
      let tarefa = item.firstChild;
      tarefa.classList.add('checked');
    }
  })
}

function removeAllItems(){
  $todoList.innerHTML = '';
}

// Drag and Drop functions
let dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  e.preventDefault();

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
  e.stopPropagation();
  
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