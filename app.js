var list = document.getElementById("list");


function addTodo(){
    var todo_list = document.getElementById("todo-list");


    //create li tag with textnode
    var li = document.createElement('li')
    li.setAttribute = ("class","task")
    var liText = document.createTextNode(todo_list.value)
    li.appendChild(liText)

    //create delete button
    var dltBtn = document.createElement("button")
    var dltText = document.createTextNode("Delete")
    dltBtn.setAttribute("onclick","deleteItem(this)")
    dltBtn.className = "dltBtn"
    dltBtn.appendChild(dltText)


    //Create edit button
     var editBtn = document.createElement("button");
     var editText =document.createTextNode("Edit");
     editBtn.className = "editBtn"
     editBtn.setAttribute("onclick","editItem(this)")
     editBtn.appendChild(editText)



    li.appendChild(dltBtn)

    li.appendChild(editBtn)

    list.appendChild(li)

    todo_list.value = ""
    //console.log(li)
}


function deleteItem(e){

    e.parentNode.remove()
}




 function editItem(e){
     var val = prompt("Enter Updated Value" , e.parentNode.firstChild.nodeValue)
      


     e.parentNode.firstChild.nodeValue = val ;
 }



function deleteAll(){
    list.innerHTML = ""
}