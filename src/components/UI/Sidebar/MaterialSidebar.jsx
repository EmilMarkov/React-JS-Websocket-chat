import React from 'react'
import ChatList from '../ChatList/ChatList'
import MessageItem from '../MessageItem/MessageItem'
import MessageList from '../MessageList/MessageList'
import classes from './MaterialSidebar.module.css'

const MaterialSidebar = ({ ...props }) => {
	return (
		<div className={classes.sidebar}>
			<ChatList items={props.items} />
			<div className={classes.content}>
				<MessageList>
					<MessageItem text='Hello' author='Emil Markov' date='17:34' />
					<MessageItem text='Hello1' author='Emil Markov1' date='17:35' />
					<MessageItem text='Hello2' author='Emil Markov' date='17:36' />
					<MessageItem text='Hello3' author='Emil Markov2' date='17:36' />
				</MessageList>
			</div>
		</div>
	)
}

export default MaterialSidebar
