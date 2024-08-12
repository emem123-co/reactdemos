// // //Events, generally user interaction triggers function.
// // function handleClick() {
// // 	console.log("clicked"); //console only
// // }

// // function App() {
	// return <button onClick={handleClick}>Click Me!</button>; //remove the parenthesis when calling the function otherwise it will automatically run the function.
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// function FruitListItem(props) {
// 	function handleClick(id) {
// 		console.log(`removed ${id}`);
// 	}
// 	// return <li onClick={handleClick(props.fruit.id)}>{props.fruit.name} </li>;
// 	return <li onClick={() => handleClick(props.fruit.id)}>{props.fruit.name} </li>;
// }

// function FruitList(props) {
// 	const fruitListItems = props.fruits.map((fruit) => <FruitListItem key={fruit.id} fruit={fruit} />);
// 	return <ul>{fruitListItems}</ul>;
// }

// const data = [
// 	{ id: 1, name: "apple" },
// 	{ id: 2, name: "orange" },
// 	{ id: 3, name: "blueberry" },
// 	{ id: 4, name: "banana" },
// 	{ id: 5, name: "kiwi" },
// ];

// ReactDOM.createRoot(document.getElementById("root")).render(<FruitList fruits={data} />);
