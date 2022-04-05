(()=>{
    const title=document.querySelector("h1")
    function typeWritter(element){
        const arrayLetters=element.innerHTML.split("")
        element.innerHTML=""
        arrayLetters.forEach((letter,indice)=>{
            setTimeout(()=>{
                element.innerHTML+=letter
            },100*indice)
        })
    }
    typeWritter(title)



})()