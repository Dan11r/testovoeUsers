import React from 'react'
import s from './Button.module.scss'

export const Button = ({ children, onClick, color, disabled }) => {
  return (
    <div className={s.wrapper}>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? '#afafaf' : color }}
        onClick={onClick}>
        {children}
      </button>
    </div>
  )
}
