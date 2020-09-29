import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { deleteUser } from '../redux/actions/users'

const useStyles = makeStyles({
  li: {
    listStyle: 'none',
    width: '30%',
    border: '1px solid #f0f0f0',
    marginLeft: '20px',
    textAlign: 'center',
    fontSize: '15px',
    marginTop: '15px',
  },
  btn: {
    // backgroundColor: '#3f51b5',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '0px 15px',
    justifyContent: 'flex-end',
    top: '35%',
    left: '47%',
    transform: 'translate(-45%, -20%)',
  },
})

function UserItem({ user }) {
  const classes = useStyles()
  let dispatch = useDispatch()

  return (
    // <ul className={classes.ul}>
    <li className={classes.li} key={user.id}>
      <div>
        <h3>{user.name}</h3>
        <h4>{user.surname}</h4>
        <p>{user.date}</p>
      </div>
      <div>
        <Button
          color="secondary"
          variant="contained"
          startIcon={<DeleteIcon />}
          className={classes.btn}
          onClick={() => dispatch(deleteUser(user.id))}
        >
          Delete
        </Button>
      </div>
    </li>
    // </ul>
  )
}

export default UserItem
