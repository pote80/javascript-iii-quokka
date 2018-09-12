var roundScores = [36, 39, 44, 49, 45, 48, 52];

//Use reduce to get a sum
var sum = roundScores.reduce((total,score)=>total+score);
sum;
//Use the sum to get an average
var average = sum/roundScores.length;
average;
//Handicap is 4
//Use a map to reduce all scores by 4
var handicap = roundScores.map((score) => score-4);
handicap;
//Use a reduce to get a sum
var handiSum = handicap.reduce((total,score)=>total+score);
handiSum;
//Use the sum to get an average
var handiAverage = handiSum/handicap.length;
handiAverage;

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"];   

//Use reduce to go through the lyricWords and concatenate them together
var lyrics = lyricWords.reduce((total,word) => total+word);
lyrics