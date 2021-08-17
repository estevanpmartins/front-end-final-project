'use strict';
var name1 = localStorage.getItem("pname");
var gsize = localStorage.getItem("gsize");
document.getElementById("ss2").innerHTML=name1
var guess1 = '';
var guess2 = '';
var count = 0;
var previousTarget = null;
var delay = 1200;
var rcnt=0;
var wcnt=0;
var game = document.getElementById('game');
var rscore1 = document.getElementById('ss1');
var wscore1 = document.getElementById('ss3');
 
  
if(gsize==8)
{
	var cardsArray = [{
  'name': 'g1',
  'img': 'images/card_1.png'
}, {
  'name': 'g2',
  'img': 'images/card_2.png'
}, {
  'name': 'g3',
  'img': 'images/card_3.png'
}, {
  'name': 'g4',
  'img': 'images/card_4.png'
}
];
	
}	
 else if(gsize==16)
 {
var cardsArray = [{
  'name': 'g1',
  'img': 'images/card_1.png'
}, {
  'name': 'g2',
  'img': 'images/card_2.png'
}, {
  'name': 'g3',
  'img': 'images/card_3.png'
}, {
  'name': 'g4',
  'img': 'images/card_4.png'
}, {
  'name': 'g5',
  'img': 'images/card_5.png'
}, {
  'name': 'g6',
  'img': 'images/card_6.png'
}, {
  'name': 'g7',
  'img': 'images/card_7.png'
}, {
  'name': 'g8',
  'img': 'images/card_8.png'
}
];
 }
else if(gsize==24)
 {
var cardsArray = [{
  'name': 'g1',
  'img': 'images/card_1.png'
}, {
  'name': 'g2',
  'img': 'images/card_2.png'
}, {
  'name': 'g3',
  'img': 'images/card_3.png'
}, {
  'name': 'g4',
  'img': 'images/card_4.png'
}, {
  'name': 'g5',
  'img': 'images/card_5.png'
}, {
  'name': 'g6',
  'img': 'images/card_6.png'
}, {
  'name': 'g7',
  'img': 'images/card_7.png'
}, {
  'name': 'g8',
  'img': 'images/card_8.png'
}, {
  'name': 'g9',
  'img': 'images/card_9.png'
}, {
  'name': 'g10',
  'img': 'images/card_10.png'
}, {
  'name': 'g11',
  'img': 'images/card_11.png'
}, {
  'name': 'g12',
  'img': 'images/card_12.png'
}
];
 } 
else if(gsize==32)
 {
var cardsArray = [{
  'name': 'g1',
  'img': 'images/card_1.png'
}, {
  'name': 'g2',
  'img': 'images/card_2.png'
}, {
  'name': 'g3',
  'img': 'images/card_3.png'
}, {
  'name': 'g4',
  'img': 'images/card_4.png'
}, {
  'name': 'g5',
  'img': 'images/card_5.png'
}, {
  'name': 'g6',
  'img': 'images/card_6.png'
}, {
  'name': 'g7',
  'img': 'images/card_7.png'
}, {
  'name': 'g8',
  'img': 'images/card_8.png'
}, {
  'name': 'g9',
  'img': 'images/card_9.png'
}, {
  'name': 'g10',
  'img': 'images/card_10.png'
}, {
  'name': 'g11',
  'img': 'images/card_11.png'
}, {
  'name': 'g12',
  'img': 'images/card_12.png'
}, {
  'name': 'g13',
  'img': 'images/card_13.png'
}, {
  'name': 'g14',
  'img': 'images/card_14.png'
}, {
  'name': 'g15',
  'img': 'images/card_15.png'
}, {
  'name': 'g16',
  'img': 'images/card_16.png'
}
];
 } 
 else if(gsize==40)
 {
var cardsArray = [{
  'name': 'g1',
  'img': 'images/card_1.png'
}, {
  'name': 'g2',
  'img': 'images/card_2.png'
}, {
  'name': 'g3',
  'img': 'images/card_3.png'
}, {
  'name': 'g4',
  'img': 'images/card_4.png'
}, {
  'name': 'g5',
  'img': 'images/card_5.png'
}, {
  'name': 'g6',
  'img': 'images/card_6.png'
}, {
  'name': 'g7',
  'img': 'images/card_7.png'
}, {
  'name': 'g8',
  'img': 'images/card_8.png'
}, {
  'name': 'g9',
  'img': 'images/card_9.png'
}, {
  'name': 'g10',
  'img': 'images/card_10.png'
}, {
  'name': 'g11',
  'img': 'images/card_11.png'
}, {
  'name': 'g12',
  'img': 'images/card_12.png'
}, {
  'name': 'g13',
  'img': 'images/card_13.png'
}, {
  'name': 'g14',
  'img': 'images/card_14.png'
}, {
  'name': 'g15',
  'img': 'images/card_15.png'
}, {
  'name': 'g16',
  'img': 'images/card_16.png'
}
, {
  'name': 'g17',
  'img': 'images/card_17.png'
}, {
  'name': 'g18',
  'img': 'images/card_18.png'
}, {
  'name': 'g19',
  'img': 'images/card_19.png'
}, {
  'name': 'g20',
  'img': 'images/card_20.png'
}
];
 } 
else if(gsize==48)
 {
var cardsArray = [{
  'name': 'g1',
  'img': 'images/card_1.png'
}, {
  'name': 'g2',
  'img': 'images/card_2.png'
}, {
  'name': 'g3',
  'img': 'images/card_3.png'
}, {
  'name': 'g4',
  'img': 'images/card_4.png'
}, {
  'name': 'g5',
  'img': 'images/card_5.png'
}, {
  'name': 'g6',
  'img': 'images/card_6.png'
}, {
  'name': 'g7',
  'img': 'images/card_7.png'
}, {
  'name': 'g8',
  'img': 'images/card_8.png'
}, {
  'name': 'g9',
  'img': 'images/card_9.png'
}, {
  'name': 'g10',
  'img': 'images/card_10.png'
}, {
  'name': 'g11',
  'img': 'images/card_11.png'
}, {
  'name': 'g12',
  'img': 'images/card_12.png'
}, {
  'name': 'g13',
  'img': 'images/card_13.png'
}, {
  'name': 'g14',
  'img': 'images/card_14.png'
}, {
  'name': 'g15',
  'img': 'images/card_15.png'
}, {
  'name': 'g16',
  'img': 'images/card_16.png'
}
, {
  'name': 'g17',
  'img': 'images/card_17.png'
}, {
  'name': 'g18',
  'img': 'images/card_18.png'
}, {
  'name': 'g19',
  'img': 'images/card_19.png'
}, {
  'name': 'g20',
  'img': 'images/card_20.png'
}
, {
  'name': 'g21',
  'img': 'images/card_21.png'
}, {
  'name': 'g22',
  'img': 'images/card_22.png'
}, {
  'name': 'g23',
  'img': 'images/card_23.png'
}, {
  'name': 'g24',
  'img': 'images/card_24.png'
}
];
 } 
 gsize=gsize-2
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});


var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
	//alert("hi")
  var selected = document.querySelectorAll('.selected');
  var selected1 = document.querySelectorAll('.match').length;
  //alert(selected1)
  if(gsize==selected1)
  {
	
	   rscore1.innerHTML=rcnt
	   wscore1.innerHTML=wcnt
	
  }
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  guess1 = '';
  guess2= '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
	
	//score1.innerHTML=cnt;
  });
};

grid.addEventListener('click', function (event) {


  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      guess1 = clicked.parentNode.dataset.name;
     
      clicked.parentNode.classList.add('selected');
    } else {
      guess2 = clicked.parentNode.dataset.name;
    
      clicked.parentNode.classList.add('selected');
    }

    if (guess1 && guess2) {
      if (guess1 === guess2) {
			rcnt++;
		
        setTimeout(match, delay);
      }
	  else{
		  wcnt++;
		  rcnt--;

	  }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
