const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlide = 0;

const banner = document.querySelector("#banner");

// Attacher des addEventListener aux flèches de navigation
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);

// Fonction pour afficher la image et tagline
function showSlide(index) {
    const slide = slides[index];
    const tagLineText = slide.tagLine;
    const tagLineContainer = document.getElementById("tagLineContainer");

    // Diviser la ligne de légende en deux moitiés à un mot complet
    const demiLongueur = tagLineText.lastIndexOf(" ", Math.floor(tagLineText.length / 2));
    const premiereMoitie = tagLineText.substring(0, demiLongueur);
    const deuxiemeMoitie = tagLineText.substring(demiLongueur);

    // Créer un élément <p> pour la première moitié de la légende
    const pElement = document.createElement("p");
    pElement.textContent = premiereMoitie;

    // Créer un élément <span> pour la deuxième moitié de la légende
    const spanElement = document.createElement("span");
    spanElement.textContent = deuxiemeMoitie;


   tagLineContainer.innerHTML = tagLineText

    // Mettre à jour l'image du carrousel
    const carouselImage = document.querySelector(".banner-img");
    carouselImage.src = `./assets/images/slideshow/${slide.image}`;
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateDots();
    console.log("Clic sur le bouton Suivant");
}

// Fonction pour passer à la diapositive précédente
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    updateDots();
    console.log("Clic sur le bouton Précédent");
}

// Afficher la diapositive initiale et les points lors du chargement de la page
showSlide(currentSlide);

const dotsContainer = document.querySelector(".dots"); // Sélectionner le conteneur des points

// Fonction pour créer et ajouter les points
function createDots() {
    slides.forEach((slide, index) => { 
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === currentSlide) {
            dot.classList.add("dot_selected"); // Ajouter une classe sélectionnée au point de la diapositive actuelle
        }
        dot.addEventListener("click", () => { // sert de gestionnaire d'événements. Cette fonction sera exécutée lorsque l'événement "click" se produit.
            currentSlide = index;
            showSlide(currentSlide);
            updateDots(); // Mettre à jour les styles des points
        });
        dotsContainer.appendChild(dot);
    });
}

// Fonction pour mettre à jour les styles des points en fonction de la diapositive actuelle
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {    // repeter sur chaque élément dans le tableau retourné par querySelectorAll().
        if (index === currentSlide) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected"); // Cela désélectionne visuellement les points de navigation qui ne correspondent pas à la diapositive actuelle.
        }
    });
}

// Appeler createDots pour générer les points initiaux
createDots();


// Afficher la première diapositive et les points lors du chargement de la page
showSlide(currentSlide);
updateDots();
