let menuVisible = false;



/* ---------------- Ocultar Mostrar menu ------------------------- */

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList=""
        menuVisible = false;
    }else{
        document.getElementById('nav').classList="responsive";
        menuVisible = true;
    }
}

 /* -------------- Ocultar menu cuando hago click ---------------- */
function seleccionar (){
    document.getElementById('nav').classList=""
    menuVisible = false;
}

/* ------------------ Animacion de skills ----------------------- */

function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('javascript')
        habilidades[1].classList.add('html')
        habilidades[2].classList.add('css')
        habilidades[3].classList.add('nodejs')
        habilidades[4].classList.add('mongodb')
        habilidades[5].classList.add('reactjs')
        habilidades[6].classList.add('figma')
        habilidades[7].classList.add('gestionDeEmociones')
        habilidades[8].classList.add('comunicacion')
        habilidades[9].classList.add('trabajoEnEquipo')
        habilidades[10].classList.add('creatividad')
        habilidades[11].classList.add('dedicacion')
        habilidades[12].classList.add('organizacionDelTiempo')
        habilidades[13].classList.add('tecnicasDeEstudio')
    }
}

/* ---------------- Detecto el scrolling para animacion---------------- */

window.onscroll = function(){
    efectoHabilidades();
} 