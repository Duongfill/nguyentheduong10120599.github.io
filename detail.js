const adressbtn = document.querySelector('#add-form')
adressbtn.addEventListener("click",function(){
    document.querySelector('.add-form').style.display ="flex"
})
const adressclose = document.querySelector('#add-close')
adressclose.addEventListener("click",function(){
    document.querySelector('.add-form').style.display ="none"
})