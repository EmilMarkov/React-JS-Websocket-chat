import './App.css'
import MaterialSidebar from './components/UI/Sidebar/MaterialSidebar'

function App() {
	const chatsItems = [
		{
			id: 1,
			text: 'Чат 1',
		},
		{
			id: 2,
			text: 'Чат 2',
		},
		{
			id: 3,
			text: 'Чат 3',
		},
	]

	return (
		<div className='App'>
			<MaterialSidebar items={chatsItems} />
		</div>
	)
}

export default App
