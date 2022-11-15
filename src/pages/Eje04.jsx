import Card from '../components/Card'

const Eje04 = () => {
  return (
    <div>
      <h1>Ejercicio 04</h1>
      <img class="img-collapse" src="/src/assets/screen/04.png"></img>
      
      <div className="mb-4">
        <p>Modifica el div para:</p>
        <p>Un ancho (width) de 33.33%</p>
        <p>tenga un color de fondo cyan suave</p>
        <p>tenga un color de texto negro</p>
        <p>Añade un padding de 1rem</p>
        <p>Emita una sombra (shadow) cyan</p>
        <p>Tenga un borde redondeado (lg)</p>
        <p>Pista: https://tailwindcss.com/docs/width</p>
        <p>Pista: https://tailwindcss.com/docs/background-color</p>
        <p>Pista: https://tailwindcss.com/docs/box-shadow-color</p>
        <p>Pista: https://tailwindcss.com/docs/border-radius</p>
      </div>
      <div className='w-4/12	bg-cyan-500 text-black p-4 shadow-xl shadow-cyan-500/50 rounded-lg'>
        <Card/>
      </div>
    </div>
  )
}

export default Eje04
