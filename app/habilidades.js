$htmlInfo = document.querySelector(".html")
$selectimgHtml = document.querySelector(".html-select")
$iconsSelect = document.querySelectorAll(".icons-container img")
$selectExplicacion = document.querySelectorAll(".explicacion")

// selectores de iconos
$selectimgCss = document.querySelector(".css-select")
$selectimgJs = document.querySelector(".js-select")
$selectimgGit = document.querySelector(".git-select")
$selectimgGithub = document.querySelector(".github-select")
$selectimgVscode = document.querySelector(".vscode-select")
$selectimgPhp = document.querySelector(".php-select")
$selectimgConsola = document.querySelector(".consola-select")
$selectimgBootstrap = document.querySelector(".bootstrap-select")

$selectimgHtml.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".html").classList.remove("display-none")
});

$selectimgCss.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".css").classList.remove("display-none")
});

$selectimgJs.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".js").classList.remove("display-none")
});

$selectimgGit.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".git").classList.remove("display-none")
});

$selectimgGithub.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".github").classList.remove("display-none")
});

$selectimgVscode.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".vscode").classList.remove("display-none")
});

$selectimgPhp.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".php").classList.remove("display-none")
});

$selectimgConsola.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".comand-line").classList.remove("display-none")
});

$selectimgBootstrap.addEventListener( "click", () => {
    $selectExplicacion.forEach(el => {
        el.classList.add("display-none")
    })
    document.querySelector(".bootstrap").classList.remove("display-none")
});


   
   
   /*
   //hacer funcion que verifique si ese elemento tiene una display none

   const $classVerify = () => {
        $selectExplicacion.forEach(el => {
            el.classList.contains("display-none");
            
        })
   }

   console.log($classVerify)
   
    $selectimgCss.addEventListener( "click", () => {
        if($classVerify == true){
        console.log("tumama")
        $cssInfo.classList.remove("display-none")

        $htmlInfo.classList.add("display-none")

        }
    });



*/
    retraso = .3;

    $iconsSelect.forEach(el => {
        el.style.animationDelay = retraso + "s";
        retraso += 0.1;
        setTimeout(()=>{
            el.style.opacity = 1;
        }, retraso*1000 )
    });