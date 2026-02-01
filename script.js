const ol = document.getElementById('infi-list')
let count = 10
ol.addEventListener('scrollend',()=>{
 addLi()
 addLi() 
})

function addLi(){
  count++;
  let childLi = document.createElement('li')
  childLi.innerText=`Item ${count}`
  ol.appendChild(childLi)
}