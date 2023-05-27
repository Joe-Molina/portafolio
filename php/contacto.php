<?php include("./estructuraBasica.php") ?>

<h2 class="contacto-titulo">Formas de Contacto</h2>
    <section class="contacto-container">
        <article class="form-container">
            <form action="https://formsubmit.co/joedodaniljr12345@gmail.com" method="POST">

                <h2 class ="form-title">Enviame un Email</h2>

                <label for="" class="label-nombre">
                    <span>Nombre:</span>
                    <input type="text" name="name">
                </label>

                <label for="" class="label-email">
                    <span>Correo:</span>
                    <input type="email" name="email">
                </label>
                
                <span>cuales son tus necesidades?</span>

                <div class="necesidades-container">

                    <label for="">
                        <input type="radio" name="necesidades" id="">
                        <span>Aplicacion web</span>
                    </label>

                    <label for="">
                        <input type="radio" name="necesidades" id="">
                        <span>Sitio web</span>
                    </label>
                    
                    <label for="">
                        <input type="radio" name="necesidades" id="">
                        <span>Otro</span>
                    </label>

                </div>

                <label for="" class="textarea">
                    <textarea name="textArea" id="" cols="30" rows="10"></textarea>
                </label>

                <input type="submit" class="btn-enviar" value="enviar">
    
            </form>
        </article>

        <article class="tarjetas-contacto">
            <div class="contacto-tarjeta">
                <img src="../assets/iconosContacto/ws.svg" alt="">
                <a href="">+58 412-4609637</a>
            </div>
            <div class="contacto-tarjeta">
                <img src="../assets/iconosContacto/gmail.svg" alt="">
                <a href="">joedodaniljr123@gmail.com</a>
            </div>
            <div class="contacto-tarjeta">
                <img src="../assets/iconosContacto/insta.svg" alt="">
                <a href="">@joe.molina01</a>
            </div>
        </article>

    </section>

<?php include("./footer.php") ?>