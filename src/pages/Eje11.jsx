import CardBox from '../components/CardBox'

const Eje010 = () => {
  return (
    <div>
      <h1>Ejercicio 011</h1>
      <img class="img-collapse" src="/src/assets/screen/11.png"></img>
      
      <p>Añade las clases adecuadas de tailwind para:</p>
      <p>El primer div se escale a la mitad cuando pases el cursor por encima</p>
      <p>El segundo div se escale al doble cuando pases el cursor por encima</p>
      <p>El tercer div rotará 45 grados a la derecha cuando pases el cursor por encima. El punto de pivote de rotación será el centro.</p>
      <p>El cuarto div rotará 45 grados a la derecha cuando pases el cursor por encima. El punto de pivote de rotación será la esquina superior izquierda</p>
      <p>El quinto div se moverá 3rem (48px) hacia arriba en el eje de las Y cuando pases el cursor por encima</p>
      <p>El sexto div se sesgará (skew), tanto en el eje de las X como el de las Y, 12 grados cuando pases el cursor por encima</p>
      <p>El septimo div se le aplicará opacidad del 80% cuando pases el cursor por encima</p>
      <p>Pista: https://tailwindcss.com/docs/scale</p>
      <p>Pista: https://tailwindcss.com/docs/rotate</p>
      <p>Pista: https://tailwindcss.com/docs/transform-origin</p>
      <p>Pista: https://tailwindcss.com/docs/translate</p>
      <p>Pista: https://tailwindcss.com/docs/skew</p>

      <div className="flex gap-3">
        <div className=" button-blue hover:scale-50">
          uno
        </div>
        <div className=" button-blue hover:scale-150">
          dos
        </div>
        <div className=" button-blue hover:rotate-45">
          tres
        </div>
        <div className=" button-blue hover:rotate-45 origin-top-left">
          cuatro
        </div>
        <div className=" button-blue hover:-translate-y-12">
          cinco
        </div>
        <div className=" button-blue hover:skew-x-12 hover:skew-y-12">
          seis
        </div>
        <div className=" button-blue hover:opacity-80">
          siete
        </div>
      </div>
    </div>
  )
}

export default Eje010
