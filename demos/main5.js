// // }
// // function hiMessage(params) {

// // }

// // let messages = {
// // 	basicH: "Hi",
// // 	basicB: "Goodbye.",
// // 	morning: "Good morning.",
// // 	evening: "Good evening.",
// // 	night: "Good night.",
// // };         we dont need this because react will do it for you.

// //NO PROPS
// // function Greeter() {
// // 	return <h2>Hello</h2>;
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(<Greeter />);

// //WITH PROPS 
// function Greeter(props) {
// 	return (
// 		<h2>
// 			Hello, {props.first} {props.last}. You are {props.age}. You are a vampire.
// 		</h2>
// 	);
// }

// // //WITH DECONSTRUCTED PROPS
// // function Greeter({first, last, age}) {
// // 	return (
// // 		<h2>
// // 			Hello, {first} {last}. You are {age}. You are a vampire.
// // 		</h2>
// // 	);


// // ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Calvin" last="Broadus" />);
// // ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Calvin" last="Broadus" />);
// ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Emily" last="Morgan" age="450000" />);
// ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Emily" last="Morgan" age="450000" />);
