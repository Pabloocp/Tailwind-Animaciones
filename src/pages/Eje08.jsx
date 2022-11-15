
const Eje08 = () => {
  return (
    <div>
      <h1>Ejercicio 08</h1>
      <img class="img-collapse" src="/src/assets/screen/08.png"></img>
      
      <div className="mb-4">
        <p>Da estilo al siguiente botón:</p>
        <p>Tendrá un padding de 3 (0.75rem)</p>
        <p>Un borde redondeado (lg)</p>
        <p>Color de fondo sky</p>
        <p>Color de texto blanco</p>
        <p>El cursor del ratón sera "pointer"</p>
        <p>Cuando se situe el ratón por encima, el color de fondo cambiará a azul oscuro</p>
        <p>Pista: https://tailwindcss.com/docs/cursor</p>
        <p>Pista: https://tailwindcss.com/docs/background-color#hover-focus-and-other-states</p>
      </div>
      <div>
        <button className="p-3 rounded-lg bg-sky-600 cursor-pointer hover:bg-blue-900 text-white">Pulsame</button>
      </div>
    </div>
  )
}

export default Eje08
