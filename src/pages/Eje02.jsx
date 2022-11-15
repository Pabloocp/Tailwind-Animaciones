const Eje02 = () => {
  return (
    <div>
      <h1>Ejercicio 02</h1>
      <img class="img-collapse" src="/src/assets/screen/02.png"></img>
      
      <div className="mb-4">
        <p>Corrige el código para que:</p>
        <p>Las 2 imagenes tengan un borde de grosor de 8 pixeles</p>
        <p>Las primera imagen tendrá tendrá un borde color rojo suave</p>
        <p>Las segunda imagen tendrá un padding de 1.5rem y un margen top de 1.25rem</p>
        <p>Pista: https://tailwindcss.com/docs/border-width</p>
        <p>Pista: https://tailwindcss.com/docs/padding</p>
        <p>Pista: https://tailwindcss.com/docs/margin</p>
        <p>Pista: https://tailwindcss.com/docs/border-color</p>
      </div>
      <div>
        <img class="border-8 border-red-500" src="https://picsum.photos/200/200" alt="random" />
        <img class="border-8 p-6 mt-5" src="https://picsum.photos/200/200" alt="random" />
      </div>
    </div>
  )
}

export default Eje02
