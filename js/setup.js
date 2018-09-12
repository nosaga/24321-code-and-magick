'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [];

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

wizards = generateWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

