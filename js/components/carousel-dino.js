(() => {
    const $carouselDino = document.querySelector('.carousel-dino');

    $carouselDino.addEventListener('click', ({target}) => {
        target.parentNode.classList.contains('-left') && clickLeft();
        target.parentNode.classList.contains('-right') && clickRight();
    })

    function clickLeft() {

        let $left = $carouselDino.querySelector('.-left');
        let $center = $carouselDino.querySelector('.-center');
        let $right = $carouselDino.querySelector('.-right');

        const id = parseInt($left.getAttribute('data-id'));
        const nextId = id == 0 ? 14 : id - 1;
        console.log('ESQUERDA',nextId);

        $left.classList.remove('-left');
        $center.classList.remove('-center');
        $right.classList.remove('-right');

        $left.classList.add('-center');
        $center.classList.add('-right');

        $center = $left;
        $right = $right;

        $left = $carouselDino.querySelector(`[data-id="${nextId}"]`);
        $left.classList.add('-left');
    }

    function clickRight() {

        let $left = $carouselDino.querySelector('.-left');
        let $center = $carouselDino.querySelector('.-center');
        let $right = $carouselDino.querySelector('.-right');

        const id = parseInt($right.getAttribute('data-id'));
        const backId = id == 14 ? 0 : id + 1;
        console.log('DIREITA',backId);

        $right.classList.remove('-right');
        $center.classList.remove('-center');
        $left.classList.remove('-left');

        $right.classList.add('-center');
        $center.classList.add('-left');

        $center = $right;
        $left = $left;

        $right = $carouselDino.querySelector(`[data-id="${backId}"]`);
        $right.classList.add('-right');
    }

})();