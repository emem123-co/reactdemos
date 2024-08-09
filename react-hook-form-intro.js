const { useForm } = ReactHookForm;

function SigninForm() {
	const { register, handleSubmit } = useForm();

	console.log(register("username"));

	const signIn = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(signIn)}>
			<input type="text" {...register("username")} />
			<input type="password" {...register("password")} />
			<button type="submit">Sign In</button>
		</form>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<SigninForm />);

// handleSubmit is preventing default and checking the form is valid already (part of ReactHookForms).
//... is a spread operator. register is a function.
