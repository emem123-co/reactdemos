const { useForm } = window.ReactHookForm;

function ContactUsForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const send = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h1 className="d-flex pb-4 pt-3 container" font="sans-serif">
				DON'T CONTACT US
			</h1>
			<form className="container" onSubmit={handleSubmit(send)}>
				<div>
					<select className="form-select" {...register("department", { required: "Department is required." })}>
						<option value="">Select department...</option>
						<option value="hr">Human Resources</option>
						<option value="pr">Public Relations</option>
						<option value="sp">Support</option>
					</select>
				</div>

				<br />
				{errors.department && <p className="alert">{errors.department?.message}</p>}

				<div className="py-3">
					<textarea
						className="form-control"
						{...register("message", { required: "A message is required" })}
						placeholder="Type message here..."
					></textarea>
				</div>

				<br />
				{errors.message && <p className="alert">{errors.message?.message}</p>}

				<div className="pb-3">
					<input
						className="form-check-input border-black"
						type="checkbox"
						{...register("agreedToTerms", { required: "You must accept the terms and conditions." })}
					/>
					<label className="px-3" htmlFor="terms">
						I agree to the terms and condtions.
					</label>
				</div>

				<br />
				{errors.agreedToTerms && <p className="error">{errors.agreedToTerms?.message}</p>}

				<div className="d-flex gap-2 mt-5 justify-content-end">
					<button className="btn btn-success" type="submit">
						Submit
					</button>
					<button className="btn btn-outline-secondary" href="/main.js">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

function App() {
	return (
		<div className="container d-flex mt-6 justify-content-center">
			<ContactUsForm />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
