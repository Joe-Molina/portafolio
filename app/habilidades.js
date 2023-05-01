$htmlInfo = document.querySelector(".html")
$selectimgHtml = document.querySelector(".html-select")
$iconsSelect = document.querySelectorAll(".icons-container img")

console.log($iconsSelect)

$cssInfo = document.querySelector(".css")
$selectimgCss = document.querySelector(".css-select")

   const $classVerify = $cssInfo.classList.contains("display-none");
   
    $selectimgCss.addEventListener( "click", () => {
        if($classVerify == true){
        console.log("tumama")
        $cssInfo.classList.remove("display-none")

        $htmlInfo.classList.add("display-none")

        }
    });

    $selectimgHtml.addEventListener( "click", () => {
        if($classVerify == true){
        console.log("tumama")
        $cssInfo.classList.add("display-none")

        $htmlInfo.classList.remove("display-none")

        }
    });
    retraso = .3;

    $iconsSelect.forEach(el => {
        el.style.animationDelay = retraso + "s";
        retraso += 0.1;
        setTimeout(()=>{
            el.style.opacity = 1;
        }, retraso*1000 )
    });