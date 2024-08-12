const {
	BrowserRouter: Router,
	Route,
	Routes,
	Link,
	NavLink,
	Navigate,
	useParams,
	useLocation,
	useNavigation,
} = window.ReactRouterDOM;

function Home() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Contact() {
	return <h2>Contact</h2>;
}

function NotFound() {
      return (
        <>
          <h2>Uh oh.</h2>
          <p>
            The page you requested could not be found. Is there any chance you
            were looking for one of these?
          </p>
        </>
      );
    }

function App() {
	return (
		<Router>
			<div>
				<nav className="container mt-4">
					<ul className="nav nav-pills">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contact">
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>

				<div className="container mt-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
