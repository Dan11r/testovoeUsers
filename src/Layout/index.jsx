import React from 'react'
import s from './layout.module.scss'
import { Sidebar } from '../components/Sidebar'

export const Layout = ({ children, sortBy }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.sidebar}>
        <Sidebar sortBy={sortBy} />
      </div>
      <div className={s.content}>{children}</div>
    </div>
  )
}
