// const okUrl = "http://localhost:9000/teams"; //this url points to the backend address
// const notFoundErrorUrl = "https://httpstat.us/404";
// const forbiddenErrorUrl = "https://httpstat.us/403";
// const serverErrorUrl = "https://httpstat.us/500";

// // const urls here
// function translateStatusToErrorMessage(status) {
// 	switch (status) {
// 		case 401:
// 			return "Please sign in again.";
// 		case 403:
// 			return "You do not have permission to view the data requested.";
// 		default:
// 			return "There was an error saving or retrieving data.";
// 	}
// }

// async function checkStatus(response) {
// 	if (response.ok) return response;

// 	const httpError = {
// 		status: response.status,
// 		statusText: response.statusText,
// 		url: response.url,
// 		body: await response.text(),
// 	};
// 	console.log(`http error status: ${JSON.stringify(httpError, null, 1)}`);

// 	let errorMessage = translateStatusToErrorMessage(httpError.status);
// 	throw new Error(errorMessage);
// }

// function parseJSON(response) {
// 	return response.json();
// }

// // async function loadTeams() {
// // 	let response = await fetch(okUrl).then(checkStatus).then(parseJSON);
// // 	if (!response.ok) throw new Error(response.statusText);
// // 	let teams = await response.json();
// // 	console.log(teams);
// // }
// // loadTeams();

// async function loadTeams() {
//    try {
//       let response = await fetch(okUrl).then(checkStatus).then(parseJSON);
//    }
// }
// loadTeams();
