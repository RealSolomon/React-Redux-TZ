import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#fafafa',
    // textTransform: 'uppercase',
    fontSize: '17px',
  },
  text: {
    fontSize: '30px',
    color: 'white',
  },
})

function Header() {
  const classes = useStyles()

  return (
    <div className="header">
      <div className="container">
        <span className={classes.text}>React-Redux User List</span>
        <ul className="nav">
          <li>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
