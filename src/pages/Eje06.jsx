import CardSimple from '../components/CardSimple'

const Eje06 = () => {
  return (
    <div>
      <h1>Ejercicio 06</h1>
      <div className="mb-4">
        <p>
          Corrige el código para que los cards se coloquen en varias columnas adaptandose al ancho de la ventana.
        </p>
        <p>Deja ademas una pequeña distancia de separación entre los card de 0.75rem</p>
        <p>Pista: https://tailwindcss.com/docs/flex-wrap</p>
      </div>
      <div className=''>
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

export default Eje06