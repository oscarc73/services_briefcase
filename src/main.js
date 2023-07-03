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
    '../images/delies-img.webp',
    'Product Portforms',
    '#',
    'GitHub',
    'Services portfolio page.',
    'HTML, CSS, JavaScript');

let delies = new Cards(
    '../images/delies-img.webp',
    'Delies',
    'https://www.delies.co',
    'delies.co',
    'Ecommerce about tools finance.',
    'WordPress, CSS');

let soagency = new Cards(
    '../images/soagency.webp',
    'SoAgency Latam',
    'https://www.soagencylatam.com',
    'soagencylatam.com',
    'Digital marketing service.',
    'WordPress, CSS'
)

let netbook = new Cards(
    '../images/Netbook.webp',
    'General project',
    'https://oscarc73.github.io/oscarc73/',
    'Neetbook',
    'Website about digital marketing services, social media and more.',
    'HTML, CSS'
)

cards.push(productPortforms, delies, soagency, netbook)

let printProducts = (arr) => {
    for (card of arr) {
        const factureCard = document.createElement('div');
        factureCard.classList.add('facture_cards-card');
        factureCard.style.backgroundImage = `url('${card.backgroundImg}')`;
        factureCard.style.backgroundSize = 'cover';

        const factureCardDescription = document.createElement('div');
        factureCardDescription.classList.add('facture_cards-description');

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