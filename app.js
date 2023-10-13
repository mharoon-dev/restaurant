// for navbar 
let nav = document.querySelector(".navigation-warp")
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
        
    } else {
        nav.classList.remove("scroll-on");
    }
}






// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current
            if (current == end) {
                clearInterval(timer);
            }
        }, step );
    }
    counter("counter1", 0, 7110, 3000);
    counter("counter2", 0, 7110, 3000);
    counter("counter3", 0, 7110, 3000);
    counter("counter4", 0, 7110, 3000);
});