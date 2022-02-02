import React from 'react'
import { useHistory, useNavigate } from 'react-router-dom'

import { UserItem } from './../../components/UserItem'
import s from './UserList.module.scss'

export const UserList = ({ users }) => {
  return (
    <div>
      <h2 className={s.header}>Список пользователей</h2>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          city={user.address.city}
          company={user.company.name}
        />
      ))}
    </div>
  )
}
