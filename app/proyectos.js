
let retraso = 0.4;
$terjetaProyecto = document.querySelectorAll(".tarjeta-proyecto");

$terjetaProyecto.forEach(el => {
    el.style.animationDelay = retraso + "s";
    retraso += 0.2;
    setTimeout(()=>{
        el.style.opacity = 1;
    }, retraso*1000 )
});
