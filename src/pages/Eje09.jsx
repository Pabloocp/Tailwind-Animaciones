import Card from '../components/card'

const Eje09 = () => {
  return (
    <div>
      <h1>Ejercicio 09</h1>
      <img class="img-collapse" src="/src/assets/screen/09.png"></img>
      
      <div className="mb-4">
        <p>Da estilo al siguiente botón:</p>
        <p>Tendrá el texto de color blanco</p>
        <p>Un padding de 4 (1rem)</p>
        <p>Un borde redondeado (md)</p>
        <p>Como fondo tendrá un gradiente de color:</p>
        <p>- El gradiente irá hacia la derecha</p>
        <p>- Comenzará con el color purple-600</p>
        <p>- terminará con el color blue-500</p>
        <p>Pista: https://tailwindcss.com/docs/background-image#linear-gradients</p>
        <p>Pista: https://tailwindcss.com/docs/gradient-color-stops</p>
      </div>
      <div>
        <button className="text-white p-4 rounded-md bg-gradient-to-r from-purple-600 to-blue-500">Purple to Blue</button>
      </div>
    </div>
  )
}

export default Eje09
