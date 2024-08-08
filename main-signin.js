//EXCERCISE 6

function App() {
	//the data we want to keep track of, a function that we use to update it and notify react that we want to rerender and rerun the component that it lives in.

	const [user, setUser] = React.useState(undefined); //use undefined (not null) because there isn't an absense of a user, the user exists, it is just yet to be defined.

	// const [user, setUser] = React.useState({first: "James", last: "Roday"});

return <AccountHeader user={user} /> //invented an HTML tag of AccountHeader, create attribute of "user" like alt="" with img tag, for example. 
}

function AccountHeader({user}) {
  
  return (user) ? ( //if user exisits, do this.
				  <span>
					  {user.first} {user.last}
				  </span>
		  ) : ( //if user does not exisit, do this.
				  <a href="">Sign In</a> 
		  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />); //rendering a component is a component in an HTML tag, self closing.

//components: upercase, not nested, returns JSX
//event handlers: return void, nested
