const { useState, useEffect } = React;
const { useForm } = ReactHookForm;

const {
	BrowserRouter: Router,
	Route,
	Routes,
	Link,
	NavLink,
	Navigate,
	useParams,
	useLocation,
	useNavigate,
} = window.ReactRouterDOM;

const BASE_URL = "http://localhost:9000";

//fetch Utility functions

function translateStatusToErrorMessage(status) {
	switch (status) {
		case 401:
			return "Please sign in again.";
		case 403:
			return "You do not have permission to view the data requested.";
		default:
			return "There was an error saving or retrieving data.";
	}
}

async function checkStatus(response) {
	if (response.ok) return response;

	const httpError = {
		status: response.status,
		statusText: response.statusText,
		url: response.url,
		body: await response.text(),
	};
	console.log(`http error status: ${JSON.stringify(httpError, null, 1)}`);

	let errorMessage = translateStatusToErrorMessage(httpError.status);
	throw new Error(errorMessage);
}

function parseJSON(response) {
	return response.json();
}

function delay(ms) {
	return function (x) {
		return new Promise((resolve) => setTimeout(() => resolve(x), ms));
	};
}

const url = `${BASE_URL}/teams`;

const teamAPI = {
	list() {
		return fetch(url).then(checkStatus).then(parseJSON);
	},

	find(id) {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

	insert(team) {
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(team),
		})
			.then(checkStatus)
			.then(parseJSON);
	},
};

//UI Components
function HomePage() {
	return <h1>HOME</h1>;
}

function TeamsPage() {
	return (
		<div>
			<header className="d-flex justify-content-between">
				<h2>TEAMS</h2>
				<Link className="btn btn-outline-secondary" to="/teams/create">
					+ Team
				</Link>
			</header>
			<hr />
			<TeamsList />
		</div>
	);
}

function PlayersPage() {
	return <h1>PLAYERS</h1>;
}

function TeamsList() {
	const [teams, setTeams] = useState([]);
	const [busy, setBusy] = useState(false);

	async function loadTeams() {
		setBusy(true);
		let data = await teamAPI.list();
		setTeams(data);
		setBusy(false);
	}

	useEffect(() => {
		loadTeams();
	}, []);

	return (
		<div className="list py-3">
			{busy && <div>Loading...</div>}
			{teams.map((team) => (
				<div className="card" key={team.id}>
					<strong className="pt-3 px-3">{team.name}</strong>
					<div className="px-3">{team.division}</div>
					<div className="d-flex align-self-sm-end">
						<Link
							to={`edit/${team.id}`}
							className="p-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
						>
							edit
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}

function TeamForm() {
	// const [] = useState(); //use state returns an array
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(); //use state returns an object
	const [busy, setBusy] = useState(false);
	const [error, setError] = useState(undefined);
	const navigate = useNavigate();

	async function save(team) {
		// return async new Team
		try {
			setBusy(true);
			let newTeam = await teamAPI.insert(team);
			navigate("/teams");
		} catch (error) {
			setError(error.message);
		} finally {
			setBusy(false);
		}
	}

	return (
		<div>
			{busy && <p>Saving...</p>}
			{error && <div className="alert alert-danger">{error}</div>}

			<form className="d-flex flex-column gap-2" onSubmit={handleSubmit(save)}>
				<label className="" htmlFor="name">
					Team Name
				</label>
				<input
					id="name"
					type="text"
					className={`form-control ${errors.name && "is-invalid"}`}
					{...register("name", { required: "Name is required." })}
				/>
				<p className="invalid-feedback">{errors.name?.message}</p>

				<label className="" htmlFor="division">
					Division
				</label>
				<select
					id="division"
					type="text"
					className={`form-select ${errors.division && "is-invalid"}`}
					{...register("division", { required: "Division is required." })}
				>
					<option value="">Select...</option>
					<option value="1">Atlantic</option>
					<option value="2">Central</option>
					<option value="3">Pacific</option>
					<option value="4">Southeast</option>
					<option value="5">Southwest</option>
				</select>
				<p className="invalid-feedback">{errors.division?.message}</p>

				<div className="d-flex gap-2 py-4 justify-content-end">
					<button className="btn btn-primary" type="submit">
						Save
					</button>
					<button to="/teams" className="btn btn-outline-primary" type="cancel">
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

function TeamCreatePage() {
	return (
		<div className="card flex-column p-3 ">
			<header>
				<h2>Add Team</h2>
			</header>
			<hr />
			<TeamForm />
		</div>
	);
}

function TeamEditPage() {
	const { id: idFromURL } = useParams();
	const teamId = Number(idFromURL);

	return (
		<div className="card flex-column p-3 ">
			<header>
				<h2>Edit Team</h2>
			</header>
			<hr />
			<TeamForm />
		</div>
	);
}

function NotFound() {
	return (
		<>
			<h2>Oh no.</h2>
			<p>The page you requested could not be found. Is there any chance you were looking for one of these?</p>
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
								HOME
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/teams">
								TEAMS
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/players">
								PLAYERS
							</NavLink>
						</li>
					</ul>
				</nav>

				<div className="container mt-4">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="teams" element={<TeamsPage />} />
						<Route path="teams/create" element={<TeamCreatePage />} />
						<Route path="teams/edit/:id" element={<TeamEditPage />} />
						<Route path="players" element={<PlayersPage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
