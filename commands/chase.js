let chase = [
    'How many times do I have to tell you I don\'t give a shit about the bounded buffer right now',
    'I\'m done in this chat for a bit',
    'also, I fixed it, no thanks to you',
    'That is wrong. Do you agree?',
    'I don\'t know how I can be any clearer. I DONT CARE ABOUT THE BUFFER RIGHT NOW',
    'Okay, fine, but that\'s not my problem right now',
    'Thanks for giving us a fucked API.',
    'Forgive me for assuming that you\'d at least write a "getSize" function correctly. Apparently you can\'t even do that right.',
    'Alright, I apologize to everyone for what happened earlier.\n\nBut show\'s over, let\'s all agree to be civil and keep this groupme as simply a place where we can ask each other for help and not worry about the formalities.\n\nAt this point, I\'d like to ask everyone that isn\'t in this class to please leave the groupme.',
    'homework due at 11:59 pm\nStarts homework at 11:30 pm\nTurns homework in at 11:59 pm'
];

res = function() {
    return chase[Math.floor(Math.random() * chase.length)];
}

regex = /\.*@chase\.*/i;

exports.regex = regex;
exports.message = res;