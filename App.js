import React, { useState } from "react";
import "./App.css";
import ImageGallery from "./component/lightbox";

function App(props) {
	const [visible, setVisible] = useState(false);

	const showImage = () => {
		setVisible(true);
	};
	const hideImage = () => {
		setVisible(false);
	};

	if (visible === true) {
		return (
			<div>
				<p className="modal display-block">
					<ImageGallery />
				</p>
				<button onClick={hideImage}>Close me</button>
			</div>
		);
	}

	return (
		<div>
			<button onClick={showImage}>Click Me</button>
		</div>
	);
}
export default App;
