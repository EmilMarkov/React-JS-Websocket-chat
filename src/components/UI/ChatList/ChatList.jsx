import React from 'react'
import classes from './ChatList.module.css'

const ChatList = ({ ...props }) => {
	return (
		<ul className={classes.chatList}>
			{props.items.map(item => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	)
}

export default ChatList
