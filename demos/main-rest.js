const { useState, useEffect } = React;

const BASE_URL = "http://localhost:9000";

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
};

function TeamList() {
	const [busy, setBusy] = useState(false);
	const [teams, setTeams] = useState([]);
	const [errorMessage, setErrorMessage] = useState(undefined);

	async function loadTeams() {
		try {
			setBusy(true);
			let data = await teamAPI.list();
			setTeams(data);
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(function () {
		loadTeams();
	}, []);

	return (
		<div className="list mt-2">
			{busy && <p>Loading...</p>}
			{errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
			{teams?.map((team) => (
				<div className="card p-4" key={team.name}>
					<strong>{team.name}</strong>
					<div>{team.division}</div>
				</div>
			))}
		</div>
	);
}

function App() {
	return (
		<div className="container">
			<TeamList />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
