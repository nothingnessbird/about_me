'use strict';

var counter = 0;

var name = prompt('What\'s your name, buddy?');
console.log(name);

alert('WELCOME TO THE GAME, ' + name.toUpperCase() + '. Don\'t worry, it\'s not a very complicated game. The game is called THE LYING GAME (a friendly get to know ya). Are you ready to play? There are a couple different parts to the game. The first part is called TRUTH OR LIE? The rules are simple, you just answer yes if you think what I said is a truth, and no is you think it\'s the lie. If you don\'t follow the rules, I\'m gonna know you suck, and tell you so. Let\'s begin! (If you think you can hack it.)');

//internal array elements in this order: question, correct answer array, correct response, incorrect response, else response, incorrect answer array.
var questionArray = [
  ['I have ridden in a military Chinook helicopter with my dog. (Remember, yes for truth, no for lie.', ['yes','y'], 'Think you\'re a smartypants, huh? Well they won\'t all be that easy! that one was a gimme! You probably knew I worked for a bush plane company in Alaska, sending climbers up to base camp on Denali, and got to go up myself a few times in the Chinooks the National Guard uses to help get camp ready for the season. Ready for the next one?', 'Bahahahaha! Nice try big shot! I HAVE been in a Chinook with my dog, when I worked for a bush plane company in Alaska, sending climbers up to base camp on Denali, and got to go up myself a few times in the Chinooks the National Guard uses to help get camp ready for the season. Better luck next time, dweeb! NEXT QUESTION', 'LEARN HOW TO FOLLOW SIMPLE DIRECTIONS DUMMY', ['n','no']],
  ['OK, try this one on for size: I have been to 46 of the United States (yes for truth, no for lie)', ['yes','y'], 'Alright, maybe you\'re not a complete waste of brainspace. I guess it\'s not *that* unbelievable for someone to have been to 46 states. I did hitchhike most of that, though, betcha didn\'t know that! Next question!', 'HAHA YOU SUCK! I mean...WRONG! I mean...Yeah, no, I really have been to 46 states. I even hitchhiked most of that! Anyway, you can still get the next one right (maybe, I doubt it, though.)', 'SERIOUSLY? ARE YOU REALLY THAT INCAPABLE OF FOLLOWING SIMPLE INSTRUCTIONS? YES OR NO!', ['n','no']],
  ['Here\'s a good one for ya: I\'ve ridden a burro to the bottom of the Grand Canyon (yes for truth, no for lie)', ['n', 'no'], 'Well, well, well. You\'re smarter than the average bear. I\'ve never even *been* to the Grand Canyon. (though I have been to the Grand Canyon of the Yellowstone [I\'ll link to that on the page if you\'ve never heard of it.]) On to the next! You have two questions left.', 'HAH! That was a lie! I haven\'t even been to the Grand Canyon at all.(though I have been to the Grand Canyon of the Yellowstone [I\'ll link to that on the page if you\'ve never heard of it.]) On to the next! You have two questions left, in TRUTH OR LIE, before the next part starts.', 'OK, ' + name.toUpperCase() + '. I AM STARTING TO GET PISSED OFF HERE. DO YOU EVEN WANT TO PLAY? IT IS SO SIMPLE. YES OR NO. Y OR N. EASY PEASY.', ['y','yes']],
  ['Speaking of bears, this one time, driving from Alaska south through Canada, I totaled a 3/4 ton pickup truck on a grizzly bear. (yes for truth, no for lie)', ['y', 'yes'], 'Yeah yeah yeah, you probably heard me tell that story before, or are friends with me on facebook or something. I ought to bive half credit for that one. But yeah, apparently near Destruction Bay is the highest concentration of grizzly bears in North America. No Shit! Scared the crap out of the dog, that\'s for sure. Had to hitchhike all the way back to Talkeetna. Moving on!', 'You\'re not too bright, are you? I even foreshadowed that shit. Oh well. You can\'t help what don\'t want helped. Last question coming up. Good luck (you\'re gonna need it.)', 'YOU AREN\'T EVEN PLAYING, ARE YOU?', ['n','no']],
  ['Staying on theme...I once caught a 40lb King salmon (that\'s a Chinook salmon, just to throw in a little call-back) (yes for truth, no for lie)', ['y', 'yes'], 'Alright, you got me...I GOT THAT FISH! That\'s the end of the lying portion, stay tuned for the rest of The Game!', 'Whaddaya take me for, huh? I damn well DID catch a 40lb king; no fish stories here, I got proof. I hope you don\'t SUCK so badat the next part, doubty mcdoubtface.', 'GOOD JOB NOT EVEN TRYING ASSHOLE. The lying part is done, I hope you do a little better on the next part.', ['n','no']]
];

function lyingGame() {
  for (var i = 0; i < questionArray.length; i++) {
    var userInput = prompt(questionArray[i][0]);
    console.log(questionArray[i][0]);
    console.log(questionArray[i][1]);
    console.log(userInput);

    if(questionArray[i][1].includes(userInput.toLowerCase())) {
      console.log(counter);
      alert(questionArray[i][2]);
      counter++;
    }else if (questionArray[i][5].includes(userInput.toLowerCase())) {
      alert(questionArray[i][3]);
    } else {
      alert(questionArray[i][4]);
    }
  }
}

lyingGame();

function ashportation() {
  //question[0], correct answer[1], too low response[2], too high response[3], nonsense answer response[4], correct answer response[5]
  var ashportationArray = ['OK, new type of question! Are you ready? Can you follow directions? It\' super simple. My dog, Asha, is a service dog. She\'s been on a whole lot of different forms of transportation. I want you to GUESS how many forms of *water-based* (think like boats or ferries or jetskis) types of transportation Asha has been on. Enter your guess below. You get FOUR tries, so make the best of them.', 27, 'TOO LOW. Nice try, but no dice. Give it another go, hot shot.', 'TOO HIGH. Nice try, but no dice. Give it another go, hot shot.', 'YOU DIDN\'T FOLLOW DIRECTIONS, NUMBSKULL. I SAID ENTER A NUMBER. Give it another go, hot shot.', []];

  var ashportation = prompt(ashportationArray[0]);
  console.log(ashportationArray[0]);

  var ashportationcounter = 0;
  for (var i = 0; i < 4; i++) {
    if (parseInt(ashportation) === ashportationArray[1]) {
      console.log(counter);
      console.log(ashportation);
      counter++;
      break;
    } else if (parseInt(ashportation) < ashportationArray[1]) {
      console.log(ashportationcounter);
      console.log(ashportation);
      ashportationcounter++;
      var ashportation = prompt(ashportationArray[2]);
    } else if (parseInt(ashportation) > ashportationArray[1]) {
      console.log(ashportation);
      console.log(ashportationcounter);
      ashportationcounter++;
      var ashportation = prompt(ashportationArray[3]);
    } else {
      console.log(ashportation);
      console.log(ashportationcounter);
      ashportationcounter++;
      var ashportation = prompt(ashportationArray[4]);
    }
  }

  console.log(ashportationcounter);
  if (ashportationcounter === 4) {
    alert('FOUR TRIES and you never got it?! You\'re lucky I\'m giving you SIX in the next question.');
  } else if (ashportationcounter > 0) {
    console.log(counter);
    alert('Not toooooo bad..... it only took you ' + ashportationcounter + '/4 tries to get it. WITH HELP. I hope you do a little better on the next one, slick, it\'s your last chance');
    counter++;
  } else if (ashportationcounter === 0) {
    alert('HOLY COW! How did you guess that right off?! One and done. Great job. I almost want to give you two points (but I won\'t). Your prize is....another question!');
  }
}

ashportation();

alert('You made it all the way to the last question! (somehow) Now it\'s time for (you guessed it) another guessing game! I talked about a king (Chinook) salmon earlier, this question is about *non* salmon fish. Five of my favorite fish to go fishing for in Alaska are not types of salmon (though some may be salmonids). If you can guess even ONE of them (and I\'m gonna give you SIX tries for this), you get a point! Are you ready?');

function fish() {
//fish question[0], array of correct answers[1], incorrect response[2], one shot kill[3]
  var fishArray = ['GUESS A FISH: guess one of my five favorite non-salmon (salmonids are ok) fish to fish for in Alaska', ['rainbow trout', 'burbot', 'halibut', 'dolly varden', 'arctic char'], 'GUESS AGAIN BOZO (a fish that is not a salmon [it can be a salmonid] that is in my top 5 favorite to fish for in Alaska)', 'WHOA! Great guess, ' + name + '! One shot kill! ' + fishGuess + ' is indeed one of my top 5 favorite non-salmon fish to go fishing for in Alaska, the whole list is: rainbow trout, burbot, halibut, dolly varden, and arctic char.'];

  var fishGuess = prompt(fishArray[0]);
  console.log(fishArray[0]);
  console.log(fishArray[1]);
  console.log(fishGuess);

  var fishcounter = 0;
  for (var i = 0; i < 6; i++) {
    if (fishArray[1].includes(fishGuess.toLowerCase()) && fishcounter === 0) {
      console.log(fishcounter);
      console.log(fishGuess);
      counter++;
      break;
      var fishGuess = prompt(fishArray[3]);
    } else if (!fishArray[1].includes(fishGuess.toLowerCase())) {
      console.log(fishGuess);
      console.log(fishcounter);
      var fishGuess = prompt(fishArray[2]);
      fishcounter++;
    }
  }

  if (fishcounter === 6) {
    alert('SIX GUESSES AND NO DICE? Wow. You know google exists right? Well, the whole list is: ' + fishArray[1].join(', '));
  } else if (fishcounter > 0) {
    console.log(counter);
    alert('Only took you ' + fishcounter + '/6 tries, huh? To get one? Well, the whole list is: ' + fishArray[1].join(', '));
    counter++;
  }
}

fish();

if(counter === 7) {
  alert('Holy crap, ' + name + '! What are you?! A stalker?! You got 7/7 correct! How did you know so damn much about me? I don\'t know if you\'re preternaturally good at guessing games, have *really* good luck, or you\'ve been playing this game over and over until you got them all right. Whatever it is, I\'m creeped out. But I guess you can look at the page anyway and see some pictures and stuff of me in the Last Frontier. Have fun creep!');
} else if (counter >= 3 && counter <= 6) {
  alert('Not too shabby, ' + name + '. I grudgingly concede that you\'re not complete shit at guessing games (or you cheated and played more than once). You got ' + counter + '/7 correct. That\'s not the worst score I\'ve ever seen. You may not feast your eyes on pictures and information of yours truly in the Last Frontier.');
} else if (counter === 2 || counter === 1) {
  alert('Oh come ON, ' + name + '. IS that *really* the best you can do? ' + counter + '/7? That\'s pathetic. I almost don\'t even want you to see my page, but I guess you can...It\'s a bunch of awesome pictures and stuff about me in the Last Frontier. You definitely don\'t deserve it, but have at it.');
} else if (counter === 0) {
  alert('YOU GOT 0/7. FREAKING ZE-RO, ' + name.toUpperCase() + '. HOW DO YOU EVEN GET SUCH A RIDICULOUS SCORE?');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('Yeah so I guess even though you don\'t remotely deserve it, you can look at my site, with my awesome pictures and stuff about me in the Last Frontier');
}
