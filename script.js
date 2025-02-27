let button=document.querySelector('.btn');
let form=document.querySelector('.form');
let input=document.querySelector('.input');
let message=document.querySelector('.message');
let link=document.querySelector('.link');
let essaie1=document.querySelector('.essaie1');
let essaie=document.querySelector('.essaie');


let trys=8;

const secretNumber=Math.floor(Math.random()*100);

essaie1.innerText=`${trys}`;
button.addEventListener('click', function () {
    if (input.value!="") {
        if (!isNaN(input.value)) {
            trys--;
            essaie1.innerText=`${trys}`;
            essaie.innerText=`restant`

            if ((input.value < secretNumber) && (Math.max(input.value,secretNumber)-Math.min(input.value,secretNumber))>=50){
                message.innerText=`Votre nombre est inferieur au nombre magique et trop inferieur`;
                message.style.color="red";
            } else if ((input.value < secretNumber) && (Math.max(input.value,secretNumber)-Math.min(input.value,secretNumber))<=50){
                message.innerText=`Votre nombre est inferieur au nombre magique `;
                message.style.color="red";
            }
            else if((input.value > secretNumber) && (Math.max(input.value,secretNumber)-Math.min(input.value,secretNumber))<=50){
                message.innerText=`Votre nombre est superieur au nombre magique`;
                message.style.color="red";
            } else if ((input.value > secretNumber) && (Math.max(input.value,secretNumber)-Math.min(input.value,secretNumber))>=50){
                message.innerText=`Votre nombre est superieur au nombre magique et trop superieur`;
                message.style.color="red";
            }
             else if (input.value == secretNumber) {
                message.innerText=`Bravo tu as trouvé le nombre magique qui est ${secretNumber}`;
                message.style.color="green";
                form.style.display="none";
                link.style.display="flex";
            }
            if (trys==0) {
                message.innerText=`Vous avez perdus`;
                message.style.color="red";
                form.style.display="none";
                link.style.display="flex"
            }
        } else {
            message.innerText=`le champs ne contient pas un nombre`;
            message.style.color="red";
        }
        
    } else {
        message.innerText=`le champs est vide `;
        message.style.color="red";
    }
}
)

const afficherPoppup=()=>{
    let boitePopupJs=document.querySelector('.boitePopupJs');
    boitePopupJs.classList.toggle('active');
    setTimeout(() => {
        boitePopupJs.classList.remove('active');
    }, 2000);
}