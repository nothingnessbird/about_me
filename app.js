'use strict';

var counter = 0;

alert('WELCOME TO THE GAME. Don\'t worry, it\'s not a very complicated game. The game is called FOUR TRUTHS AND A LIE. I\'m going to tell you something that I, Kinley, have done or experienced at some point in my life....but one of things is going to be a lie. Which one\'s the lie? Well that\'s up to you to figure out. Are you ready to play? The rules are simple, you just answer yes if you think what I said is a truth, and no is you think it\'s the lie. Remember the name of the game is FOUR TRUTHS AND A LIE and I *will* be keeping score, so if you keep marking no, I\'m gonna know you suck, and tell you so. Let\'s begin! (If you think you can hack it.)');

var chinook = prompt('I have ridden in a military Chinook helicopter with my dog. (Remember, yes for truth, no for lie.)');
chinook = chinook.toUpperCase();
console.log('q1: chinook y/n (y)');
console.log(chinook);

if(chinook === 'Y' || chinook === 'YES') {
  alert('Think you\'re a smartypants, huh? Well they won\'t all be that easy! that one was a gimme! You probably knew I worked for a bush plane company in Alaska, sending climbers up to base camp on Denali, and got to go up myself a few times in the Chinooks the National Guard uses to help get camp ready for the season. Ready for the next one?');
  counter ++;
}else {
  alert('Bahahahaha! Nice try big shot! I HAVE been in a Chinook with my dog, when I worked for a bush plane company in Alaska, sending climbers up to base camp on Denali, and got to go up myself a few times in the Chinooks the National Guard uses to help get camp ready for the season. Better luck next time, dweeb! NEXT QUESTION');
}

var states = prompt('OK, try this one on for size: I have been to 46 of the United States (yes for truth, no for lie)');
states = states.toUpperCase();
console.log('q2: states y/n (y)');
console.log(states);

if(states === 'Y' || states || 'YES') {
  alert('Alright, maybe you\'re not a complete waste of brainspace. I guess it\'s not *that* unbelievable for someone to have been to 46 states. I did hitchhike most of that, though, betcha didn\'t know that! Next question!');
  counter ++;
} else {
  alert('HAHA YOU SUCK! I mean...WRONG! I mean...Yeah, no, I really have. I even hitchhiked most of that! Anyway, you can still get the next one right (maybe, I doubt it, though.)');
}
