const textareaEl = document.querySelector(".textarea")
const totalEl = document.querySelector(".total-counter")
const remainingEl = document.querySelector(".remaining-counter")

textareaEl.addEventListener("keyup" , ()=>{
    updateCounter()
})

updateCounter();

function updateCounter(){
    totalEl.innerText = textareaEl.value.length
    remainingEl.innerText = textareaEl.getAttribute("maxlength")-textareaEl.value.length
}