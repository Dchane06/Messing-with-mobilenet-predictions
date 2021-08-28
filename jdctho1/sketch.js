let mobilenet;

let malamute;


function modelReady() {
	console.log('Model is ready!!!');

	//mobilenet.predict(malamute, gotResults);
	mobilenet.predict(panda, gotResults);
}

function gotResults(error, results) {
if (error) {
	console.error(error);
} else {
	console.log(results);
	let label = results[0].label;
	fill(0);
	textSize(64);
	text(label, 10, height - 100);
}
}

function imageReady() {
	//image(malamute, 0, 0, width, height);
	image(panda, 0, 0, width, height);

}
function setup() {
	createCanvas(640, 600);
	//malamute = createImg('images/malamute.jpg', imageReady)
	//malamute.hide();

	panda = createImg('images/panda.jpg', imageReady);
	panda.hide();


	background(0);
	// put setup code here

	mobilenet = ml5.imageClassifier('MobileNet', modelReady);


}