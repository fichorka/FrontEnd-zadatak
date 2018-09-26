//Jquery document ready function:
$(function () {
	
	//Declaring 'top-scope' variables:
	const $slider1 = $(".slider1");
	const $slider2 = $(".slider2");
	const $sliders = [$slider1, $slider2];
	const $buttons = $(".btn-left, .btn-right");
	const imageName = 'slider-image-';
	const imagePath = 'distr/assets/';
	
	//Dynamicly inserting images:
	for (let i = 1; i < 10; i++) {
		let pick;
		if (i % 2 == 1) {
			pick = 0;
		}
		else {
			pick = 1;
		}
		$sliders[pick].append("<img src=\""+imagePath+imageName+i+".jpg\" alt=\"\">");
	}
	
	
	//Function called on slider button press:
	function startSlidingAnimation(btn) {
		const animationSpeed = 400;
		let image;
		let $slider;
		let width;
		
		//loop runs twice and selects both sliders, each iteration calls animation function
		for (let i = 0; i < 2; i++) {
			$slider = $sliders[i];
			
			if (btn == 'left') {
				image = $slider.find("img:last-child");
			}
			else {
				image = $slider.find("img:first-child");
			}
			
			width = image.css('width');
			animation(image, width, $slider); // -> call to animation
		}
		
		//Animation function is called twice (for each slider)
		function animation(image, width, $slider) {
			image.animate({
				'width': 0,
				'margin-left': 0
			}, animationSpeed, () => {move($slider, image);}) // -> call to move()
			.animate({
				'width': width,
				'margin-left': '10px'
			}, animationSpeed, () => {});
		}
		
		//move function prepends/appends an image to start/end of slider:
		function move($slider, image) {
			if (btn == "left") {
				$slider.prepend(image);
			}
			else {
				$slider.append(image);
			}
		}
		
		//enables slider buttons after animation ends:
		setTimeout(() => {
			$buttons.removeAttr('disabled');
		}, animationSpeed*2+10);
	}
	
	
	//Event handlers for slider buttons:
	$(".btn-left").click( () => {
		$buttons.attr('disabled', true);
		startSlidingAnimation("left");
	});

	$(".btn-right").click( () => {
		$buttons.attr('disabled', true);
		startSlidingAnimation("right");
	});
});
