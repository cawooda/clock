const $clockFace = $('#clockface');

const $date = $(`#date`);
const $time = $(`#time`);

const $button1 = ('<button class="flex items-center px-4 py-2 font-medium text-sm text-white bg-teal-700 hover:bg-teal-400 rounded-md"><p>New Card</p></button>');
const $container1 = $('#container1');
$container1.append($button1);

const $button2 = ('<button class="flex items-center px-4 py-2 font-medium text-sm text-white bg-teal-700 hover:bg-teal-400 rounded-md"><p>New Card</p></button>');
const $container2 = $('#container2');
$container2.append($button2);

const $button3 = ('<button class="flex items-center px-4 py-2 font-medium text-sm text-white bg-teal-700 hover:bg-teal-400 rounded-md"><p>New Card</p></button>');
const $container3 = $('#container3');
$container3.append($button3);


const $button4 = ('<button class="flex items-center px-4 py-2 font-medium text-sm text-white bg-teal-700 hover:bg-teal-400 rounded-md"><p>New Card</p></button>');
const $container4 = $('#container4')
$container4.append($button4);






$container1.append;



let nIntervId;

function changeClock() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(updateClock, 1000);
  }
}



function updateClock() {
    $date.text(dayjs().format('dddd D MMMM'));
    $time.text(dayjs().format('HH-MM-ss'));
  }

  changeClock();