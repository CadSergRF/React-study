import React from 'react'
import classes from './Myinput.module.css'

const MyInput = (props) => {
  return (
    <input className={classes.myInput} {...props}/>
  )
}

export default MyInput