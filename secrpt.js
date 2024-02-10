let argin = document.querySelector('.arg-input')
let argbtn = document.querySelector('.arg-submit')
let arg = document.querySelector('.arg')
let argwinn = document.querySelector('.arg-winn')
// =======
let brgin = document.querySelector('.brg-input')
let brgbtn = document.querySelector('.brg-submit')
let brg = document.querySelector('.brg')
let brgwinn = document.querySelector('.brg-winn')


argbtn.addEventListener('click',function(){
    let arginvalu = argin.value
    if(arginvalu == ''){
        alert('please give me a number')
    }else{
        if(arginvalu < 10){
            arg.style.display= 'none'
            brg.style.display= 'block'
        }else{
            alert('Please enter a number larger than 10')
        }
    }
})


brgbtn.addEventListener('click',function(){
    let brginvalue = brgin.value
    let arginvalue = argin.value
    if(brginvalue == ''){
        alert('please give me a number')
    }else{
        if(brginvalue < 10){
            if(brginvalue == arginvalue){
                brgwinn.style.display = 'block'
                brgwinn.innerHTML=('Brazil is winner <i class="fa-solid fa-trophy"></i>')
            }else{
                brgwinn.style.display = 'block'
                brgwinn.innerHTML=('Argentina is winner <i class="fa-solid fa-trophy"></i>')
            }
        }else{
            alert('Please enter a number larger than 10')
        }
    }
})



console.log(brgwinn)