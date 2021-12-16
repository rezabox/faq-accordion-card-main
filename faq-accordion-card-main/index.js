const click=document.querySelectorAll('.click img');
const header=document.querySelectorAll('.header p');
click.forEach(element => element.addEventListener('click',function(){
    element.classList.toggle('active'); 
  
}))
header.forEach(element => element.addEventListener('click',function(){
    element.classList.toggle('active');
}))

