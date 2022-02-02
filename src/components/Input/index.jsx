import React from 'react'
import s from './Input.module.scss'

export const Input = ({ type, id, name, value, label, onChange, disabled }) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        type={type}
      />
    </div>
  )
}
