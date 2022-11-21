const counter = document.querySelectorAll(".counter");

counter.forEach(num=>{
    num.innerText = '0';

    const updateCounter = () =>{
        const target = +num.getAttribute('data-target');
        console.log(typeof target, target);
        const c = +num.innerText;
        console.log(c);
        const increment = target / 200;
        console.log(increment);
        if(c < target){
            num.innerText = `${Math.ceil(c + increment)}`;
            setInterval(updateCounter,1)
        }
    }

    updateCounter();
})