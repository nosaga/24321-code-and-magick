'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_Y = 240;
var GAP = 10;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;
var SIGN_Y = BAR_Y + GAP * 2;
var SIGN_Y_TOP = BAR_Y - GAP;
var BAR_GAP = BAR_WIDTH + GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElem = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElem) {
      maxElem = arr[i];
    }
  }

  return maxElem;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '18px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP * 5);

  ctx.font = '16px PT Mono';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random() * 100) + '%,' + Math.floor(Math.random() * 100) + '%' + ')';
    }

    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, SIGN_Y);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, (BAR_HEIGHT * times[i] / maxTime) + SIGN_Y_TOP);
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};


