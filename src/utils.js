export function pick_random(array) {
	const index = Math.floor(array.length * Math.random());
	return array[index];
}

export function sleep(ms) {
	return new Promise(fulfil => {
		setTimeout(fulfil, ms);
	});
}

export function load_image(src) {
	return new Promise((fulfil, reject) => {
		const img = new Image();
		img.onload = () => fulfil(img);
		img.onerror = reject;
		img.src = src;
	});
}