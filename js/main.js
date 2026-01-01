let start = 0;
let end = 500;
let speed = 1;

const caunt_1 = document.getElementById("caunt_1");
// const caunt_2 = document.getElementById("caunt_2");
// const caunt_3 = document.getElementById("caunt_3");

const interval = setInterval(()=>{
    if (start < end ) {
        start ++;
        caunt_1.innerHTML=start;
    }else{
        clearInterval(interval);
    }
}, speed);





