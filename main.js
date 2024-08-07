//CONDITIONAL RENDERING USING IF STATEMENT

// function DropDownMenu() {

// 	const [isOpen, setIsOpen] = React.useState(false);

// 	const handleClick = () => {
// 		setIsOpen((currentIsOpen) => !currentIsOpen);

// 	};

// 	let menu;
// 	if(isOpen) {
// 		menu = (<ul>
// 			<li>HOME</li>
// 			<li>PAYMENTS</li>
// 			<li>INFO</li>
// 		</ul>
// 		)
// 	};
// 	return (
// 		<div>
// 			<button onClick={handleClick}>NAVIGATE</button>
// 			{menu}
// 		</div>
// 	);
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropDownMenu />);

//CONDITIONAL RENDERING USING TERNARY OPERATOR

function DropDownMenu2() {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	return (
		<div>
			<button onClick={handleClick}>NAVIGATE</button>
			{isOpen ? ( //if else statement is needed, remove variable declaration from above HTML and place where it would appear. Use ternary statement to conduct if else operation.
				<ul>
					<li>HOME</li>
					<li>PAYMENTS</li>
					<li>INFO</li>
				</ul>
			) : null}
		</div>
	);
}

// ReactDOM.createRoot(document.getElementById("root")).render(<DropDownMenu2 />);

//CONDITIONAL RENDERING USING LOGICAL && OPERATOR

function DropDownMenu3() {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen);
	};

	return (
		<div>
			<button onClick={handleClick}>NAVIGATE</button>
			{isOpen && ( //instead of '? () : null', use '&&' after condition, if 'else' output is null.
				<ul>
					<li>HOME</li>
					<li>PAYMENTS</li>
					<li>INFO</li>
				</ul>
			)}
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<DropDownMenu3 />);
