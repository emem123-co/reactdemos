const { useState, useEffect } = React;

const nbaTeams = [
	{ name: "Los Angeles Lakers", division: "Pacific" },
	{ name: "Chicago Bulls", division: "Central" },
	{ name: "Miami Heat", division: "Southeast" },
	{ name: "Dallas Mavericks", division: "Southwest" },
];

const teamAPI = {
	list() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(nbaTeams);
			}, 1000);
		});
	},
};

function App() {
	const [busy, setBusy] = React.useState(false);
	const [teams, setTeams] = React.useState([]);

	async function loadTeams() {
		setBusy(true);
		setTeams(await teamAPI.list());
		setBusy(false);
	}

	useEffect(() => {
		loadTeams();
	}, []);

	return (
		<div>
			<header>
				<h1>Teams</h1>
			</header>
			<div className="list">
				{busy && (
					<div>
						<span>
							Loading teams...
							<img width="27rem" src="images/3077534_18679.svg" alt="basketball" />
							<img width="27rem" src="images/3077534_18679.svg" alt="basketball" />
							<img width="27rem" src="images/3077534_18679.svg" alt="basketball" />
						</span>
					</div>
				)}
				{teams.map((team) => (
					<div className="card">
						<div>{team.name}</div>
						<small>{team.division}</small>
					</div>
				))}
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
