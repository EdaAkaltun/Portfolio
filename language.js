const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('c');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
	el.addEventListener('click', () => {
		langEl.querySelector('.active').classList.remove('active');
		el.classList.add('active');

		const attr = el.getAttribute('language');

		// titleEl.textContent = data[attr].title;
		// descrEl.textContent = data[attr].description;

		titleEl.innerHTML = data[attr].title;
		descrEl.innerHTML = data[attr].description;
	});
});

var data = {
	  "English": 
	  {
		"title": "About Me",
		"description": 
			" My name is Eda Akaltun, and I'm 22 years old. I’m currently a first year MSc Building Technology student at the Technical University of Delft and in the meantime active in the Solar Decathlon team of my university as a Climate Systems engineer & contest champion for ventilation.<br><br> I am very enthusiastic about the digitalization of the construction sector, and I also love challenging myself through tackling complex projects. <br> <br>The impact that I wish to make with my provision, is to benefit others positively. Therefore, I find sustainability, charity and healing architecture very important. <br><br> In my free time I love spending time on coding, gaming and graphic design. Or I simply chase my curiosity and find myself doing all sorts of different things such as: woodworking, cultivating, learning about psychology, map design or even app building. "
        },
	  "Nederlands": 
	  {
		"title": "Over Mij",
		"description": 
			"Mijn naam is Eda Akaltun, en ik ben 22 jaar oud. Ik ben momenteel een eerste jaars MSc Building Technology studente aan de Technische Universiteit van Delft en in de tussentijd actief in het Solar Decathlon team van mijn universiteit als Climate Systems Engineer & contest champion voor ventilatie. <br><br> Ik ben erg enthausiast over de digitalisering van de bouwsector, en mijn interesse ligt veelal bij het tacklen van complexe projecten. <br><br> De impact die ik streef te maken met mijn expertise is het profiteren van anderen in een positieve wijze. Hierdoor vind ik duurzaamheid, liefdadigheid en helende architectuur heel belangrijk. <br><br> In mijn vrije tijd vind ik het leuk om mijn tijd te spenderen aan coderen, gamen en graphic design. Of ik ren achter mijn nieuwsgierigheid aan door te leren over verschillende dingen, zoals: houtbewerken, planten, leren over psychologie, map design of zelfs app building."
	  },
	  "Türkçe": 
	  {
		"title": "Hakkımda",
		"description": 
			" kebab kebab kebab go brrr"
	  }
	}

    htmlstring = stringContainingNewLines.replace(/(\r\n|\n|\r)/gm, "<br>");