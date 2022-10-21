let inputTexte = document.querySelector(".texte");
let buttonClickPlus = document.querySelector("button");
let listAtion = document.querySelector(".list")


function ajoutAction (event) {
    event.preventDefault();
    const ajoutDiv = document.createElement("div");
    ajoutDiv.classList.add("ajout");

    const nextAjout = document.createElement("li");
    nextAjout.innerText = inputTexte.value;
    nextAjout.classList.add("ajoutobjets");
    ajoutDiv.appendChild(nextAjout);

    const buttonV = document.createElement("button");
    buttonV.innerHTML = '<i class="fa-solid fa-check"></i>';
    buttonV.classList.add("btnV");
    ajoutDiv.appendChild(buttonV);

    const buttonT = document.createElement("button");
    buttonT.innerHTML = '<i class="fa-solid fa-trash"></i>';
    buttonT.classList.add("btnT");
    ajoutDiv.appendChild(buttonT);
    listAtion.appendChild(ajoutDiv);
    inputTexte.value = "";
    


    
    
}

buttonClickPlus.addEventListener("click" , ajoutAction);


