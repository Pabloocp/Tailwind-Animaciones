const Eje05 = () => {
  return (
    <div>
      <h1>Ejercicio 05</h1>
      <img class="img-collapse" src="/src/assets/screen/05.png"></img>
      
      <div className="mb-4">
        <p>Modifica el div del título para:</p>
        <p>Por defecto (mobile-first) tendrá un tamaño de fuente xl</p>
        <p>en pantallas de tamaño mediano (md) tendrá tamaño de texto 3xl</p>
        <p>en pantallas de tamaño grande (lg)  o superior tendrá tamaño de texto 6xl</p>
        <br/>
        <p>Modifica el div que contiene las descripciones para:</p>
        <p>Por defecto (mobile-first) los elementos aparecerá en columna</p>
        <p>Para pantallas de tamaño meidano (md) o superior los elementos aparecerán en fila (row)</p>
        <br/>
        <p>La última descripción5 no aparecerá en dispositivos de tamaño pequeño (sm)</p>
        <p>Pista: https://tailwindcss.com/docs/responsive-design</p>
        <p>Pista: https://tailwindcss.com/docs/visibility</p>
      </div>
      <div>
        <div className="text-xl md:text-3xl lg:text-6xl">Titulo</div>
        <div className="gap-2 flex flex-col md:flex-row">
          <div>Descripción1</div>
          <div>Descripción2</div>
          <div>Descripción3</div>
          <div>Descripción4</div>
          <div className="invisible md:visible ">Descripción5</div>
        </div>
      </div>
    </div>
  )
}

export default Eje05
