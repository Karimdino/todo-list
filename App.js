class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<div id='myDIV' className='header'>
					<h1>To-Do List</h1>
					<div className='inputAndAdd'>
						<input
							type='text'
							id='myInput'
							placeholder='Add your task here...'
						/>
						<span
							onClick="newElement(document.getElementById('myInput').value)"
							className='addBtn'
						>
							Add
						</span>
					</div>
				</div>
				<ul id='myUL' />
			</div>
		);
	}
}

const domContainer = document.querySelector('#App');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
