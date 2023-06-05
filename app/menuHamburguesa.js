
    const d = document;

    d.addEventListener("click", e => {

        if(e.target.matches('.panel-btn') || e.target.matches(`.panel-btn *`)){
            d.querySelector('.panel').classList.toggle("is-active")
            d.querySelector('.panel-btn').classList.toggle("is-active")
        }
    
        if(e.target.matches('.menu a')){
            d.querySelector('.panel').classList.remove("is-active")
            d.querySelector('.panel-btn').classList.remove("is-active")
        }
    })
    
