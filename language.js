const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('c');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
	el.addEventListener('click', () => {
		langEl.querySelector('.active').classList.remove('active');
		el.classList.add('active');

		const attr = el.getAttribute('language');

		titleEl.textContent = data[attr].title;
		descrEl.textContent = data[attr].description;
	});
});

var data = {
	  "English": 
	  {
		"title": "About Me",
		"description": 
			" My name is Eda Akaltun. I’m currently a first year MSc Building Technology student at the Technical University of Delft and in the meantime active in the Solar Decathlon team of my university as a Climate Systems engineer & contest champion for ventilation."
             + "\n" +
            " I am very enthusiastic about the digitalization of the construction sector, and I also love challenging myself through tackling complex projects."
            + "\n" + 
            "The impact that I wish to make with my provision, is to benefit others positively. Therefore, I find sustainability, charity, and healing architecture very important."
            + "\n" + 
            "In my free time I love entertaining the procrastination monkey in my brain through spending time on coding, gaming and graphic design. Or I simply chase my curiosity and find myself doing all sorts of different things such as: woodworking, cultivating, learning about psychology, map design, digital art or even app building."
        },
	  "Nederlands": 
	  {
		"title": "Over Mij",
		"description": 
			"..."
	  },
	  "Türkçe": 
	  {
		"title": "Hakkımda",
		"description": 
			".."
	  }
	}

    htmlstring = stringContainingNewLines.replace(/(\r\n|\n|\r)/gm, "<br>");