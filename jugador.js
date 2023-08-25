//1 es piedra, 2 es papel, 3 es tijera
        

        function aleatorio(min, max){
            return Math.floor(Math.random() * (max - min +1) +min);
        }

        function eleccion(jugada){
            let resultado = "";
             if(jugada == 1) {
                resultado = "Piedra 🥌";

            }else if (jugador == 2) {
                resultado = "Papel 📃";

            }else if (jugador == 3){
                resultado = "Tijera ✂";

            }else {
                resultado = "MAL ELEGIDO";
            }
            return resultado;
        }

        let jugador = 0;
        let min = 1;
        let = 3;
        let pc= aleatorio(1,3)

        jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
        //alert("Elegiste " + jugador);

        alert("Pc elige " + eleccion(pc));
        alert ("Tu eliges " + eleccion(jugador))
        

        //COMBATE
        if(pc == jugador) {
            alert("Empate")

        }else if(jugador == 1 && pc == 3){
            alert("Ganaste");

        }else if(jugador == 2 && pc == 1) {
            alert("Ganaste");

         }else if(jugador == 3 && pc == 2) {
            alert("Ganaste");
            
        }else {
            alert("Perdiste");
        }