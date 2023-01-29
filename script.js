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

function switchChange() {
  console.dir(document.getElementById('flexSwitchCheckDefault').checked);
}

function validateFocusOut() {}

function validateNext() {
  let validateTrueFalse = 0;
  // step 0
  if (document.getElementById('name').value == '') {
    document.getElementById('nameRequired').innerText =
      'This field is required';
    document.getElementById('name').style.border =
      '1px solid var(--strawberry-red)';
    validateTrueFalse = 1;
  } else {
    document.getElementById('nameRequired').innerText = '';
    document.getElementById('name').style.border =
      '1px solid var(--light-gray)';
  }
  if (document.getElementById('email').value == '') {
    document.getElementById('emailRequired').innerText =
      'This field is required';
    document.getElementById('email').style.border =
      '1px solid var(--strawberry-red)';
    validateTrueFalse = 1;
  } else {
    document.getElementById('emailRequired').innerText = '';
    document.getElementById('email').style.border =
      '1px solid var(--light-gray)';
  }
  if (document.getElementById('phone').value == '') {
    document.getElementById('phoneRequired').innerText =
      'This field is required';
    document.getElementById('phone').style.border =
      '1px solid var(--strawberry-red)';
    validateTrueFalse = 1;
  } else {
    document.getElementById('phoneRequired').innerText = '';
    document.getElementById('phone').style.border =
      '1px solid var(--light-gray)';
  }
  // step 0

  var payArcade = document.getElementById('payArcade').checked;
  var payAdvanced = document.getElementById('payAdvanced').checked;
  var payPro = document.getElementById('payPro').checked;

  if (x == 0 && validateTrueFalse == 1) {
    return false;
  } else if (x == 0 && validateTrueFalse == 0) {
    return true;
  } else if ((x == 1 && payArcade) || payAdvanced || payPro) {
    document.getElementById('requiredP').style.display = 'none';
    return true;
  } else {
    document.getElementById('requiredP').style.display = 'block';
    return false;
  }
}

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
  if (x == 0 && validateNext()) {
    document.getElementById('backBtn').classList.remove('no-active');
    document.getElementById('backBtn').classList.add('active');
  }
  if (x == 2 && validateNext()) {
    document.getElementById('nextBtn').classList.remove('active');
    document.getElementById('nextBtn').classList.add('no-active');
    document.getElementById('confirmBtn').classList.remove('no-active');
    document.getElementById('confirmBtn').classList.add('active');
  }
  if (x <= 2 && validateNext()) {
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
