'use strict';

var userDialog = document.querySelector('.setup');
/*userDialog.classList.remove('hidden');*/

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandom = function (colors) {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

var getRandomName = function (randomName, randomSurname) {
  randomName = function () {
    return getRandom(names);
  };
  randomSurname = function () {
    return getRandom(surnames);
  };
  return randomName() + ' ' + randomSurname();
};

var getCoatColor = function () {
  return getRandom(coatColor);
};

var getEyesColor = function () {
  return getRandom(eyesColor);
};

var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push(
        {
          name: getRandomName(),
          coatColor: getCoatColor(),
          eyesColor: getEyesColor()
        }
    );
  }
  return wizards;
};

var wizards = generateWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var setWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return similarListElement.appendChild(fragment);
};

var showDialog = function () {
  return userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

setWizards();
showDialog();

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var form = document.forms[0];
var coatInput = form.elements[2];
var eyesInput = form.elements[3];
var fireballInput = form.elements[4];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getCoatColor();
  coatInput.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getEyesColor();
  eyesInput.value = wizardEyes.style.fill;
});

setupFireball.addEventListener('click', function () {
  setupFireball.style.backgroundColor = getRandom(fireballColor);
  fireballInput.value = setupFireball.style.backgroundColor;
});
