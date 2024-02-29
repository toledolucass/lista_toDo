function addTask(){

    //Pego o valor do input
    let inputValue = document.querySelector(".input").value;

    if(inputValue){

        //Pega e clona o <li>
        const li = document.querySelector(".template")
        const template = li.cloneNode(true);

        //seleciona o <li> e adiciona o valor do input ao título do span
        template.querySelector(".task-title").innerHTML = inputValue;

        template.classList.remove("hide");

        //Pega a <ul> e adiciona a <li> nela
        const list = document.querySelector(".list");
        list.appendChild(template);

        //Limpar input
        document.querySelector(".input").value = "";


        //remover tarefa
        function removeTask(task){
            task.parentNode.remove()
        }

        template.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this.parentNode);
        })


        //Concluir tarefa
        function completeTask(task){
            task.parentNode.classList.toggle("done")
            if(task.parentNode.classList.contains("done")){
                const list = document.querySelector(".list");
                list.appendChild(task.parentNode);
            }else{
                firstElement = document.querySelector(".task-item-box");
                list.insertBefore(task.parentNode, firstElement);
            }
        }

        template.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this.parentNode);
        })

    }

}

const addBtn =  document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    
    e.preventDefault();
    addTask();

})