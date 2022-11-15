import CardSimple from '../components/CardSimple'

const Eje010 = () => {
  return (
    <div>
      <h1>Ejercicio 013</h1>
      <img class="img-collapse" src="/src/assets/screen/13.png"></img>
      
      <p>Añade tailwind al input para:</p>
      <p>El color del texto será blue-200</p>
      <p>El color del fondo será un gradiente de color indigo-500 (el gradiente irá hacia la izquierda)</p>
      <p>Ponle borde redondeado (tamaño lg)</p>
      <p>Añadele un padding de 0.5rem (8px)</p>
      <p>Añade un anillo con box-shadow</p>
      <p>El color del texto del placeholder será verde (green-200) con una opacidad del 50%</p>
      <p>Pista: https://tailwindcss.com/docs/ring-width</p>
      <p>Pista: https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text</p>

      <div className="m-4"  >
        <input type="text" className="text-blue-200 bg-gradient-to-l from-indigo-500 rounded-lg p-2 ring-4 placeholder:text-green-200/50" placeholder="escribe algo aquí"/>
      </div>
    </div>
  )
}

export default Eje010
