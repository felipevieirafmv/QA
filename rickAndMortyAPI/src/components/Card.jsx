/* eslint-disable react/prop-types */
import style from './style.module.css'

export const Card = ({name, desc, value, category, status, image}) => {
  return(
      <div className={style.card}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <p>{category}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <div className={style.status} style={{backgroundColor: status ? 'green' : 'red'}}/>
      </div>
  )
}