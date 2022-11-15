const Eje03 = () => {
  return (
    <div>
      <h1>Ejercicio 03</h1>
      <img class="img-collapse" src="/src/assets/screen/03.png"></img>
      
      <div className="mb-4">
        <p>Modifica los parrafos según se indica:</p>
        <p>El primer párrafo tendrá el texto de color naranja y la fuente de la familia 'mono'</p>
        <p>El segundo párrafo tendrá color rojo y una opacidad del 50%</p>
        <p>El tercer párrafo está en italica y el peso de fuente estará a bold</p>
        <p>El cuarto párrafo se convertirá a mayúsculas, y tendrá un espacio entre palabras de 0.1em </p>
        <p>El quinto párrafo ocupará solo una linea y añadirá ...(ellipsis) al final, ocultando el resto del texto</p>
        <p>Pista: https://tailwindcss.com/docs/text-color</p>
        <p>Pista: https://tailwindcss.com/docs/font-family</p>
        <p>Pista: https://tailwindcss.com/docs/font-style</p>
        <p>Pista: https://tailwindcss.com/docs/text-transform</p>
        <p>Pista: https://tailwindcss.com/docs/letter-spacing</p>
        <p>Pista: https://tailwindcss.com/docs/overflow</p>
        <p>Pista: https://tailwindcss.com/docs/text-overflow</p>
        <p>Pista: https://tailwindcss.com/docs/whitespace</p>
      </div>
      <div>
        <p className='text-orange-600 font-mono'>1- Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam maxime cumque ad, perspiciatis iure repellat repellendus. Corporis maiores repellat, deserunt, quo aspernatur deleniti voluptate in reiciendis explicabo enim omnis?</p>
        <p className='text-red-600 opacity-50'>2- Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam maxime cumque ad, perspiciatis iure repellat repellendus. Corporis maiores repellat, deserunt, quo aspernatur deleniti voluptate in reiciendis explicabo enim omnis?</p>
        <p className='font-bold italic'>3- Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam maxime cumque ad, perspiciatis iure repellat repellendus. Corporis maiores repellat, deserunt, quo aspernatur deleniti voluptate in reiciendis explicabo enim omnis?</p>
        <p className='uppercase tracking-widest'>4- Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam maxime cumque ad, perspiciatis iure repellat repellendus. Corporis maiores repellat, deserunt, quo aspernatur deleniti voluptate in reiciendis explicabo enim omnis?</p>
        <p className='truncate'>5- Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam maxime cumque ad, perspiciatis iure repellat repellendus. Corporis maiores repellat, deserunt, quo aspernatur deleniti voluptate in reiciendis explicabo enim omnis?</p>
      </div>
    </div>
  )
}

export default Eje03
