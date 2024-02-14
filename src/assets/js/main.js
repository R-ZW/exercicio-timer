function main() {
    var hora = 0;
    var minuto = 0;
    var segundo = 1;

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    iniciar.addEventListener('click', 
        function(event){
            const timer = setInterval 
            (
                function() {
                    relogio.style.color = 'black';

                    horaRelogio = zeroAEsquerda(hora);
                    minutoRelogio = zeroAEsquerda(minuto);
                    segundoRelogio = zeroAEsquerda(segundo);

                    relogio.innerHTML = `${horaRelogio}:${minutoRelogio}:${segundoRelogio}`

                    segundo++;

                    if(segundo === 60) {
                        segundo = 0;
                        minuto++;
                    }
                    if(minuto === 60) {
                        minuto = 0;
                        hora++;
                    }

                }, 1000
            )

            /**
             * o listener do pausar deve estar aninhado ao do iniciar
             * para que seja possível utilizar o clearInterval com a 
             * variável do timer, que só existe dentro desse escopo.
             * E como as variáveis que guardam o tempo são de escopo global, 
             * não se faz necessário salvá-las, caso não sejam
             * resetadas.
             */
            pausar.addEventListener('click', 
                function(event){
                    clearInterval(timer);
                    relogio.style.color = '#440159';
                }
            )

            // o mesmo também se aplica ao listener do zerar
            zerar.addEventListener('click', 
                function(event){
                    clearInterval(timer);
                    segundo = 1;
                    minuto = 0;
                    hora = 0;

                    relogio.style.color = 'red';
                    relogio.innerHTML = `00:00:00`
                   
                }
            )
        }
    )
}

function zeroAEsquerda(numero) {return numero<10 ? `0${numero}` : `${numero}`} 

main();