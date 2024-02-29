function addTask(){
    //3. Pego o valor do input.
    let inputValue =  document.querySelector(".input").value;

    if(inputValue){
        //4. Pego e clono o li
        const li = document.querySelector(".template");
        const template = li.cloneNode(true);

        //5 Dentro do li eu seleciono o span e coloco o seu textContent com o valor do input
        template.querySelector(".task-title").innerHTML = inputValue;

        //6. Pego a ul e adiciono a li
        const list = document.querySelector(".list");
        list.prepend(template);

        //7. Removo o valor de input
        document.querySelector(".input").value = "";

        //8. Removo a classe que esconde o display
        template.classList.remove("hide");



        //10. Aqui na função chega como parâmetro o pai do botão e a função remove o pai dele, no caso o li.
        function removeTask(task){
            task.parentNode.remove();
        }

        //9. Seleciono o botão de remover, adiciono um evento de click pra acionar a função de remover tarefa
        template.querySelector(".remove-btn").addEventListener("click", function(){
            //A função "seleciona"/remove (tem como parâmetro) o pai do botão
            //Usa-se o this, porque como será adicionado um novo li, não seria possível selecionar uma classe sua antes, então é usado o this como "referência" 
            removeTask(this.parentNode);
        })



        function completeTask(task){
            task.parentNode.classList.toggle("done");
            
            if(task.parentNode.classList.contains("done")){
                list.appendChild(template);
            }else{
                list.insertBefore(task.parentNode, li);
            }
        }

        template.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this.parentNode);
        })


        
    }
    
}

//1. Pego o botão.
const addBtn = document.querySelector("#add-btn");

//2. Adiciono evento pra quando o botão for clicado chamar a função de add tarefa.
addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
})