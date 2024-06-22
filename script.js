/* Dynamiser la page en ajoutant des fonctionnalités interactives*/


// tableau js contenant les données de restaurants fictifs

let restaurants=[
    {
        "nom": "restaurant1",
        "type": "type1",
        "image": "img/image1.jpg"
    },
    {
        "nom": "restaurant2",
        "type": "type2",
        "image": "img/image1.jpg"
    },
    {
        "nom": "restaurant3",
        "type": "type3",
        "image": "img/image1.jpg"
    },
    {
        "nom": "restaurant4",
        "type": "type4",
        "image": "img/image1.jpg"
    },
    {
        "nom": "restaurant5",
        "type": "type5",
        "image": "img/image1.jpg"
    },
    {
        "nom": "restaurant6",
        "type": "type6",
        "image": "img/image1.jpg"
    }
]

// manipulation du DOM

let restaurantGrid=document.querySelector(".restaurant-grid")
// console.log(restaurantGrid)

for(let i=0; i<restaurants.length; i++){

    let carte=document.createElement("div")

    let h3=document.createElement("h3")
    let p=document.createElement("p")
    let img=document.createElement("img")

    h3.innerText=restaurants[i].nom
    p.innerText=restaurants[i].type
    img.src=restaurants[i].image

    carte.append(h3)
    carte.append(p)
    carte.prepend(img)

    restaurantGrid.append(carte)

}

// Utiliser AJAX pour récupérer des donées réelles sur les restaurants depuis l'API Open Data Paris

// let dataAPI=await fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=equipements_de_proximite&q=&rows=10&facet=type_cuisine")
// let restaurants=await dataAPI.json()

// console.log(restaurants)

// J'avais une très mauvaise connexion... Du coup j'ai pas pu vraiment implémenter l'extraction des informations provenant de l'API pour dynamiser la grille de cartes


// Rendre le formulaire de filtre fonctionnel

let allCartes=document.querySelectorAll(".restaurant-grid>div")
let valType=document.querySelectorAll(".restaurant-grid>div p")

function showType(thisType){
    for(let i=0; i<allCartes.length; i++){
        if(valType[i].innerText==thisType){
            allCartes[i].style.display="inherit"
        }
    }
}

filtreType.addEventListener("change", ()=>{
    
    for(let i=0; i<allCartes.length; i++){
        allCartes[i].style.display="none"
    }
    
    let typeCuisine=filtreType.value

    switch (typeCuisine) {
        case "1":
            showType("type1")
            break;

        case "2":
            showType("type2")
            break;

        case "3":
            showType("type3")
            break;

        case "4":
            showType("type4")
            break;

        case "5":
            showType("type5")
            break;

        case "6":
            showType("type6")
            break;
    
        default:
            for(let i=0; i<allCartes.length; i++){
                allCartes[i].style.display="inherit"
            }
            break;
    }

})