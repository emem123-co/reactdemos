// //CONDITIONAL RENDERING USING LOGICAL && OPERATOR

// function DropdownMenu() {
// 	const [isOpen, setIsOpen] = React.useState(false);

// 	const handleClick = () => {
// 		setIsOpen((currentIsOpen) => !currentIsOpen);
// 	};

// 	let menu;
// 	if (isOpen) {
// 		menu = (
// 			<ul>
// 				<li>Edit</li>
// 				<li>Remove</li>
// 				<li>Archive</li>
// 			</ul>
// 		);
// 	}
// 	return (
// 		<div>
// 			<button onClick={handleClick}>Actions</button>
// 			{isOpen ? (
// 				<ul>
// 				<li>Edit</li>
// 				<li>Remove</li>
// 				<li>Archive</li>
// 			</ul>
// 			) : null}
			
// 		</div>
// 	);
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu />);
