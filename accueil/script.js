const carousel = () => {
	images.forEach(image => {
		image.style.display = 'none';
	});
	slideIndex++;
	if (slideIndex > images.length) {
		slideIndex = 1;
	}
	images[slideIndex - 1].style.display = 'block';
	setTimeout(carousel, 2000); // Change image every 2 seconds
};

const images = Array.from(document.getElementsByClassName('mySlides'));
let slideIndex = 0;
carousel();

const form = document.querySelector('form');
form.addEventListener('submit', e => {
	e.preventDefault();
	const localisation = document.getElementsByName('where')[0].value;
	const begin_date = document.getElementsByName('dep')[0].value;
	const end_date = document.getElementsByName('arr')[0].value;
	const bedroom = document.getElementsByName('chambre')[0].value;

	window.location = `/recherche.html?where=${localisation}&dep=${begin_date}&arr=${end_date}&chambre=${bedroom}`;
	// const data = await (await fetch(`http://localhost:1337/api/houses?filters[area][$eq]=${localisation}`)).json();
});
