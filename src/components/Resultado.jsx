import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: white;
    font-family: 'Lato', sans-serif ;
    display: flex;
    align-items: start;
    gap: 1rem;
    margin-top:30px;
`
const Texto = styled.p`
    font-size: 18px ;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px ;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>
         <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio màs alto del dìa: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio màs bajo del dìa: <span>{LOWDAY}</span></Texto>
            <Texto>Variacìon ùltimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ùltima Actualizaciòn: <span>{LASTUPDATE}</span></Texto>
         </div>
    </Contenedor>
  )
}

export default Resultado