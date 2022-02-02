import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import { UserList } from './pages/UserList'
import { UserProfile } from './pages/UserProfile'
import { Layout } from './Layout'

function App() {
  const [usersList, setUsersList] = useState([])

  const getUsers = async (set, id) => {
    const { data: users } = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
      params: {
        id,
      },
    })
    set(users)
  }

  const sortBy = (by) => {
    setUsersList((prev) => {
      return [...prev].sort((a, b) => {
        switch (by) {
          case 'name':
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0

          case 'city':
            if (a.address.city > b.address.city) {
              return 1
            }
            if (a.address.city < b.address.city) {
              return -1
            }
            return 0
          default:
            return 0
        }
      })
    })
  }

  useEffect(() => {
    getUsers(setUsersList)
  }, [])

  return (
    <div className="App">
      <Layout sortBy={sortBy}>
        <Routes>
          <Route path="/user/:id" element={<UserProfile getUsers={getUsers} />} />
          <Route path="/" element={<UserList users={usersList} />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
