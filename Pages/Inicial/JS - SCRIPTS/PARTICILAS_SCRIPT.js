        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50, /* Número de partículas */
                    density: {
                        enable: true,
                        value_area: 800 /* Área donde se distribuyen las partículas */
                    }
                },
                color: {
                    value: "#ffffff" /* Color de las partículas */
                },
                shape: {
                    type: "circle", /* Forma de las partículas */
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.7, /* Opacidad de las partículas */
                    random: false
                },
                size: {
                    value: 4, /* Tamaño de las partículas */
                    random: true
                },
                line_linked: {
                    enable: true, /* Conexión entre partículas */
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.5, /* Velocidad de movimiento */
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab" /* Interacción al pasar el cursor */
                    },
                    onclick: {
                        enable: true,
                        mode: "push" /* Interacción al hacer clic */
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
