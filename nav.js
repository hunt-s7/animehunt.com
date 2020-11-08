function navSlide(){
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('.nav-links');
	var navlinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', ()=>{
		

			var home = document.querySelector('.home a');
		var list = document.querySelector('.list a');
		var latest = document.querySelector('.latest a');
		var movies = document.querySelector('.movies a');

		latest.classList.toggle('bg');
			list.classList.toggle('bg');
			movies.classList.toggle('bg');
			home.classList.toggle('bg');
		
		home.addEventListener('click' , () =>{
			latest.classList.toggle('bg');
			list.classList.toggle('bg');
			movies.classList.toggle('bg');
			home.classList.toggle('homec');
			console.log(50);
		});

		latest.addEventListener('click' , () =>{
			home.classList.toggle('bg');
			list.classList.toggle('bg');
			movies.classList.toggle('bg');
			latest.classList.toggle('homec');
			console.log(50);
		});

		list.addEventListener('click' , () =>{
			latest.classList.toggle('bg');
			home.classList.toggle('bg');
			movies.classList.toggle('bg');
			list.classList.toggle('homec');
			console.log(50);
		});
		movies.addEventListener('click' , () =>{
			latest.classList.toggle('bg');
			list.classList.toggle('bg');
			home.classList.toggle('bg');
			movies.classList.toggle('homec');
			console.log(50);
		});




		//Toggle Icon
		nav.classList.toggle('nav-active');
		//Animation
		navlinks.forEach((link, index) =>{
			if(link.style.animation)
			{
				link.style.animation='';
			}
			else
			{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +0.5}s `;
			}
		});
	});
	
}

navSlide();