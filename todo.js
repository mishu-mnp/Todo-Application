var ul = document.getElementById('list');

var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeall');
removeAllButton.addEventListener('click', removeAllItem);



// Add Todo 
function addItem() {
    // console.log('Add Button Clicked');
    var input = document.getElementById('todo');
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)
    

    if (item === ''){
        alert('First enter your Todo')
    } else {
        // create li
        li = document.createElement('li')

        // create checkbox
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.setAttribute('id', 'check')


        // create label
        var label = document.createElement('label')
        label.setAttribute('for', 'check')

        // Add this element on Web Page
        ul.appendChild(label)
        li.appendChild(checkBox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

        input.value = ''

    }
}


// Remove Todo
function removeItem() {
    // console.log('Remove Button Clicked');
    li = ul.children
    // console.log(li.length)
    
    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element)
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}


// Remove All Todos
function removeAllItem() { 
    document.getElementById('list').innerHTML = '';
}


  