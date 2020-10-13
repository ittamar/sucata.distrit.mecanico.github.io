

class Aja{
 
 constructor(){     
    this.deleteSucata();
    //this.getTabelaSucata();
    /* pegas ascetorias da sucata */
    this.getCategoria();
    
   
 }
 
 /* Deletar sucata */
 deleteSucata(){
    //console.log(this.tabelaSucata); 
     let btDeleteSucata = document.querySelectorAll('#bt-delete-sucata');
     let tabelaSucata = document.querySelector('#tabela-sucatas');
     btDeleteSucata.forEach((buttao)=>{
         buttao.addEventListener('click',(event)=>{
           let ajax = new XMLHttpRequest();
            ajax.open('DELETE','remove',true);
            ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            ajax.onload = function(){
                if (this.readyState === 4 && this.status === 200) {                    
                    window.location.onload();
                  }
            }
            ajax.send(
                "id="+buttao.value 
              );

         });
     });
 }

 getTabelaSucata(){    
   let tabelaSucata = document.querySelector('#tabela-sucatas');
    let ajax = new XMLHttpRequest();
     ajax.open('GET','tabela-sucata', true);
     ajax.onreadystatechange = function(){
        tabelaSucata.innerHTML = ajax.responseText;     

    } 
    /* let btDeleteSucata = document.querySelectorAll('#bt-delete-sucata');
    btDeleteSucata.forEach((buttao)=>{
        buttao.addEventListener('click',event=>{
        let ajax = new XMLHttpRequest();
        ajax.open('POST','/remove',true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200) {
                tabelaSucata.innerHTML = ajax.responseText; 
                console.log(tabelaSucata);
                
              }
        }
        ajax.send(
            "id="+buttao.value 
          );
        });
    });
    */
     ajax.send();
 }

 getCategoria(){
     let option = document.querySelectorAll('.option-peca');
     
     option.forEach((element)=>{
           element.addEventListener('click',()=>{
                fetch('/add', {
                method: 'POST',
                mode: 'cors', // pode ser cors ou basic(default)
                redirect: 'follow',
                headers: new Headers({
                  'Content-Type': 'application/json'
                }),
                body:JSON.stringify({
                  /* Envia o nome da sucata para o servidor */
                  name_sucata: element.textContent
                  
                })
              }).then(function(response) {
                     response.json().then(function(data){
                 
                  let selectCatego = document.querySelector("#select-catego");
                  /* remove os ficlhos do select do html */
                   if(selectCatego.lastChild){
                    while(selectCatego.length >1){
                      selectCatego.removeChild(selectCatego.lastChild);
                    }
                  }
                   /* coloca as categorias no select */
                  for(let i=0;i<data.length;i++){
                     let elementOption = document.createElement("option");            
                     selectCatego.appendChild(elementOption);
                    elementOption.textContent=data[i].categorias; 
                    elementOption.value=data[i].idTable_categoria;
                    } 
                   

                })
                // tratar a response
              }).catch((err)=>{
                console.log(err);
              });
                       });
     });
    
 }

 

 }
 

