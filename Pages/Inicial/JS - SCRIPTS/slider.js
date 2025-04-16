document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const products = Array.from(document.querySelectorAll('.product-item'));
    const productWidth = products[0].clientWidth + 20; // Ancho del producto + margen
    const totalProducts = products.length;
    let currentIndex = totalProducts; // Comienza en la copia del primer producto

    // Duplica los productos al inicio y al final para crear el efecto infinito
    products.forEach((product) => {
        const cloneStart = product.cloneNode(true);
        const cloneEnd = product.cloneNode(true);
        slider.appendChild(cloneEnd); // Agrega al final
        slider.insertBefore(cloneStart, slider.firstChild); // Agrega al inicio
    });

    // Ajusta el ancho del slider para incluir los clones
    slider.style.width = `${(totalProducts * 3) * productWidth}px`;

    // Posiciona el slider en el producto inicial (copia del primer producto)
    slider.style.transform = `translateX(-${currentIndex * productWidth}px)`;

    function updateSlider() {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * productWidth}px)`;
    }

    function moveRight() {
        currentIndex++;
        updateSlider();

        // Si llega al final de los productos reales, salta al inicio sin transición
        if (currentIndex >= totalProducts * 2) {
            setTimeout(() => {
                slider.style.transition = 'none';
                currentIndex = totalProducts; // Salta al inicio de los productos reales
                slider.style.transform = `translateX(-${currentIndex * productWidth}px)`;
            }, 500); // Espera a que termine la transición
        }
    }

    function moveLeft() {
        currentIndex--;
        updateSlider();

        // Si llega al inicio de los productos reales, salta al final sin transición
        if (currentIndex < totalProducts) {
            setTimeout(() => {
                slider.style.transition = 'none';
                currentIndex = totalProducts * 2 - 1; // Salta al final de los productos reales
                slider.style.transform = `translateX(-${currentIndex * productWidth}px)`;
            }, 500); // Espera a que termine la transición
        }
    }

    rightArrow.addEventListener('click', moveRight);
    leftArrow.addEventListener('click', moveLeft);

    // Inicia el slider en la posición correcta
    updateSlider();
});