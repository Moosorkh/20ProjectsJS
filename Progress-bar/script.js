
const panels = document.querySelectorAll('.panel');
//console.log(panels[1]);
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}


window.onload = function(){
    let btn = document.getElementById('btn');
    btn.onclick = function hello(){
        for(let i = 0; i < 10; i++)
        alert(i);
    }
}