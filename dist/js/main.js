//splash
let intro = document.querySelector('.intro');
let fullText = document.querySelector('.splash-header');
let textSpan = document.querySelectorAll('.splash-text');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{

        textSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('splash-text-active');
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{
            textSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('splash-text-active');
                    span.classList.add('splash-text-fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)

    })
})
