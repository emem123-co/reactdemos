// for loop
// 	const numbers = [1, 2, 3, 4, 5];
// 	const tens = [];

// 	for (let index = 0; index < numbers.length; index++) {
// 	  const number = numbers[index];
// 	  tens.push(number * 10);
// 	}

// 	console.log(tens);

//array forEach
// const numbers = [1, 2, 3, 4, 5];
// const tens = [];

// numbers.forEach(function (number) {
// 	tens.push(number * 10);
// });

// console.log(tens);

// #array.map
// const numbers = [1, 2, 3, 4, 5]; //this will return the same amount of items as you put in

// const tens = numbers.map(function (number) {
// return number * 10;
// });

// console.log(tens);

//#array.map with arrow function
// const numbers = [1, 2, 3, 4, 5];
// const tens = numbers.map((number) => number * 10); //because the function only has one line, you dont need {} and "return" is implied.
// console.log(tens);

//how do we do this in REACT? an array of jsx elements and place into unordered list:
function FruitList(props) {
	const fruitListItems = props.fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>);
	return <ul>{fruitListItems}</ul>;
}

const data = [
	{ id: 1, name: "apple" },
	{ id: 2, name: "orange" },
	{ id: 3, name: "blueberry" },
	{ id: 4, name: "banana" },
	{ id: 5, name: "kiwi" },
];

ReactDOM.createRoot(document.getElementById("root")).render(<FruitList fruits={data} />);

// function FruitListCard({fruit}) {
// 	return (
// 	<div>
// 		<li> {fruit.id}. {fruit.name} {fruit.color} </li>;
// 	</div>
// 	)
// }

// function FruitList(props) {
// 	const fruitListItems = props.fruits.map((fruit) => ( //loop
// 	  <FruitListItem key={fruit.id} fruit={fruit}/> //invented a new HTML tag with attribute named fruit equalling fruit
// 	));
// 	return <ul>{fruitListItems}</ul>;
//    }

//    const data = [
// 	{ id: 1, name: 'apple', color: "red" },
// 	{ id: 2, name: 'orange', color: "orange" },
// 	{ id: 3, name: 'blueberry', color: "purple" },
// 	{ id: 4, name: 'banana', color: "yellow" },
// 	{ id: 5, name: 'kiwi', color: "brown" },
//    ];

//    ReactDOM.createRoot(document.getElementById('root')).render(
// 	<FruitList fruits={data} />
//    );
