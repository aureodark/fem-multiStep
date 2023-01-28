var x = 0;

var titleSub = [
  {
    title: 'Personal info',
    subtitle: 'Please provide your name, email address, and phone number.',
  },
  {
    title: 'Select your plan',
    subtitle: 'You have the option of monthly or yearly billing',
  },
  {
    title: 'Pick add-ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
  },
  {
    title: 'Finishing up',
    subtitle: 'Double-check everything looks OK before confirming.',
  },
];

document.getElementById('titleContent').innerHTML = titleSub[x].title;
document.getElementById('subtitleContent').innerHTML = titleSub[x].subtitle;
document.getElementById('backBtn').classList.remove('active');
document.getElementById('backBtn').classList.add('no-active');

function handleClickBack(param) {
  console.log(param);
  document.getElementById('changeBtn').setAttribute('disabled', '');
  if (x == 1) {
    document.getElementById('backBtn').classList.remove('active');
    document.getElementById('backBtn').classList.add('no-active');
  }
  if (x == 3) {
    document.getElementById('nextBtn').classList.remove('no-active');
    document.getElementById('nextBtn').classList.add('active');
    document.getElementById('confirmBtn').classList.remove('active');
    document.getElementById('confirmBtn').classList.add('no-active');
  }
  if (x >= 1) {
    // noactive step
    let y = x;
    document.getElementById('step' + y).classList.remove('active');
    document.getElementById('step' + y).classList.add('no-active');

    // active step
    if (param == undefined) {
      x--;
    } else {
      x = x - 2;
    }

    document.getElementById('stepCheck' + y).classList.remove('step-active');
    document.getElementById('stepCheck' + x).classList.add('step-active');

    document.getElementById('titleContent').innerHTML = titleSub[x].title;
    document.getElementById('subtitleContent').innerHTML = titleSub[x].subtitle;

    document.getElementById('step' + x).classList.remove('no-active');
    document.getElementById('step' + x).classList.add('active');

    console.log(x);
  } else {
    return console.log('minimo');
  }
}
function handleClickGo() {
  document.getElementById('changeBtn').removeAttribute('disabled', '');
  if (x == 0) {
    document.getElementById('backBtn').classList.remove('no-active');
    document.getElementById('backBtn').classList.add('active');
  }
  if (x == 2) {
    document.getElementById('nextBtn').classList.remove('active');
    document.getElementById('nextBtn').classList.add('no-active');
    document.getElementById('confirmBtn').classList.remove('no-active');
    document.getElementById('confirmBtn').classList.add('active');
  }
  if (x <= 2) {
    // noactive step
    let y = x;
    document.getElementById('step' + y).classList.remove('active');
    document.getElementById('step' + y).classList.add('no-active');

    // active step
    x++;
    document.getElementById('stepCheck' + y).classList.remove('step-active');
    document.getElementById('stepCheck' + x).classList.add('step-active');

    document.getElementById('titleContent').innerHTML = titleSub[x].title;
    document.getElementById('subtitleContent').innerHTML = titleSub[x].subtitle;
    document.getElementById('step' + x).classList.remove('no-active');
    document.getElementById('step' + x).classList.add('active');
    console.log(x);
  } else {
    return console.log('máximo');
  }
}
