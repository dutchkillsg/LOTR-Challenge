console.log("LINKED");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
// Our Setting
var lands = ['The Shire', 'Rivendell', 'Mordor'];
// Starter code for the body
var body = document.querySelector('body');

function makeMiddleEarth() {
    var middleEarth = document.createElement('section')
    for (i=0,len=lands.length; i<len;i++){
    	
      var land =document.createElement('article')
    	var h1 = document.createElement('h1')
    	var text= document.createTextNode(lands[i])
    	h1.appendChild(text)
    	land.appendChild(h1)
    	middleEarth.appendChild(land)
    }
    
    body.appendChild(middleEarth)
   
}

makeMiddleEarth();
var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  
  var hobbitList = document.createElement('ul');
  for(var i = 0, len = hobbits.length; i < len; i++){
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
    var textNode = document.createTextNode(hobbits[i]);
    hobbit.appendChild(textNode);
    hobbitList.appendChild(hobbit);
  }
  
  theShire.appendChild(hobbitList);
}

makeHobbits();
var frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
  
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  theRing.addEventListener('click', 'nazgulScreech');
  frodo.appendChild(theRing);

}

keepItSecretKeepItSafe();

function makeBuddies() {
  
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i = 0, len = buddies.length; i < len; i++){
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
 
  }
  
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();

var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  strider.textContent = 'Aragon';
}

beautifulStranger();

var hobbits = theShire.querySelector('ul');

function leaveTheShire() {
  rivendell.appendChild(hobbits);
}

leaveTheShire();

var fellowshipMembers = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(var i = 0, len = fellowshipMembers.length; i < len; i++){
    theFellowship.appendChild(fellowshipMembers[i]);
  
  }
  
  rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();

var gandalf = fellowshipMembers[0];

function theBalrog() {
  
  gandalf.textContent = 'Gandalf the White';
  gandalf.style.border = '3px solid gray';
  gandalf.style.backgroundColor = 'white';

}

theBalrog();

var boromir = fellowshipMembers[4];

function hornOfGondor() {
  
  alert('the horn of gondor has blown');
  boromir.style.textDecoration = 'line-through';
  boromir.parentNode.removeChild(boromir)

}

hornOfGondor();

var sam = fellowshipMembers[6];

function itsDangerousToGoAlone(){
  
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);

}

itsDangerousToGoAlone();

var gollum, theRing;

function weWantsIt() {
  
  gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  theRing = frodo.querySelector('#the-ring');
  gollum.appendChild(theRing);
  var mountDoom = mordor.querySelector('#mount-doom');
  mountDoom.appendChild(gollum);

}

weWantsIt();

function thereAndBackAgain() {
  
  gollum.parentElement.removeChild(gollum);
  var hobbitUL = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for(var i = 0, len = hobbits.length; i < len; i++){
    hobbitUL.appendChild(hobbits[i]);
  
  }
  
  theShire.appendChild(hobbitUL);
}

thereAndBackAgain();