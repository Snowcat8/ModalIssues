import React, { Component } from "react";
import SlideData from "./slidedata";
const { useState } = React;

//IMAGE ARRAY
const images = SlideData;

function ImageGallery() {
	const [imageToShow, setImageToShow] = useState("");
	const [lightboxDisplay, setLightBoxDisplay] = useState(false);

	//looping through our images array to create img elements
	const imageCards = images.map((image) => (
		<img className="image-card" onClick={() => showImage(image)} src={image} />
	));

	//function to show a specific image in the lightbox, amd make lightbox visible
	const showImage = (image) => {
		setImageToShow(image);
		setLightBoxDisplay(true);
	};

	//hide lightbox
	const hideLightBox = () => {
		setLightBoxDisplay(false);
	};

	//show next image in lightbox
	const showNext = (e) => {
		e.stopPropagation();
		let currentIndex = images.indexOf(imageToShow);
		if (currentIndex >= images.length - 1) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = images[currentIndex + 1];
			setImageToShow(nextImage);
		}
	};

	//show previous image in lightbox
	const showPrev = (e) => {
		e.stopPropagation();
		let currentIndex = images.indexOf(imageToShow);
		if (currentIndex <= 0) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = images[currentIndex - 1];
			setImageToShow(nextImage);
		}
	};

	return (
		<>
			<div>{imageCards}</div>
			{lightboxDisplay ? (
				<div id="lightbox" onClick={hideLightBox}>
					<button onClick={showPrev}>=⭢</button>
					<img id="lightbox-img" src={imageToShow}></img>
					<button onClick={showNext}>⭢=></button>
				</div>
			) : (
				""
			)}
		</>
	);
}
export default ImageGallery;
