/* eslint-disable react/prop-types */
import style from './style.module.css'

export const Characters = ({name, species, status, image, type, gender}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <h2>{species}</h2>
          <p>{type}</p>
          <p>{gender}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <div className={style.status} style={{backgroundColor: status == "Alive" ? 'green' : 'red'}}/>
          <button onClick={() => {}}>Info</button>
      </div>
  )
}