const slidi = document.querySelector('.img-slide');
const back = document.querySelector('.left-caroussel-btn');
const container = document.querySelector('.grid-guitars');
const next = document.querySelector('.right-caroussel-btn');

next.addEventListener("click", () => {
    const slideWidth = slidi.clientWidth;
    container.scrollLeft += slideWidth;
});

back.addEventListener("click", () => {
    const slideWidth = slidi.clientWidth;
    container.scrollLeft -= slideWidth;
});

