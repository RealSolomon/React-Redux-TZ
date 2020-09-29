import React from 'react'
import { useSelector } from 'react-redux'
import UserItem from './UserItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  ul: {
    display: 'flex',
    width: '96%',
    flexWrap: 'wrap',
  },
})

function Users() {
  const classes = useStyles()

  let users = useSelector((state) => state)
  return (
    <ul className={classes.ul}>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />
      })}
    </ul>
  )
}

export default Users
