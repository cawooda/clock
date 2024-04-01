const $clockFace = $('#clockface');

const $date = $(`#date`);
const $time = $(`#time`);

const $modalForm = $('#modal-form');

$modalForm.dialog();

const $main = $('#main');


function setupContainers(){
  for (let x = 1; x < 5 ; x++) {
    const $appContainer = $(`<div class="flex flex-1 flex-row items-start justify-stretch h-64 border-dotted border-2 border-red-700" id="container1"></div>`);
    const $container = $(`<div id="container-${x}" class="flex flex-1 flex-col w-full h-full border-solid border-4 border-teal-400 font-extrabold"></div>`);
    const $button = $(`<button id="button-${x}" data-containerid="container-${x}" class="flex items-center px-4 py-2 font-medium text-sm text-white bg-teal-700 hover:bg-teal-400 rounded-md">New Card</button>`);
    const $containerHeading = $(`<div class="p-5"><h3 id="containerHeading-${x} class="text-3xl  bg-teal-200">Container ${x}</h3></div>`);
    
    $container.append($containerHeading);
    $container.append($button);
    $appContainer.append($container);
    $main.append($appContainer);
    
  }
}



function showNewCardModal(containerid){
  $(`#${containerid}`).append(createCard());
}

function createCard() {
  const $card = $(`<div class="rounded-full">card</div>`);
  return $card;
}

function handleMainClick(e) {
  const $item = $(e.target);
  showNewCardModal($item.data('containerid'));
  
}

setupContainers();

$main.on('click',handleMainClick);

let nIntervId;

function changeClock() {
/*   if (!nIntervId) {
    nIntervId = 
  } */
}


setInterval(updateClock, 1000);

function updateClock() {
    $date.text(dayjs().format('dddd D MMMM'));
    $time.text(dayjs().format('HH-MM-ss'));
  }

  changeClock();