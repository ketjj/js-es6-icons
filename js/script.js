
// **Milestone 1**
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

createIcons(icons);


// Creare gli oggeti con ciclo forEach passando il giusto array di icone da usare

function createIcons(array){
  
  // for(let icon of icons){
    array.forEach((icon) => {

      const {name, prefix, type, family, color} = icon;
      const cards =
      `
        <div class="card k_card d-flex flex-column">
          <i class="${family} ${prefix}${name} ${type}" style="color: ${color};"></i>
          <div class="icon_text">${name}</div>
        </div>
      `
      document.querySelector('.k_container').innerHTML += cards;
      
    });
  //}
}

// **Milestone 2**
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// **Milestone 3**
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const animals = icons.filter(element => (element.type == 'animal'));
const vegetables = icons.filter(element => (element.type == 'vegetable'));
const users = icons.filter(element => (element.type == 'user'));
// console.log(animals,'---->animals');


const changeArraies = document.getElementById('exampleFormControlSelect1');

// addEventListner - 'change'
changeArraies.addEventListener('change', function(){
  
  const container = document.querySelector('.k_container');
  reset(container);
  
   if(changeArraies.value == '0'){
    //  console.log(changeArray.value, 'siamo dentro');
     createIcons(icons);
   }else if(changeArraies.value == '1'){
    createIcons(animals);
   }else if(changeArraies.value == '2'){
    createIcons(vegetables);
   }else if(changeArraies.value == '3'){
    createIcons(users);
   }
         
});

//Function Reset
function reset(element){
  element.innerHTML = '';
}












