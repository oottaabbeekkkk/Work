let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");


a1.addEventListener('click', () => {
        box1.classList.add("new1")
        box2.classList.remove("new1")
        box3.classList.remove("new1")
        box4.classList.remove("new1")

})



a2.addEventListener('click', () => {
    box1.classList.remove("new1")
    box2.classList.add("new1")
    box3.classList.remove("new1")
    box4.classList.remove("new1")
})

a3.addEventListener('click', () => {
    box1.classList.remove("new1")
    box2.classList.remove("new1")
    box3.classList.add("new1")
    box4.classList.remove("new1")
})

a4.addEventListener('click', () => {
    box1.classList.remove("new1")
    box2.classList.remove("new1")
    box3.classList.remove("new1")
    box4.classList.add("new1")
})