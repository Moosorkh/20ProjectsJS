const test = document.getElementById("test");
const myInput = document.getElementById("myInput");
const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const myList = document.getElementById("myList");
const restart = document.getElementById("restart");

myBtn.addEventListener("click", () => {
  const splitLines = myText.value.split(/\r?\n/);

  for(let i = 0; i < splitLines.length; i++) {
    if(splitLines[i] !== ""){
        const myDiv = document.createElement("div");
        const item = document.createElement("li");
        const mySpan = document.createElement("span");
        mySpan.textContent = ' copied to clipboard! ';
        mySpan.setAttribute('id', 'tooltip');
        item.innerHTML = splitLines[i];
        myList.appendChild(myDiv);
        myDiv.appendChild(item);
        myDiv.appendChild(mySpan);
    }
  }
  myText.value = "";
  copyEl();
});

restart.addEventListener('click', ()=>{window.location.reload()})

function copyEl(){

        myList.childNodes.forEach((item) => {
            
            item.firstChild.addEventListener("click", () => {
              navigator.clipboard.writeText(item.firstChild.textContent);
              //The <li>
              item.firstChild.classList.add('copied');
              //The span
              item.lastChild.classList.add("clicked");
              //making the tooltip disappear
              item.lastChild.setAttribute('id', '');
              item.addEventListener('mouseout', ()=>{
             item.lastChild.setAttribute('id', 'tooltip');
             localStorage.setItem('1', item.textContent)
              })
            });
    });}

/*
sdfsdf
sdfasa
trertet
fsdffs
jyjhjhj
tyrtsdfs

test messaging
*/
