import React, { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [dataCard, setDataCard] = useState({
    imagen: "",
    titulo: "",
    contenido: "",
  })

  const [listCard, setListCard] = useState([])

  const addValue = (event) => {
    const name = event.target.name
    const value = event.target.value
    const newDataCard = { ...dataCard }
    newDataCard[name] = value
    setDataCard(newDataCard)
  }

  const addCard = (event) => {
    event.preventDefault()
    const newListCard = [...listCard]
     if(dataCard.imagen === ""){
       return alert("Se necesita una imagen")
    }
    newListCard.push(dataCard)
    setListCard(newListCard);
    console.log(listCard)
    setDataCard({
      imagen: "",
      titulo: "",
      contenido: "",
    })
  }

  return (
    <div>
      <form onSubmit={addCard}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Imagen</label>
          <input type="text" value={dataCard.imagen} onChange={addValue} className="form-control" name='imagen' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Titulo</label>
          <input type="text" value={dataCard.titulo} onChange={addValue} className="form-control" name='titulo' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contenido</label>
          <input type="text" value={dataCard.contenido} onChange={addValue} className="form-control" name='contenido' />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Card</button>
      </form>
      {listCard.length > 0 ? listCard.map(card=>{
        return <div key={card.imagen}> 
          <Card imagen={card.imagen} titulo={card.titulo} contenido={card.contenido}/>
          </div>
      }) : ""}
    </div>
  )
}

export default App
