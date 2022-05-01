
// **Milestone 1**
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.



createIcons();

function createIcons(){
  
  // for(let icon of icons){
    icons.forEach((icon) => {

      const {name, prefix, type, family, color} = icon;
      const cards =
      `
        <div class="card k_card d-flex flex-column">
          <i class="${family} ${prefix}${name}" style="color: #${color};"></i>
          <div class="icon_text">${name}</div>
        </div>
      `
      document.querySelector('.k_container').innerHTML += cards;
      
    })
  //}
}


















// **Milestone 2**
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// **Milestone 3**
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.