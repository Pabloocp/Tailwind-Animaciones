import CardSimple from '../components/CardSimple'

const Eje010 = () => {
  return (
    <div>
      <h1>Ejercicio 014</h1>
      <img class="img-collapse" src="/src/assets/screen/14.png"></img>
      
      <p>Añade codigo tailwind correcto para:</p>
      
      <p>La primera imagen tenga animación de spin</p>
      <p>La segunda imagen tenga animación de bounce</p>
      <p>La tercera imagen tenga animación de pulse</p>
      <p>Pista: https://tailwindcss.com/docs/animation</p>

      <div className="m-4 flex gap-8"  >
        <img className='animate-spin	' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='animate-bounce' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='animate-pulse' src="/src/assets/react.png" alt="react" width="100"/>
      </div>
    </div>
  )
}

export default Eje010
