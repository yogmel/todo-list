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
    tarefa.innerHTML = input;

    item.appendChild(tarefa);
    item.appendChild(removeTarefa);


    //tarefa.appendChild(removeTarefa);
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