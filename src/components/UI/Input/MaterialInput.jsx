import React from 'react'
import classes from './MaterialInput.module.css'

const MaterialInput = React.forwardRef((props, ref) => {
	return <input ref={ref} className={classes.materialInput} {...props} />
})

export default MaterialInput
