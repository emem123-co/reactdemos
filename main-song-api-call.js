const { useState, useEffect } = React;

const songs = [
	{
		songID: 1,
		title: "Levitating",
		artist: "Dua Lipa",
		album: "Future Nostalgia",
		year: 2020,
		genre: "Pop",
		durationInSeconds: 203,
	},
	{
		songID: 2,
		title: "Blinding Lights",
		artist: "The Weeknd",
		album: "After Hours",
		year: 2019,
		genre: "Synthpop",
		durationInSeconds: 200,
	},
	{
		songID: 3,
		title: "Good 4 U",
		artist: "Olivia Rodrigo",
		album: "SOUR",
		year: 2021,
		genre: "Pop Punk",
		durationInSeconds: 178,
	},
	{
		songID: 4,
		title: "Stay",
		artist: "The Kid LAROI, Justin Bieber",
		album: "F*ck Love 3: Over You",
		year: 2021,
		genre: "Pop",
		durationInSeconds: 141,
	},
	{
		songID: 5,
		title: "Montero (Call Me By Your Name)",
		artist: "Lil Nas X",
		album: "Montero",
		year: 2021,
		genre: "Pop Rap",
		durationInSeconds: 137,
	},
];

const songAPI = {
	list() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(songs);
			}, 1000);
		});
	},
};

function App() {
	return <SongList />;
}

function SongList() {
	const [songs, setSongs] = useState([]);
	const [busy, setBusy] = useState(false);


	async function loadSongs() {
		setBusy(true);
      let data = await songAPI.list();
		setSongs(data);
      setBusy(false);
	}

	useEffect( () => { //cannot have async function as the useEffect function because ot returns something other than a promise, which is what a useEffect function needs to return. So, wrapped in an anonymous function will not give an error. 
		loadSongs();
	}, []);

	return (
		<div>
			<header>
				<h1>Songs</h1>
			</header>
			<div className="list">
            {busy && <div>Loading...</div>}
				{songs.map((song) => (
					<div className="card" key={song.songID}>
						<strong>{song.title}</strong>
						<div>{song.artist}</div>
						<small>{song.year}</small>
					</div>
				))}
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
