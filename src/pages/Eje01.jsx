import CardSimple from '../components/CardSimple'

const Eje01 = () => {
  return (
    <div>
      <h1>Ejercicio 01</h1>
      <img class="img-collapse" src="/src/assets/screen/01.png"></img>
      <div className="mb-4">
        <p>
          Corrige el código para que los cards se coloquen en una sola fila.
        </p>
        <p>Deja ademas una pequeña distancia de separación entre los card</p>
        <p>Pista: https://tailwindcss.com/docs/flex</p>
        <p>Pista: https://tailwindcss.com/docs/gap</p>
      </div>
      <div className="gap-3 flex flex-row">
        <CardSimple />
        <CardSimple />
        <CardSimple />
      </div>
    </div>
  )
}

export default Eje01
