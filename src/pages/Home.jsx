import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Users from '../components/Users'

const useStyles = makeStyles({
  btn: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    // top: '80%',
    left: '50%',
    // position: 'absolute',
    transform: 'translate(-50%, -50%)',
    marginTop: '10%',
  },
})

function Home() {
  const classes = useStyles()
  return (
    <div>
      <Users />
      <div>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          href="/register"
        >
          Регистрация
        </Button>
      </div>
    </div>
  )
}

export default Home
