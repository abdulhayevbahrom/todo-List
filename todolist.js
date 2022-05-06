
const taskInput = document.querySelector('#task__input');
const taskContainer = document.querySelector('.container');
const taskWrapper = document.querySelector('#task__wrapper');
const taskForm = document.querySelector('#task__form');
const taskDeleteAll = document.querySelector("#delete__all");
const taskAlert = document.querySelector('#task__alert');
const alertYes = document.querySelector(".task__yes");
const alertNo = document.querySelector(".task__no");
const taskSearch = document.querySelector('.task__searchInput');
const taskSort = document.querySelector("#task__select");

taskForm.addEventListener('submit', addTask);

function addTask(e){
    if(taskInput.value !== ''){
        let timeWithHour = new Date();

        const taskTime = document.createElement('p');
        const taskLi = document.createElement('li');//createElement yangi element yaratadi
        const taskIcon = document.createElement('i');
        const taskText = document.createElement('input');
        const taskComplete = document.createElement('i');
        const taskEdit = document.createElement('i');
        taskTime.innerHTML = `${timeWithHour.getHours()} : ${timeWithHour.getMinutes()}`;
        taskEdit.className = "far fa-edit";
        taskComplete.className = "far fa-check-circle";
        taskIcon.className = "fas fa-times";
        taskText.value = taskInput.value;
        taskText.setAttribute("readonly", "true")
        // taskLi.innerHTML = taskInput.value; //innerHTML element ni ichiga asosan text kiritish uchun
        taskLi.appendChild(taskText);
        taskLi.className = "task__item";
        taskLi.appendChild(taskTime)
        taskLi.appendChild(taskEdit)
        taskLi.appendChild(taskComplete);
        taskLi.appendChild(taskIcon);
        taskWrapper.appendChild(taskLi); //appendChild katta elementga kichkina js yaratilgan elementni joylaydi
        taskInput.value = '';
        e.preventDefault();

        taskEdit.addEventListener('click', editTask);

        function editTask(e) {
            if(taskText.hasAttribute("readonly")){
                taskText.removeAttribute("readonly");
                taskText.style = "border: 1px solid gray;"
            }
            else{
                taskText.setAttribute("readonly", "true");
                taskText.style = "border: 1px solid transparent;"
            }
        }
        // ----------------------

        taskDeleteAll.addEventListener('click', deleteAll);
        function deleteAll(){
            taskAlert.style.display = "flex";
            taskContainer.style.display = "none"
        }

        alertYes.addEventListener('click', deleteAllConfirm);
        function deleteAllConfirm(){
            taskAlert.style.display = "none";
            taskContainer.style.display = "flex";
            taskWrapper.innerHTML = ""; 
            // while(taskWrapper.firstChild){
            //     taskWrapper.removeChild(taskWrapper.firstChild)
            // }
        }

        alertNo.addEventListener('click', deleteAllNotConfirm);

        function deleteAllNotConfirm(){
            taskAlert.style.display = "none";
            taskContainer.style.display = "flex"
        }

        taskIcon.addEventListener('click', deleteTask);

        function deleteTask(e){
            if(e.target.parentElement.classList.contains("task__item")){
                e.target.parentElement.remove();
            }
        }

        taskSearch.addEventListener('keyup', searchTask);

        function searchTask(e){
            let searchedWord = taskSearch.value.toLowerCase();
            const allTaskWords = document.querySelectorAll('.task__item');
            allTaskWords.forEach(task => {
                if(task.firstChild.value.toLowerCase().indexOf(searchedWord) !== -1){
                    task.style.display = "flex";
                }
                else{
                    task.style.display = "none";
                }
            })
        }

        // taskSort.addEventListener('change', sortTask);

        // function sortTask(){
        //     if(taskSort.value === "alphabet"){

        //         const allTasks = document.querySelectorAll('.task__item');  
        //         let soorted = [];
        //         allTasks.forEach(t => {
        //             soorted.push(t.firstChild.value)
        //         })
        //         allTasks.map((k, index, array )=> {
        //             k.firstChild.value = soorted[index]
        //         })

        //     }
        //     else{
        //         console.log("Sorted by date")
        //     }
        // }

        taskComplete.addEventListener('click', completeTask);

        function completeTask(e) {
            e.target.parentElement.firstChild.classList.toggle("completed")
        }
        // setTimeout(() => {
        //     taskWrapper.innerHTML = "";
        // }, 5000) //3000 = 3s
    }
    else{
        alert("Ilimos majburiy maydonni to'ldiring");
    }
}


// function helle(){
//     // let rep = setInterval(() => {
//     //     alert("Every 4s")
//     // }, 4000);
//     return rep
// }

// let rep2 = helle()

// document.body.addEventListener('click', (rep2) => {
//     clearInterval(rep2)
// })
// setTimeout
// setInterval
// doing with local storage
//clientY
//clientX]



//======================================================



