let nikkPastas = [
    'Reminds me of how a lot of people bitched about having Hyunyoung Lee for 222 because you had to use LaTeX',
    'Like sure latex was a bitch to use, but you got the hang of it p quick',
    '@Shawn Dolifka who do you have for anth 370?',
    'Our team only got half the api points',
    'Am I the only one who thinks it\'s really bad that we didn\'t get our grades for the first team project until AFTER the Q drop deadline?',
    'I\'m convinced tanzir just doesn\'t understand us that much, or he\'s at least expecting a bit too much',
    'Btw who else is waiting on checkpoint 4 grades for the first team project?',
    'the pic just isn\'t the same because tanzir is not nearly as expressive as bettati',
    'Do we have to take quizzes with our section? Didn\'t see anything about it on the syllabus...',
    'Bettati one is better',
    'i dont have a grade for it',
    'Tbh idk I never got mp3 working',
    'Yeah never going above 2/3 seconds\n Probably just because I\'m on a quad core',
    'I get 0 when I divide by clocks_per_sec even if I multiply by a million',
    'Rip didn\'t get the internship',
    'I do think I misunderstood one of my code problems though, like I think I was solving the wrong thing. I didn\'t realize until the interview time had ran out, which was a shame. On a more positive note, one of the interviewers responded to my thank you email (I still need contact information for two of my recruiters though since I got underliverable errors from my email provider). He wrote me that he was very impressed with me.',
    'I feel like it went well. I actually had four interviews and most of them involved code/problem solving',
    'I flew back from my interview today/yesterday if anyone is wondering',
    'Got my Microsoft interview event today let\'s go bois',
    'Try me',
    'Not mad, just saying there\'s a line between joking and straight being a dick.\nA line that you crossed.',
    'Taking it too far IMO',
];

let res = function() {
    return nikkPastas[Math.floor(Math.random() * nikkPastas.length)];
}

regex = /\.*@nikk\.*/i;

exports.message = res;
exports.regex = regex;