import CardSimple from '../components/CardSimple'

const Eje15 = () => {
  return (
    <div>
      <h1>Ejercicio 015</h1>

      <p>
        Usando tailwind replica los mismos estilos aplicados en la clase css
        'fadeIn' situado en el fichero App.css
      </p>
      <p>Pista: https://tailwindcss.com/docs/animation</p>

      <div className="m-8 flex gap-8">
        <h3>Animaciones usando css</h3>
        <img className="fadeIn" src="/src/assets/react.png" alt="react" width="100"/>
        <img className='slideInUp' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='hinge' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='slideInLeft' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='bounceIn' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='flip' src="/src/assets/react.png" alt="react" width="100"/>
        <img className='zoomOutRight' src="/src/assets/react.png" alt="react" width="100"/>
        {/* 
       
         */}
      </div>

      <div className="m-8 flex gap-8">
        <h3>Animaciones usando tailwind</h3>
        <img className="hover:animate-myFadeIn" src="/src/assets/react.png" alt="react" width="100" />
      </div>
    </div>
  )
}

export default Eje15
