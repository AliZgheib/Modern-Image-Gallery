document.addEventListener('DOMContentLoaded',()=>{



const current=document.querySelector('.current');
const first=document.querySelector('.first');

const arr=document.querySelectorAll('.rest');
first.style.opacity='0.5'

arr.forEach(Element=>{
    Element.addEventListener('click',start);
})

function start(e){


    
        //resetting opacity to 1
        arr.forEach(Element=>{Element.style.opacity="1"})
       


        current.classList.add('animate');

        //set the main image
        current.setAttribute('src',e.target.getAttribute('src'));

       //setting opacity of clicked image to 0.5
        e.target.style.opacity='0.5';
removeanimation().then(()=>{





});
  
}

function removeanimation(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(current.className.includes('animate')){
                current.classList.remove('animate');
                resolve();
            }

        },500);


    })
}

});