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
    
    $todoList.appendChild(item);

    // item.setAttribute('ondragstart', 'dragStartHandler(e)');
    // item.setAttribute('ondragover', 'dragOverHandler(e)');
    // item.setAttribute('ondrop', 'dragSDropHandler(e)');
    
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

$todoList.addEventListener('dragstart', (e) =>{
  console.log(e.target);
  dragStartHandler(e);
})

function dragStartHandler(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.innerHTML);
 ev.dropEffect = "move";
}

$todoList.addEventListener('ondragover', (e) =>{
  console.log('droping area', e.target);
})

$todoList.addEventListener('drop', (e) => {
  console.log(e.target);
})


// Drag and Drop event handlers
function dragStartHandler(e){
  console.log(e.target);
}

function dragOverHandler(e){
  console.log(e.target);
}

function dragDropHandler(e){
  console.log(e.target);
}