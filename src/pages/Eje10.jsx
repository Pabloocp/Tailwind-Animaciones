import CardSimple from '../components/CardSimple'

const Eje010 = () => {
  return (
    <div>
      <h1>Ejercicio 010</h1>
      <img class="img-collapse" src="/src/assets/screen/10.png"></img>
      
      <p>
        Corrige el código para que estos cards aparezcan en varias columnas
      </p>
      <p>Por defecto (mobile-first) se distribuirán en 2 columnas</p>
      <p>Tendrán un espaciado entre elementos de 1rem</p>
      <p>En pantallas de tamaño mediano o superior se distribuirán en 4 columnas </p>
      <p>Pista: https://tailwindcss.com/docs/grid-template-columns</p>

      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
      </div>
    </div>
  )
}

export default Eje010
