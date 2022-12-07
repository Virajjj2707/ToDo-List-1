var container=document.querySelector('.container');
var value1=document.querySelector('.Input-bar');
var add1=document.querySelector('.add');

class item{
    constructor(name)
    {
        this.create(name);
    }
    create(name)
    {
        var li=document.createElement('div');
        li.classList.add('item');
        var input=document.createElement('Input-bar');
        input.type="text";
        input.disabled=true;
        input.value1=name;
        input.classList.add('item_Input-bar');

        var remove=document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML='<i class="fas fa-trash"></i>';
        remove.addEventListener('click',()=>this.remove(li));

        container.appendChild(li);
        li.appendChild(input);
        li.appendChild(remove);

    }

    remove(li)
    {
        container.removeChild(li);
    }
}

add1.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(e.which==13){
        check()
    }
})

function check()
{
    if(value1.value!="")
    {
        new item(value1.value);
        value1.value="";
    }
}
function removeAll()
{
    document.querySelector('.container'),innerHTML="";
}