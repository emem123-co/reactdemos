// function ContactUsForm(params) {
// 	const [department, setDetpartment] = React.useState("");
// 	const [message, setMessage] = React.useState("");
// 	const [agreedToTerms, setagreedToTerms] = React.useState(false);

// 	const [departmentError, setDepartmentError] = React.useState("");
// 	const [messageError, setMessageError] = React.useState("");
// 	const [agreedToTermsError, setAgreedToTermsError] = React.useState("");

// 	const form = [department, message, agreedToTerms];

// 	const statetoString = JSON.stringify(form);

// 	function handleSubmit(event) {
// 		event.preventDefault();
// 		validateForm();
// 		console.log(statetoString);
// 	}

// 	function validateForm() {
// 		setDepartmentError(null);
// 		setMessageError(null);
// 		setAgreedToTermsError(null);

// 		if (agreedToTerms === false) {
// 			setAgreedToTermsError("You must agree to the terms and conditions.");
// 		}
// 		if (department === "") {
// 			setDepartmentError("Please select a department.");
// 		}
// 		if (message === "") {
// 			setMessageError("Please enter a message");
// 		}
// 	}

// 	return (
// 		<div>
// 			<h1 class="d-flex pb-4 pt-3 container" font="sans-serif">CONTACT US</h1>
// 			<form class="container" onSubmit={handleSubmit}>
// 				<div>
// 					<select
// 						class="form-select"
// 						name="department"
// 						id="department"
// 						value={department}
// 						onChange={(event) => {
// 							setDetpartment(event.target.value);
// 						}}
// 					>
// 						<option value="">Select department...</option>
// 						<option value="hr">Human Resources</option>
// 						<option value="pr">Public Relations</option>
// 						<option value="sp">Support</option>
// 					</select>
// 				</div>

// 				<div class="py-3">
// 					<textarea
// 						class="form-control"
// 						name="message"
// 						id="message"
// 						value={message}
// 						onChange={(event) => setMessage(event.target.value)}
// 						placeholder="Type message here..."
// 					></textarea>
// 				</div>

// 				<div class="pb-3">
// 					<input
// 						class="form-check-input border-black"
// 						id="terms"
// 						name="agreedToTerms"
// 						type="checkbox"
// 						checked={agreedToTerms}
// 						onChange={(event) => setagreedToTerms(event.target.checked)}
// 					/>
// 					<label class="px-3" htmlFor="terms">
// 						I agree to the terms and condtions.
// 					</label>
// 				</div>

// 				<div class="d-flex gap-2 mt-5 justify-content-end">
// 					<button class="btn btn-success" type="submit">
// 						Submit
// 					</button>
// 					<button class="btn btn-outline-secondary" href="/main.js">
// 						Cancel
// 					</button>
// 				</div>
// {/* <div className="test"></div> */}
// 				<div class="d-flex mt-1 justify-content-end">
// 					{departmentError && <div class="p-2 m-1 bg-danger w-2rem text-white rounded">{departmentError}</div>}
// 				</div>

// 				<div class="d-flex mt-1 justify-content-end">
// 					{messageError && <div class="p-2 m-1 bg-danger w-2rem text-white rounded">{messageError}</div>}
// 				</div>

// 				<div class="d-flex mt-1 justify-content-end">
// 					{agreedToTermsError && <div class="p-2 m-1 bg-danger w-3rem text-white rounded">{agreedToTermsError}</div>}
// 				</div>
// 			</form>
// 		</div>
// 	);
// }

// // ReactDOM.createRoot(document.getElementById("root")).render(<ContactUsForm />);

// function App() {
// 	return (
// 		<div class="container d-flex mt-6 justify-content-center">
// 			<ContactUsForm />
// 		</div>
// 	);
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
