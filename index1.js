const para=document.querySelector('p');
//console.log(para.textContent);
const addform=document.querySelector('.add');
const m=document.querySelector('.todos');
let s1=document.querySelector('.search input');
const template=(todo)=>{
    const html=` <li class="list-group-item d-flex justify-content-between">
    <span>${todo}</span>
    <i class="fa fa-trash" aria-hidden="true"></i>
</li>`;
m.innerHTML+=html;
};

addform.addEventListener('submit',(e)=>{
    e.preventDefault();
let todo=addform.listing.value.trim();
console.log(todo);
if(todo.length){
template(todo);
addform.reset();
}
})
var filterTodo=(p2)=>{
    
Array.from(m.children) 
.filter((val)=>{
return !val.textContent.toLowerCase().includes(p2);
})
.forEach(val=>{
    val.classList.add('filtered');
})
Array.from(m.children) 
.filter((val)=>{
return val.textContent.includes(p2);
})
.forEach(val=>{
    val.classList.remove('filtered');
})
}

//KEYUP 
s1.addEventListener('keyup',(e)=>{
    e.preventDefault();
    const t4=s1.value.toLowerCase().trim();
    filterTodo(t4);
})


// var arr=[10,20,30,40,50];
// var a1=arr.filter((v)=>{
// return v>20;
// })
// console.log(a1);
m.addEventListener('click',e=>{
    if(e.target.classList.contains('fa-trash')){
e.target.parentElement.remove();
console.log(e.target.parentElement);
    }
})







