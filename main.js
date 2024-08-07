/* Add another button element to the page and have the button text say "Display Message"
Create a state variable named message using the useState hook and initialize the message to "" (empty string).
Create another paragraph on the page and have it display the message state variable
Create a function named displayMessage that sets the message state variable to "Message in the bottle"
Associate the click event of the "Display Message" button with the displayMessage function.
Verify it works. */

//component function
function App() {
	const [message, setMessage] = React.useState("");

	//code
	// function display() {
	// 	alert("Boo");
	// }
	function displayMessage() {
		setMessage("Message in a bottle.");
	}

	//html
	return (
		<div>
			<h2>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ab architecto dolor placeat fugit explicabo ex!
				Quam id ratione rerum veritatis ex explicabo, magnam totam dicta sapiente sint voluptas neque exercitationem
				excepturi nihil cupiditate porro sunt quidem, beatae eos nulla veniam magni unde omnis? Inventore unde adipisci
				dignissimos, aperiam explicabo reiciendis sapiente possimus culpa, repudiandae quia in voluptas. Fugit tempora
				obcaecati modi cupiditate rerum assumenda similique, atque placeat maxime voluptate, deleniti voluptatum ipsam
				consequatur iusto! Maiores nesciunt eveniet officia laudantium provident reiciendis voluptatem quaerat odit esse
				minima. Quasi neque ab recusandae, sunt blanditiis tenetur aut veritatis nisi asperiores eos in.
			</h2>
			<button
				onClick={() => {
					displayMessage();
				}}
			>
				Display
			</button>
			<h2>{message}</h2>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
