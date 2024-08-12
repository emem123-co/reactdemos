const { useState } = React;

function FruitListItem(props) {
	return (
		<li>
			{props.fruit.name} | <button onClick={props.onRemove}>Delete</button>
		</li>
	);
}

function FruitList() {
	const [fruits, setFruits] = useState([
		{ id: 1, name: "apple" },
		{ id: 2, name: "orange" },
		{ id: 3, name: "blueberry" },
		{ id: 4, name: "banana" },
		{ id: 5, name: "kiwi" },
	]);

	function removeFruit(fruit) {
		//this is an event handler, which will return void
		let updatedFruits = fruits.filter((f) => f.id !== fruit.id);
		setFruits(updatedFruits);
	}

	return (
		<ul>
			{fruits.map((fruit) => (
				<FruitListItem
					key={fruit.id}
					fruit={fruit}
					onRemove={() => {
						removeFruit(fruit);
					}}
				/> //pass removeFruit event handler as a prop into each FruitListItem, name it onRemove. to defer this function, wrap it in a function. you need to do this because you have to pass prop into removeFruit, i.e. you will need to use parens, which will run the function on load.
			))}
		</ul>
	);
}

function App() {
	return <FruitList />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
