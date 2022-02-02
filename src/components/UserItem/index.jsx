import React from 'react'
import { Link } from 'react-router-dom'
import s from './UserItem.module.scss'

export const UserItem = ({ name, city, company, id }) => {
  return (
    <>
      <div className={s.userItem}>
        <div className={s.info}>
          <div className={s.name}>
            <span>ФИО</span>
            {name}
          </div>
          <div className={s.city}>
            <span>город</span>
            {city}
          </div>
          <div className={s.company}>
            <span>компания</span>
            {company}
          </div>
        </div>
        <div className={s.link}>
          <Link to={`user/${id}`}>Подробнее</Link>
        </div>
      </div>
    </>
  )
}
