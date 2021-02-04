const reviews = [
	{
		id: 1,
		name: "Márcia Gouveia",
		text: "Quero aqui fazer um agradecimento a todos os envolvidos neste grande empreendimento chamado \"Intercâmbio Inglaterra\", que, para os nossos filhos, abrirão muitas portas de trabalho. Também e principalmente agradecer a Deus que nos permitiu fazer esta viagem maravilhosa e agradecer a nossa querida Consuelo que tanto se empenha para que isso aconteça da melhor forma possível e que trabalha muito. Obrigada Deus, obrigada Consuelo, obrigada, obrigada e obrigada!!!!",
	},
	{
		id: 2,
		name: "Jorge Felipe",
		text: "Que Jesus possa abençoar a viagem de todos vocês. Aproveitem todos os dias pra aprender e quando tiverem um tempinho não esqueçam de agradecer ao Senhor Jesus Cristo por essa grande oportunidade.",
	},
	{
		id: 3,
		name: "Consuelo Santos",
		text: "Realizamos com louvor o 25º CULTURA TRIP INGLATERRA 2020! Com a Graça de Deus, sempre nos guiando, cumprimos com sucesso e relevância todas as etapas de mais um Intercâmbio!! Cada viagem é única, cada grupo é único! Poderíamos reunir em um livro todas as nossas experiências, que a cada ano também são únicas! Nós, os personagens, também somos únicos, pois cada um de nós tem sua própria essência!! Vivemos com intensidade todos os nossos momentos! Embora o tempo possa ter passado relativamente rápido, a sensação é de que já estamos tanto tempo juntos!! E ao mesmo tempo afastados da Família do Brasil! Sim, porque formamos aqui nossa própria Família. Em tão curto período de tempo, como expandimos as nossas mentes!! Como entendemos melhor hoje as diferenças e o quão rápido nos adaptamos a elas!! Novos horizontes se abrirão para nós a partir desse Intercâmbio!!",
	}
];

// select items

const author = document.getElementById("person-name");
const review = document.getElementById("person-review");

const prevBtn = document.querySelector('#arrowleft');
const nextBtn = document.querySelector('#arrowright');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
	showPerson(currentItem);
});

// show person based on item
function showPerson(person){
	const item = reviews[person];
	author.textContent = item.name;
	review.textContent = item.text;
};

// show next person
nextBtn.addEventListener('click', function(){
	currentItem++;
	if(currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener('click', function(){
	currentItem--;
	if(currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});