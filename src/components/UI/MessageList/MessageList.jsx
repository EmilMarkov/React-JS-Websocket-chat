import React from 'react'
import MaterialButton from '../Button/MaterialButton'
import MaterialInput from '../Input/MaterialInput'
import classes from './MessageList.module.css'

const MessageList = ({ children, ...props }) => {
	return (
		<div className={classes.messageListContainer}>
			<div className={classes.messageList}>{children}</div>
			<div className={classes.inputs}>
				<MaterialInput type='text' placeholder='Сообщение' />
				<MaterialButton>Отправить</MaterialButton>
			</div>
		</div>
	)
}

export default MessageList
