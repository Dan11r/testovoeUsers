import React from 'react'
import { Button } from '../Button'
import s from './Sidebar.module.scss'

export const Sidebar = ({ sortBy }) => {
  return (
    <div className={s.sidebar}>
      <h3>Сортировка</h3>
      <div className={s.btn}>
        <Button onClick={() => sortBy('name')}>По имени</Button>
      </div>
      <div className={s.btn}>
        <Button onClick={() => sortBy('city')}>По городу</Button>
      </div>
    </div>
  )
}
