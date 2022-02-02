import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import s from './UserProfile.module.scss'
import { Button } from './../../components/Button'
import { useFormik } from 'formik'
import { Input } from './../../components/Input'

export const UserProfile = ({ getUsers }) => {
  const [isReadonly, setIsReadonly] = useState(true)
  const { id } = useParams()
  const [userData, setUserData] = useState([])

  useEffect(() => {
    getUsers(setUserData, id)
  }, [])

  useEffect(() => {
    formik.setValues({
      name: userData[0] ? userData[0].name : '',
      userName: userData[0] ? userData[0].username : '',
      email: userData[0] ? userData[0].email : '',
      street: userData[0] ? userData[0].address.street : '',
      city: userData[0] ? userData[0].address.city : '',
      zipCode: userData[0] ? userData[0].address.zipcode : '',
      phone: userData[0] ? userData[0].phone : '',
      website: userData[0] ? userData[0].website : '',
      comment: '',
    })
  }, [userData])

  const formik = useFormik({
    initialValues: {
      name: '',
      userName: '',
      email: '',
      street: '',
      city: '',
      zipCode: '',
      phone: '',
      website: '',
      comment: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div>
      <div className={s.header}>
        <h2>Профиль пользователя</h2>
        <Button onClick={() => setIsReadonly(false)}>Редактировать</Button>
      </div>
      <div className={s.inputArea}>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="name"
              name="name"
              type="text"
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="userName"
              name="userName"
              type="text"
              label="User name"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
          </div>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="email"
              name="email"
              type="email"
              label="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="street"
              name="street"
              type="text"
              label="Street"
              onChange={formik.handleChange}
              value={formik.values.street}
            />
          </div>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="city"
              name="city"
              type="text"
              label="City"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </div>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="zipCode"
              name="zipCode"
              type="text"
              label="Zip code"
              onChange={formik.handleChange}
              value={formik.values.zipCode}
            />
          </div>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="phone"
              name="phone"
              type="text"
              label="Phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
          <div className={s.input}>
            <Input
              disabled={isReadonly}
              id="website"
              name="website"
              type="text"
              label="Website"
              onChange={formik.handleChange}
              value={formik.values.website}
            />
          </div>
          <div className={s.input}>
            <textarea
              disabled={isReadonly}
              id="comment"
              name="comment"
              type="text"
              label="Comment"
              onChange={formik.handleChange}
              value={formik.values.comment}
            />
          </div>
          <Button disabled={isReadonly} color={'#52CF4F'} type="submit">
            Отправить
          </Button>
        </form>
      </div>
    </div>
  )
}
