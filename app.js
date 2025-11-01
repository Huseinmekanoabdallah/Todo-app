const taskContainer = document.querySelector("#tasks")
const input_field = document.querySelector("#input");
const btn = document.querySelector(".add-btn");

const addContent = () => {

   if(input_field.value === ""){
        alert("Enter a task!")
   } else{
    const element = document.createElement('li');
    element.innerHTML = input_field.value;
    
    const button = document.createElement("span");
    button.innerHTML = `<i class="bi bi-trash3"></i>`;
    element.appendChild(button)

    taskContainer.appendChild(element)
    
    saveData()
}

   input_field.value = ""

}


taskContainer.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    } 
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    } 
    else if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove()
    }
    
    saveData()
})


const saveData = () => {
    localStorage.setItem("data",taskContainer.innerHTML)
}

const getData = () => {
    localStorage.getItem("data");
}
getData()



btn.addEventListener("click", addContent)