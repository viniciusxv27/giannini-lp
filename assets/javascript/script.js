var banner1 = document.getElementById('slide1');
var banner2 = document.getElementById('slide2');
var banner3 = document.getElementById('slide3');
var contador = 0;
var timeoutID;
/*

BANNER ROTATIVO BAIXO E GUITARRA


function alterarBanner() {
    if (contador <= 4) {
        banner1.checked = true;
        banner2.checked = false;
        banner3.checked = false;
    } else if (contador <= 8) {
        banner1.checked = false;
        banner2.checked = true;
        banner3.checked = false;
    } else if (contador <= 12) {
        banner1.checked = false;
        banner2.checked = false;
        banner3.checked = true;
    } else {
        contador = 0;
    }

    contador++;
    timeoutID = setTimeout(alterarBanner, 1000);
}

alterarBanner();

function reiniciarContador(tempo) {
    contador = tempo;
}

function proximoBanner() {
    if (banner1.checked == true) {
        banner1.checked = false;
        banner2.checked = true;
        banner3.checked = false;
        reiniciarContador(5);
    } else if (banner2.checked == true) {
        banner1.checked = false;
        banner2.checked = false;
        banner3.checked = true;
        reiniciarContador(9);
    } else if (banner3.checked == true) {
        banner1.checked = true;
        banner2.checked = false;
        banner3.checked = false;
        reiniciarContador(0);
    }
}


function bannerAnterior() {
    if (banner1.checked == true) {
        banner1.checked = false;
        banner2.checked = false;
        banner3.checked = true;
        reiniciarContador(9);
    } else if (banner2.checked == true) {
        banner1.checked = true;
        banner2.checked = false;
        banner3.checked = false;
        reiniciarContador(0);
    } else if (banner3.checked == true) {
        banner1.checked = false;
        banner2.checked = true;
        banner3.checked = false;
        reiniciarContador(5);
    }
} */


document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrarPopup1 = document.getElementById("mostrarPopup1");
    const popup1 = document.getElementById("meuPopup1");
    const botaoFecharPopup1 = document.getElementById("fecharPopup1");

    botaoMostrarPopup1.addEventListener("click", function () {
        popup1.style.display = "flex";
    });

    botaoFecharPopup1.addEventListener("click", function () {
        popup1.style.display = "none";
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrarPopup2 = document.getElementById("mostrarPopup2");
    const popup2 = document.getElementById("meuPopup2");
    const botaoFecharPopup2 = document.getElementById("fecharPopup2");

    botaoMostrarPopup2.addEventListener("click", function () {
        popup2.style.display = "flex";
    });

    botaoFecharPopup2.addEventListener("click", function () {
        popup2.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrarPopup3 = document.getElementById("mostrarPopup3");
    const popup3 = document.getElementById("meuPopup3");
    const botaoFecharPopup3 = document.getElementById("fecharPopup3");

    botaoMostrarPopup3.addEventListener("click", function () {
        popup3.style.display = "flex";
    });

    botaoFecharPopup3.addEventListener("click", function () {
        popup3.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrarPopup4 = document.getElementById("mostrarPopup4");
    const popup4 = document.getElementById("meuPopup4");
    const botaoFecharPopup4 = document.getElementById("fecharPopup4");

    botaoMostrarPopup4.addEventListener("click", function () {
        popup4.style.display = "flex";
    });

    botaoFecharPopup4.addEventListener("click", function () {
        popup4.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrarPopup5 = document.getElementById("mostrarPopup5");
    const popup5 = document.getElementById("meuPopup5");
    const botaoFecharPopup5 = document.getElementById("fecharPopup5");

    botaoMostrarPopup5.addEventListener("click", function () {
        popup5.style.display = "flex";
    });

    botaoFecharPopup5.addEventListener("click", function () {
        popup5.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrarPopup6 = document.getElementById("mostrarPopup6");
    const popup6 = document.getElementById("meuPopup6");
    const botaoFecharPopup6 = document.getElementById("fecharPopup6");

    botaoMostrarPopup6.addEventListener("click", function () {
        popup6.style.display = "flex";
    });

    botaoFecharPopup6.addEventListener("click", function () {
        popup6.style.display = "none";
    });
});

//Carrosel principal
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".images");
    const images = container.querySelectorAll("img");
    const itemWidth = images[0].clientWidth + 20;
    const numVisibleItems = 3;

    let currentIndex = 0;

    function translateCarousel() {
        const translateX = - currentIndex * itemWidth;
        container.style.transform = `translateX(${translateX}px)`;
    }

    function autoAdvanceCarousel() {
        setInterval(function () {
            if (currentIndex < images.length - numVisibleItems) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            translateCarousel();
        }, 3000);
    }

    autoAdvanceCarousel();
});


// Galeria de Imagens
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
    let interval;

    nextButton.addEventListener("click", function () {
        if (currentIndex < container.children.length - 1) {
            currentIndex++;
            translateCarousel();
        } else {
            currentIndex = 0;
            translateCarousel();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            translateCarousel();
        } else {
            currentIndex = container.children.length - 1;
            translateCarousel();
        }
    });

    function translateCarousel() {
        const itemWidth = container.children[0].clientWidth;
        const translateX = -currentIndex * itemWidth;
        container.style.transform = `translateX(${translateX}px)`;
    }

    function autoAdvance() {
        interval = setInterval(function () {
            nextButton.click();
        }, 5000);
    }

    autoAdvance();

});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container2");
    const prevButton = document.querySelector(".prev2");
    const nextButton = document.querySelector(".next2");
    let currentIndex = 0;
    let interval;

    nextButton.addEventListener("click", function () {
        if (currentIndex < container.children.length - 1) {
            currentIndex++;
            translateCarousel();
        } else {
            currentIndex = 0;
            translateCarousel();
        }
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            translateCarousel();
        } else {
            currentIndex = container.children.length - 1;
            translateCarousel();
        }
    });

    function translateCarousel() {
        const itemWidth = container.children[0].clientWidth;
        const translateX = -currentIndex * itemWidth  ;
        container.style.transform = `translateX(${translateX}px)`;
    }

    function autoAdvance() {
        interval = setInterval(function () {
            nextButton.click();
        }, 5000);
    }

    autoAdvance();
});


guitarrasAtivado = true;
baixosAtivado = false;

guitarrasDiv = document.getElementById('guitarras');
baixosDiv = document.getElementById('baixos');

guitarrasButton = document.getElementById('guitarrasButton');
baixosButton = document.getElementById('baixosButton');

function verBaixos() {
    guitarrasAtivado = false;
    baixosAtivado = true;
    guitarrasDiv.style.display = "none";
    baixosDiv.style.display = "flex";
    guitarrasButton.style.textDecoration = "none";
    baixosButton.style.textDecoration = "underline";
    guitarrasButton.style.fontWeight = "400"; 
    baixosButton.style.fontWeight = "600";
    baixo1();
}

function verGuitarras() {
    baixosAtivado = false;
    guitarrasAtivado = true;
    baixosDiv.style.display = "none";
    guitarrasDiv.style.display = "flex";
    baixosButton.style.textDecoration = "none";
    guitarrasButton.style.textDecoration = "underline"; 
    baixosButton.style.fontWeight = "400";
    guitarrasButton.style.fontWeight = "600";
    guitarra1();
}