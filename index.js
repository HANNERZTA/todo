const btnActive= document.querySelector('#btn');
btnActive.addEventListener('click',()=>{
    document.body.classList.toggle('oscuro');
})

document.getElementById('btn').addEventListener('click', function (){
    console.log(document);
    var element= document.getElementById('imgBtn');
    if (element.classList.contains('fa-moon')){
        element.classList.remove('fa-moon');
        element.classList.add('fa-sun');
    }else{
        element.classList.remove('fa-sun');
        element.classList.add('fa-moon');
    }


})

const inputs = document.querySelector("input");
const ul= document.querySelector("ul"); 
inputs.addEventListener('keydown', function(event){
    if(event.key==='Enter')
    {
        myFunction();
    }
});

function myFunction()
{
    
    const texto = inputs.value;
    if(texto !== '')
    {
        console.log(texto);
        const li = document.createElement('li');
        const p= document.createElement('p');
        p.className="con";
        p.textContent = texto;
        li.appendChild(p);
        li.appendChild(EliminarTarea());
        li.appendChild(TacharTarea());
        ul.appendChild(li);
        inputs.value="";
    }
    

}
function EliminarTarea()
{
    const BtnElimnar= document.createElement("button");
    BtnElimnar.textContent="X";
    BtnElimnar.className="btn-eliminar";
    BtnElimnar.addEventListener("click",(e) =>{
        const item = e.target.parentElement;
        ul.removeChild(item);

    });
    return BtnElimnar;
}
function TacharTarea()
{
    const Opn= document.createElement("button");
    const icon= document.createElement("i");
    var tacha = document.getElementsByClassName('con');
    console.log(tacha);
    icon.className="fa-solid sin";
    Opn.className="option";
    Opn.appendChild(icon);
    Opn.addEventListener("click",(e) =>{
        if(Opn.classList.contains('option')){
            Opn.classList.remove('option');
            Opn.classList.add('select');
            icon.classList.remove('sin');
            icon.classList.add('fa-check');
            
        }else{
            Opn.classList.remove('select');
            Opn.classList.add('option');
            icon.classList.remove('fa-check');
            icon.classList.add('sin');
            
        }
        if(Opn.classList.contains('fa-check'))
        {
            tachar();
        }

    });
    return Opn;
}
function tachar()
{
   
        const tacharitem = document.querySelector('.con');
        if(tacharitem.classList.contains('con')){
            tacharitem.classList.remove('con');
            tacharitem.classList.add('sin');
        }else{
            tacharitem.classList.remove('sin');
            tacharitem.classList.add('con');
        }
    return tacharitem;
}