const factureCards = document.querySelector(".facture_cards");

//Creating card products/services
let cards = []

class Cards {
    constructor(backgroundImg, title, link, website, description, dev) {
        this.backgroundImg = backgroundImg;
        this.title = title;
        this.link = link;
        this.website = website;
        this.description = description;
        this.dev = dev;
    }
}

let productPortforms = new Cards(
    'https://i.ibb.co/PD2dGfJ/portform.webp',
    'Product Portforms',
    'https://github.com/oscarc73/services_briefcase',
    'GitHub',
    'Services portfolio page.',
    'HTML, CSS, JavaScript');

let delies = new Cards(
    'https://i.ibb.co/0G9Pbhg/delies-img.webp',
    'Delies',
    'https://www.delies.co',
    'delies.co',
    'Ecommerce about tools finance.',
    'WordPress, CSS');

let soagency = new Cards(
    'https://i.ibb.co/6Y2fvGK/soagency.webp',
    'SoAgency Latam',
    'https://www.soagencylatam.com',
    'soagencylatam.com',
    'Digital marketing service.',
    'WordPress, CSS'
)

let netbook = new Cards(
    'https://i.ibb.co/Wg97yNW/Netbook.webp',
    'General project',
    'https://oscarc73.github.io/oscarc73/',
    'Neetbook',
    'Website about digital marketing services, social media and more.',
    'HTML, CSS'
)

let workshopAPI = new Cards(
    'https://i.ibb.co/2M83ZqH/proyect-API.jpg',
    'Workshop Climate API',
    'https://oscarc73.github.io/workshop-API/',
    'Workshop API',
    'workshop on calling 3 weather APIs, names of countries and their flags',
    'JavaScript, CSS, HTML'
)

let newsletter_fomr = new Cards(
    'https://i.ibb.co/RCL1WjZ/proyect-newsletter-form.png',
    'Newsletter form',
    'https://oscarc73.github.io/newsletter_form/',
    'Newsletter Form',
    'Simple proyect newsletter form developed widh css, html and javascript',
    'CSS, HTML, JavaScript'
)

let estudiandoVirtual = new Cards (
    'https://i.ibb.co/smBN0TT/estudiandovirtual-1.webp',
    'University e-commerce',
    'https://estudiandovirtual.uao.edu.co/',
    'estudiandovirtual.uao.edu.co',
    'Proposal for a virtual store and sale of courses for universities',
    'WordPress, CSS'
)

let posgradosUAO = new Cards (
    'https://i.ibb.co/PhFNrKj/posgrados-UAO-1.webp',
    'Posgrados UAO',
    'https://posgrados.uao.edu.co/',
    'posgrados.uao.edu.co',
    'Proposal for a university postgraduate website for the UAO university',
    'WordPress, CSS'
)

let indigoClinic = new Cards (
    'https://i.ibb.co/F70MF6W/indigo.webp',
    'Indigo Medical Clinic',
    'https://indigo-clinic.com/',
    'www.indigo-clinic.com',
    'A simple services website about a clinic of Dubai',
    'WordPress'
)

cards.push(productPortforms, delies, soagency, netbook, workshopAPI, newsletter_fomr, estudiandoVirtual, posgradosUAO, indigoClinic)

let printProducts = (arr) => {
    for (card of arr) {
        const factureCard = document.createElement('div');
        factureCard.classList.add('facture_cards-card');
        factureCard.style.backgroundImage = `url('${card.backgroundImg}')`;
        factureCard.style.backgroundSize = 'cover';

        const factureCardDescription = document.createElement('div');
        factureCardDescription.classList.add('facture_cards-description', 'inactive');

        const titleProduct = document.createElement('h3');
        titleProduct.innerText = card.title

        const ulList = document.createElement('ul');
        ulList.innerHTML = `
    <li><b>Website:</b> 
        <a href="${card.link}" target="_blank" rel="noopener">
           ${card.website}</a></li>
    <li><b>Description:</b>
       ${card.description} </li>
     <li><b>Dev:</b>
        ${card.dev} </li>
    `
        factureCardDescription.append(titleProduct, ulList)
        factureCard.appendChild(factureCardDescription)
        factureCards.appendChild(factureCard)
    }

}

printProducts(cards)

//Active or inactive description on cards
const productCards = document.querySelectorAll('div.facture_cards-card');

productCards.forEach(card => {
    card.addEventListener('click', toggleCardDescrip);
});

function toggleCardDescrip() {
    console.log('active or inative cards Description')
    this.querySelector('.facture_cards-description').classList.toggle('inactive');
};

/* 
En el tercer intento se agregó un evento de clic a cada elemento productCard utilizando el método forEach. Dentro de la función toggleCardDescrip, se utiliza this para hacer referencia al elemento productCard específico al que se hizo clic.

Luego, utilizando this.querySelector('.facture_cards-description'), se selecciona el elemento hijo con la clase facture_cards-description dentro del productCard al que se hizo clic. Después, se aplica la clase inactive al elemento seleccionado utilizando classList.toggle('inactive').

De esta manera, solo se aplicará la clase 'inactive' al elemento facture_cards-description dentro del productCard al que se le haya hecho clic. Los demás elementos permanecerán sin cambios.
*/


/* -----o-----
Primer intento con querySelector() y segundo con querySelectorAll

const productCards = document.querySelector('div.facture_cards-card');
const cardsDescriptions = document.querySelector('div.facture_cards-description')

primer intento

prductCards.addEventListener('click', toggleCardDescrip);

 function toggleCardDescrip() {
    console.log('active or inative cards Description')
    cardsDescriptions.classList.toggle('inactive')
}

En este primer intento solo estaba seleccionando las primeras tarjetas y funcionaba solo para las primeras

Segundo intento


const productCards = document.querySelectorAll('div.facture_cards-card');
const cardsDescriptions = document.querySelectorAll('div.facture_cards-description')

productCards.forEach(card => {
    card.addEventListener('click', toggleCardDescrip);
});

function toggleCardDescrip() {
    console.log('active or inative cards Description')
    cardsDescriptions.forEach(description => {
        description.classList.toggle('inactive');
    });
}; 

En el segundo intento estaba seleccionando a todas las tarjetas y por cada click me aparecia en todas. Lo que realmente queria era que a la tarjeta que le diera click me mostrara la descripcion.
 -----o-----
 */