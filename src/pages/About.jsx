import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
  block: {
    textAlign: 'center',
    marginTop: '10vh',
  },
  icon: {
    top: '45vh',
  },
}))

function About() {
  const classes = useStyles()
  return (
    <div className={classes.block}>
      <h1>About Me</h1>
      <h2>Alexander Solomahin</h2>
      <h3>Junior React/Vue developer</h3>
      <IconButton
        href="https://github.com/RealSolomon"
        className={classes.icon}
      >
        <GitHubIcon style={{ fontSize: 45 }} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/alexander-solomahin-7405b8190/"
        className={classes.icon}
      >
        <LinkedInIcon style={{ fontSize: 45 }} />
      </IconButton>
    </div>
  )
}

export default About
